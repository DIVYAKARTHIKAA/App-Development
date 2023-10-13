import React from 'react'
import '../assests/css/Footer.css'
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { MailOpen } from 'lucide-react';
import { Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    <div className="footer">
  

  
        <h3 class='text22'>Welcome to MEDILOGIX</h3>
        <p class="text3">Secure patient data management</p>
        <p class="text1">Easy collaboration among healthcare professionals</p>

              <div className="round-icon">
                            
                            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook/>
        </Link>
      
                            </div>
                            <div className="round-icon1">
                            <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <Instagram/>
      </Link>
                            </div>
                            <div className="round-icon2">  
                            <Link to="https://www.google.com/" target="_blank" rel="noopener noreferrer">
        <MailOpen/>
      </Link>
                            </div>
                            <div className="round-icon3">
                            <Link to="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <Linkedin/>
      </Link>
                            </div>



  <div className="links"> <h5>COMPANY</h5>
                        <hr className='h1'></hr>
                            <ul>
                                <li className="nav-item">
                                                 <Link to="/privacy">Privacy policy</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/Terms">Terms and Conditions</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/Freq">Frequently asked questions</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/AboutUs">About Us</Link>  
                                </li>
                                <li className="nav-item">
                                <Link to="/Contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>


                      
                        <div className="link1">  <h5>Reach Us At</h5>
                        <hr className='h1'></hr>
                        <hr className='h2'></hr>
                            <p><i class="fa-solid fa-phone-volume"></i> +91 9453471254</p>
                            <p><i class="fa-solid fa-envelope"></i> Medilogix@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Coimbatore, India.</p>
                        </div>
                        

  <div className="copyright">
    &copy; 2023 Your Medical Records. All Rights Reserved.
  </div>
</div>

  )
}

export default Footer

