import React from 'react'
import './loading.scss'

const Loading = () => {
    return (
        <div className='poke-loading'>
            <div className="item">
                <div className="ball"></div>
                <div className="half-sup"></div>
                <div className="half-ball"></div>
                <div className="big-button"></div>
                <div className="small-button"></div>
                <div className="horizon"></div>
            </div>
        </div>
    )
}

export default Loading
