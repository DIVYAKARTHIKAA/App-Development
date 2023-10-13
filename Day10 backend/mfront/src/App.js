import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';



import Landing from './pages/Landing';
import Privacy from './pages/privacy';
import Freq from './pages/Freq';
import Terms from './pages/Terms';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Patients from './pages/Patient';
import Appointment from './pages/Appointment';
import Record from './pages/Record';
import List from './pages/list';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';





function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/Freq" element={<Freq />} />
          <Route path="/Terms" element={<Terms/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Doctors" element={<Doctors/>} />
          <Route path="/Patient" element={<Patients/>} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/record" element={<Record/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/adduser" element={<AddUser/>} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser/>} />
          
        </Routes>
      </Router>
    
  );
}

export default App;
