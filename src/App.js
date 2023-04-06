import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';



function App() {
   const [characters, setCharacters] = useState([]);

    const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const [access, setAccess] = useState(false);
   const EMAIL = 'tu-correo-electronico@example.com';
   const PASSWORD = 'tu-contraseña-secreta';
   const navigate = useNavigate()

   const login = (userData) => {
      if(EMAIL === userData && PASSWORD === userData ){
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters => characters.id !== Number(id))
      setCharacters(charactersFiltered)
   }


   return (
      <div className='App'>

          <Nav onSearch={onSearch}/>  


         <Routes>
            <Route path='/' element={<Form/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>

         

      </div>

   );
}

export default App;
