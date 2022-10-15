import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexID/Pokemon404'

const PokedeXByID = () => {

    const{id} = useParams()

    const [pokemon, setPokemon] = useState()
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
    }, [])

    if (hasError) {
        return <Pokemon404/>
    }

    return (
        <article>
            <header>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt=''/>
            </header>
            <section>
                <h2>{pokemon?.name}</h2>
            </section>
        </article>
    )
}

export default PokedeXByID