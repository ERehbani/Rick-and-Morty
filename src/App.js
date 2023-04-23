import './App.css';
import Aboutcss from './components/About/About.css';
import Cardcss from './components/Card/Card.css';
import Detailcss from './components/Detail/Detail.css';
import Formcss from './components/Form/Form.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';



function App() {

   const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
   const API_KEY = '8fb642c2d867.9045b04fba3654f73924';
   
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const location = useLocation()
   const navigate = useNavigate()
   const [access, setAccess] = useState(false);
   const email = 'tu@example.com';
   const password = '123asd';

   const login = (userData) => {
      if(userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   
   const handleLogOut = () => {
   setAccess(false);
   navigate('/');
}


   useEffect(() => {
      !access && navigate('/')
   }, [access])

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }



   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav handleLogOut={handleLogOut} onSearch={onSearch}/>
         }



         <Routes> 
            <Route path='/' element={<Form login={login}/>}/>  {/*Forma de pasarle una props al Form*/}
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail id={"id"}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>

         

      </div>

   );
}

export default App;