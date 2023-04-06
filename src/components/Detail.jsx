import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})



    useEffect(() => {
        // axios(`${URL-BASE}/${id}?key=${API_KEY}`).then
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <h2>Name |{character?.name}</h2>
            <h2>Status | {character?.status}</h2>
            <h2>Species |{character?.species}</h2>
            <h2>Gender |{character?.gender}</h2>
            <h2>Origin| {character.origin?.name}</h2>
            <h2><img src={character?.image} alt="" /></h2>
        </div>
    )
}

export default Detail;