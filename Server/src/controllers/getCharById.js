import axios from 'axios'

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)


}

module.exports = {
    getCharById
}