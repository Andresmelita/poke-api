import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import pokemon404 from './styles/pokemon404.css'
import back from '../../../public/images/back.jpg'

const Pokemon404 = () => {

    return (
        <div>
            <Header/>
            <img className='backImage' src={back}></img>
            <div className='view'>
                <h1>Pokemon not Found</h1>
                <img className='notFound' src='./images/notFound.png' alt=''/>
                <Link to='/pokedex'>
                    <button className='return'>Return to Pokedex</button>
                </Link>
            </div>
        </div>

    )
}

export default Pokemon404
