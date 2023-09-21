import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Table from './Table'
import Card from './card'




function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>

            <Layout />
            <div className='dbg'>
            <div className='main-wrapper'>
                <div className='welcome-container1'>
                    <h1> Welcome <span className=' username-color'>{user.username} </span> to MEDILOGIX ! </h1>
                </div>
                <Table/>
            
                </div>
                <div><img class="square" src={require('../pics/PIE.PNG')} alt="user" /></div>
                <Card/>
                
                <div class="div1">
                    <div class='div2'>Not all Angels have wings</div>
                    <div class='div3'>Some have Stethoscopes</div>
                </div>
            
                    <div class='div4'>YOUR HEALTH IS</div>
                    <div class='div5'>OUR PRIORITY</div>
                    <div class='div6'>BOOK AN APPOINTMENT</div>

            </div>
        </>
    )
}

export default Dashboard