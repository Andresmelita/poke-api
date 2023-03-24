import React, { useEffect, useState } from 'react'
import FormHome from '../components/home/FormHome'
import Loading from '../components/Loading/Loading'
import './styles/home.css'

const Home = () => {
    const [backImage, setBackImage] = useState()
    const [loading, setLoading] = useState(false)

    useEffect (()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2600)
    },[])

    useEffect(()=>{
        const URL = `url(../images/home/deoxis.png)`
        setBackImage(URL)
    },)

    const backGroundObject = {
        backgroundImage: backImage
    }

    return (
        <div>
            {loading && <Loading/>}
            <div className='pokedex' style={backGroundObject}>
                <img className='pokedex_image' src='./images/home/pokedex.png' alt=''/>
                <header className='pokedex_header'>
                    <h2 className='pokedex_subtitle'>Hi Trainer!</h2>
                    <p className='pokedex_text'>Give me your name to see the pokedex</p>
                </header>
                <FormHome/>
            </div>
        </div>

    )
}

export default Home