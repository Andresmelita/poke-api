import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokedeXByID = () => {

    const{id} = useParams()

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(pokemon)
    

    return (
        <div>PokedeXByID</div>
    )
}

export default PokedeXByID