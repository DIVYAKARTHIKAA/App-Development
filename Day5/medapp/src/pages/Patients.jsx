import React from 'react'
import Layout from '../components/Layout'

import Crud1 from './crud1'
function Patients() {
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container3'>
                    <h1> Welcome Patients to Medilogix !</h1>
                </div>
                    <Crud1/>
            </div>

        </>
    )
}

export default Patients