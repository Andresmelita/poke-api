import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }

    return (
        <form onSubmit={submit}>
        <input id='search' type="text" placeholder='Search a pokemon' />
        <button>Search</button>
        </form>
    )
}

export default InputSearch
