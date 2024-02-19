import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logos_transparent.png' //logo_big.png
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
    return (
        <div className = 'footer'> 
        <div className="footer-logo">
            <img src={footer_logo} alt="footer_logo" />
            <p>VERVE</p>

        </div>
        <ul className="footer-links">
            <li><a href="/">Company</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Offices</a></li>
            <li><a href="/">About</a></li> 
            <li><a href="/">Contact</a></li>   
  
        </ul>
          <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="instagram_icon" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
          </div>
          <div className="footer-copyright">
            <hr/>
            <p>© 2024 VERVE. All rights reserved.</p>
          </div>
        </div>
    )
}

export default Footer
