import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/style.css'
import Crud from './crud'
import DocBg from "../pics/DocBg.mp4"

function Doctors() {
    return (
        <>

<video src={DocBg} autoplay loop playsinline muted></video>
            

            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container2'>
                    <h1> Welcome Doctors to MediLogix ! </h1>
                </div>
                <Crud/>
            </div>
        </>
    )
}

export default Doctors