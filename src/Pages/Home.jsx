import React, { useEffect, useState } from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {

    //Imagen de fondo
    const [backImage, setBackImage] = useState()

    useEffect(()=>{
        const URL = `url(../images/home/deoxis.png)`
        setBackImage(URL)
    },)

    const backGroundObject = {
        backgroundImage: backImage
    }

    return (
        <div className='pokedex' style={backGroundObject}>
            <img className='pokedex_img' src='./images/home/pokedex.png' alt=''/>
            <header className='pokedex_header'>
                <h2 className='pokedex_subtitle'>Hi Trainer!</h2>
                <p className='pokedex_text'>Give me your name to see the pokedex</p>
            </header>
            <FormHome/>
        </div>
    )
}

export default Home