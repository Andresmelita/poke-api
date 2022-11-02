import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import pokedex from './styles/pokedex.css'
import { useNavigate } from 'react-router-dom'

const Pokedex = () => {
    
    const [pokemons, setPokemons] = useState()
    const [typeSelected, setTypeSelected] = useState('All Pokemons')

    useEffect (() => {
        if(typeSelected !== 'All Pokemons'){
            //Si se seleccionó un tipo
            axios.get(typeSelected)
                .then(res => {
                    const result = res.data.pokemon.map(e => e.pokemon)
                    setPokemons(result)
                })
                .catch(err => console.log(err))
        } else {
            //Si quiero todos los pokemons
            const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0'
            axios.get(URL)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))
        }
    }, [typeSelected])

    const userName = useSelector(state => state.userName)

    //Lógica de paginación

    const [page, setPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(8)
    const initialPoke = (page - 1)*pokePerPage
    const finalPoke = page * pokePerPage

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/`)
    }

    return (
        <div>
            <Header/>
            <header>
                <img className='pokedex-logo' alt='' src='./images/home/pokedex.png' onClick={handleClick}/>
                <p className='pokedex-welcome'>Welcome <span><b>{userName}</b></span>, here you can find your favorite pokemon!</p>
            </header>
            <aside className='pokedex-aside'>
                <InputSearch/>
                <Pagination
                    page={page}
                    pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
                    setPage={setPage}
                />
                <SelectByType setTypeSelected={setTypeSelected} setPage={setPage} />
            </aside>
            <main>
                <div className='card-container'>
                    {
                        pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
                            <CardPoke
                                key={pokemon.url}
                                url={pokemon.url}
                            />
                        ))
                    }
                </div>
            </main>
            <div className='paginationTwo'>
                <Pagination
                    page={page}
                    pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
                    setPage={setPage}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Pokedex