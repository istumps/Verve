import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className = 'descriptionbox'> 
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade"> Reviews(122)</div>{/*Change to Reviews(122)*/}

             
        </div>
        <div className="descriptionbox-description">
            <p>  AN ecomerce website is an online platform that facilaites buying</p>
            <p> E-commerce websites typically dipslay products and detialed descriptions</p>
        </div>



        </div>
    )
}

export default DescriptionBox
