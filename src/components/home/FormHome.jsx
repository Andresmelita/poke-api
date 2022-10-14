import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from'../../store/slices/userName.slice'

const FormHome = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
        navigate('/pokedex')
    }

    return (
        <form onSubmit={submit} className='pokedex_form'>
            <input className='pokedex_input' type='text' placeholder='Enter your name here'/>
            <button className='pokedex_btn'>Catch them all!</button>
        </form>
    )
}

export default FormHome