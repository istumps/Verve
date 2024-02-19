import React, {useState, useContext, useRef} from 'react'
import './Navbar.css'
import logo from '../Assets///logos_transparent.png' // logo.png
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nv_dropdown.png'
const Navbar = () => {

    const [menu, setMenu] = useState('shop')
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    
    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt='logo' />
                <p>VERVE</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle}  src={nav_dropdown} alt='SOME NAME '/>
        <ul ref={menuRef} className='nav-menu'>
   
            <li onClick={()=>{setMenu("shop")}}><Link style = {{color: 'red', textDecoration: 'none'}} to='/'>Shop</Link>{menu === "shop" ?<hr/>:<></> }</li>
            <li onClick={()=>{setMenu("mens")}}><Link style = {{ color: 'red', textDecoration: 'none'}}  to ='/mens'>Men</Link>{menu === "mens" ?<hr/>:<></>  }</li>
            <li onClick={()=>{setMenu("womens")}}><Link style = {{ color: 'red', textDecoration: 'none'}}  to = '/womens'>Women</Link>{menu === "womens" ?<hr/>:<></>  }</li>
            <li onClick={()=>{setMenu("kids")}}><Link style = {{ color: "red", textDecoration: 'none'}}  to ='/kids'>Kids</Link>{menu === "kids" ?<hr/>:<></>  }</li>  
        </ul>
        <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')? <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.reload()}}>Logout</button>
            :<Link to ='/login'><button>Login</button></Link> }

            <Link to= '/cart'><img src={cart_icon} alt='cart' /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
        </div>
    )
}

export default Navbar
