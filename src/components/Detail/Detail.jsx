import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL_BASE = 'https://be-a-rym-up.railway.app/api/character'
const API_KEY = '6f39e2df4ca2.b90f5add6ea910377b7f'

const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            alert('No hay personajes con ese ID');
        }
        });

        return setCharacter({});
    }, [id]);
    return (
    <div className="info">
        <div className="info-container">
            <div className="info-header">
                <img className="info-image" src={character?.image} alt="RickAndMorty" />
                <h2>{character?.name}</h2>
            </div>
            <div className="info-description">
                <h2>Status| {character?.status}</h2>
                <h2>Species| {character?.species}</h2>
                <h2>Gender| {character?.gender}</h2>
                <h2>Origin| {character.origin?.name}</h2>
            </div>
        </div>
    </div>
    )
}

export default Detail;