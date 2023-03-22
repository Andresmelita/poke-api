import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.css'

const CardPoke = ({url}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <article className={`cardpoke border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
            <header className={`cardpoke_header bg-${pokemon?.types[0].type.name}`}>
                
            </header>
            <section className='cardpoke_body'>
                <img className='cardpoke_sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt=''/>
                <h3 className={`cardpoke_name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                <ul className='cardpoke_types-container'>
                    {
                        pokemon?.types.map(type => (
                            <li key={type.slot} className={`cardpoke_type bg-${type.type.name}`}>{type.type.name}</li>
                        ))
                    }
                </ul>
                <p className='cardpoke_type-label'></p>
                <ul className='cardpoke_stat-container'>
                    {
                        pokemon?.stats.map(stat =>(
                            <li key={stat.stat.name} className='cardpoke_stat'>
                                <span className='cardpoke_stat-label'>{stat.stat.name}</span>
                                <span className={`cardpoke_stat-number letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>
    )
}

export default CardPoke