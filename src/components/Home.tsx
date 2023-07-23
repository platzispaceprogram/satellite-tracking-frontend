import React from 'react'
import videoBg from '../assets/videoBg.mp4'

const Home = () => {
    return (
        <div className='home'>
            <div className='overlay'/>
            <video src={videoBg} autoPlay loop muted/>
            <div className='content'>
            <h1>FRANCISCO - SEBASTIAN - ANGEL</h1>
            <p>PLATZI SPACE PROGRAM</p>
            </div>
        </div>
    )
}

export default Home