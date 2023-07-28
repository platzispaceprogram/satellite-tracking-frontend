import videoBgd from '../assets/videoBgd.mp4'

const Home = () => {
    return (
        <div className='home'>
            <div className='overlay'/>
            <video src={videoBgd} autoPlay loop muted/>
            <div className='content'>
                <h1>FOLLOWSAT 1</h1>
                <h2>App Rastreo Satelital</h2>
                <p>Platzi SPace Program</p>
            </div>
        </div>
    )
}

export default Home