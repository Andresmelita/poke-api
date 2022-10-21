import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputs.css'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }

    return (
        <form onSubmit={submit} className='search'>
        <input id='search' type="text" placeholder='Search a pokemon' className='search-input'/>
        <button className='button-input'>Search</button>
        </form>
    )
}

export default InputSearch
