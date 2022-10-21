import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexID/Pokemon404'
import pokedexByID from './styles/pokedexByID.css'

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
        <article >
            <section className={`containerID back-${pokemon?.types[0].type.name}`}>
                <img className='pokeball-img' src='./images/pokeball3.png' alt=''/>
                <article className={`card-pokeID border-${pokemon?.types[0].type.name}`}>
                    <img className='card-poke_spriteID' src={pokemon?.sprites.other['official-artwork'].front_default} alt=''/>
                    <header className={`card-poke_headerID bg-${pokemon?.types[0].type.name}`}></header>
                    <section className='card-poke_bodyID'>
                        <h3 className={`card-poke_nameID letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                        <ul className='card-poke_types-container'>
                            {
                                pokemon?.types.map(type => (
                                    <li key={type.slot} className={`card-poke_type`}>{type.type.name}</li>
                                ))
                            }
                        </ul>
                    </section>
                    <section className='card-poke_bodyID'>
                        <h3 className={`card-poke_nameID letter-${pokemon?.types[0].type.name}`}>Abilities</h3>
                        <ul className='card-poke_abilities-container'>
                            {
                                pokemon?.abilities.map(ability =>(
                                    <li key={ability.ability.name} className={`card-poke_abilities back-${pokemon?.types[0].type.name}`}>
                                        <span className='card-poke_abilities-label'>{ability.ability.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                    {/* APARTADO DE STATS */}
                    <section className='card-poke_bodyID'>
                        <h3 className={`card-poke_nameID letter-${pokemon?.types[0].type.name}`}>Stats</h3>
                        <ul className='card-poke_stat-containerID'>
                            {
                                pokemon?.stats.map(stat =>(
                                    <li key={stat.stat.name} className='card-poke_stat'>
                                        <span className='card-poke_stat-label'>{stat.stat.name}</span>
                                        <span className={`card-poke_stat-number letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                    {/* APARTADO DE MOVIMIENTOS */}
                    <section className='card-poke_bodyID'>
                        <h3 className={`card-poke_nameID letter-${pokemon?.types[0].type.name}`}>Movements</h3>
                        <ul className='card-poke_moves-container'>
                            {
                                pokemon?.moves.map(move =>(
                                    <li key={move.move.name} className='card-poke_moves'>
                                        <span className='card-poke_moves-label'>{move.move.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                </article>
            </section>
        </article>
    )
}

export default PokedeXByID