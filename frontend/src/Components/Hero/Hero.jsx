import React from 'react';
import './Hero.css';
import hero_img from '../Assets/herogroup2.png';
const Shop = () => {

    const scrollDown = () => {
        let scrollAmount = 1000; 

            if(window.innerWidth < 1280) { 
               
            scrollAmount = 653; 
                 if(window.innerWidth <= 1024) { 

                scrollAmount = 653; 
                
                   if(window.innerWidth <= 800) { 

                        scrollAmount = 620; 
                        if(window.innerWidth <= 500) { 

                            scrollAmount = 510; 
                            }
                        }
                    }
            }
          
           
            window.scrollBy({
            top: scrollAmount,
            left: 0,
            behavior: 'smooth'
            });
        };


    return (
        <div className='hero'>
            <div className="hero-left">
                <div className="hero-header">
                    <div className="hero-header-text">
                        <p>EXLUSIVE STYLE - EMBRACE THE NEW</p>
                        <p></p>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={hero_img} alt='hero-img' />
                </div>
                <div className="hero-latest-btn">
                    <button onClick={scrollDown}>
                        Shop Latest
                        
                        
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Shop;
