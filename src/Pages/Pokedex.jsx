import React from 'react'
import { useSelector } from 'react-redux'

const Pokedex = () => {

    const userName = useSelector(state => state.userName)

    return (
        <div>
            <header>
                <h1>Pokedex</h1>
                <p>Welcome <span>{userName}</span>, here you can find your favorite pokemon.</p>
            </header>
        </div>
    )
}

export default Pokedex