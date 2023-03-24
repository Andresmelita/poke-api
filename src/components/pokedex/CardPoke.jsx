import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.scss'

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
                <div className='cardpoke_types-container'>
                    {
                        pokemon?.types.map(type => (
                            <span className='cardpoke_type_box' style={{borderRadius: '16px'}}>
                                <p key={type.slot} className={`cardpoke_type bg-${type.type.name}`} style={{borderRadius: '16px', fontSize: '16px'}}>{type.type.name}</p>
                            </span>
                            
                        ))
                    }
                </div>
                <p className='cardpoke_type-label'></p>
                <div className='cardpoke_stat-container'>
                    {
                        pokemon?.stats.map(stat =>(
                            <span key={stat.stat.name} className='cardpoke_stat'>
                                <p className='cardpoke_stat-label' style={{fontSize: '10px'}}>{stat.stat.name}</p>
                                <p className={`cardpoke_stat-number letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}</p>
                            </span>
                        ))
                    }
                </div>
            </section>
        </article>
    )
}

export default CardPoke