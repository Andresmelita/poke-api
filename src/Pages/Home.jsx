import React from 'react'
import FormHome from '../components/home/FormHome'

const Home = () => {
    return (
        <div className='pokedex'>
            <h1 className='pokedex_title'>Pokedex</h1>
            <h2 className='pokedex_subtitle'>Hi Trainer!</h2>
            <p className='pokedex_text'>Give me your to see the pokedex</p>
            <FormHome/>
        </div>
    )
}

export default Home