import React from 'react'
import Layout from '../components/Layout'
import '../assests/css/appointment.css'


import Appoint1 from './Appoint1'
import Crud2 from './crud2'


function Appointment() {
    return (
        <>
    
            
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container3'>
                    <h1> Welcome Customers !</h1>
                </div>
                    <Appoint1/>
                    <Crud2/>
            </div>
            
        </>
    )
}

export default Appointment