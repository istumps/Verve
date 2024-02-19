import React, { useContext, useState} from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('');
    
    const selectedStyle = {
        cursor: 'pointer',
        padding: '18px 24px', 
        margin: '5px',
        border: '2px solid grey',
        backgroundColor: '#E6E6E6',
      };
    
      const nonSelectedStyle = {
        cursor: 'pointer',
        padding: '18px 24px', 
        margin: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#ffffff',
      };
    
      const selectSize = (size) => {
        setSelectedSize(size);
      };
      const sizes = ['S', 'M', 'L', 'XL', 'XXL', ];

    return (
        <div className = 'productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                     <img src={product.image} alt={product.name} />
                     <img src={product.image} alt={product.name} />
                     <img src={product.image} alt={product.name} />
                     <img src={product.image} alt={product.name} />
                </div>
               <div className="productdisplay-image">
                <img className='productdisplay-main-img' src={product.image} alt={product.name} />
               </div>
            </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
        <div className="productdisplay-right-stars"> 
            <img src={star_icon} alt="star_icon" />
            <img src={star_icon} alt="star_icon" />
            <img src={star_icon} alt="star_icon" />
            <img src={star_icon} alt="star_icon" />
            <img src={star_dull_icon} alt="star_dull_icon" />
            <p>(122)</p> {/* Number of reviews UPDATE LATER */}
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
                <div className="productdisplay-right-description">
                    {product.description} {/** UPDATE LATER */}
                </div>
                </div>
                <div className="productdisplay-right-size">
                    <h1> Select Size</h1>
                    <div className="productdisplay-right-sizes">
                    {sizes.map((size) => (
                        <div
                            key={size}
                            style={selectedSize === size ? selectedStyle : nonSelectedStyle}
                            onClick={() => selectSize(size)
                                   
                            }
                            
                        >
                            {size}
                        </div>
                        ))}
                    </div>
                    </div>
                        
            <button onClick={()=>{addToCart(product.id)}}> ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span> {product.category}</p>
            <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>

            
        </div>



        </div>
    )
}; 

export default ProductDisplay
