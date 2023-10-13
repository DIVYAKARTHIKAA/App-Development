import React from 'react'
import Layout from '../components/Layout'
import '../assests/css/style.css'
import '../assests/css/Doctor.css'
import Doct1 from './Doct1'
import Doct2 from './Doct2'
import { Link } from 'react-router-dom'

function Doctors() {
    return (
        <>

                             
            
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container5'>
                    <h1> Welcome Doctors to MediLogix ! </h1>
                </div>
                <Doct1/>
                <Doct2/>
                <div className='pinkbtn333 pink111contact'><Link to='/adduser'>AddDoc</Link></div>
                
            </div>
        </>
    )
}

export default Doctors