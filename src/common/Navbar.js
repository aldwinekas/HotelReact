import React,{useState} from "react";
import {Link} from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    const[click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu=() => setClick(false)
    return(
        <>
            <nav className="navbar">
        <div className="container flex_space">
            <div className="menu-icon" onClick={handleClick}>
                <i class={click ? 'fas fa-times' : "fas fa-bars"}></i>
                </div>

                <ul className= {click ? "nav-menu active" : "nav-menu"}>
                <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to='/about'onClick={closeMobileMenu}>About</Link></li>
                <li><Link to='/gallery'onClick={closeMobileMenu}>Gallery</Link></li>
                <li><Link to='/destination'onClick={closeMobileMenu}>Destination</Link></li>
                <li><Link to='/blog'onClick={closeMobileMenu}>Blog</Link></li>
                <li><Link to='/testimonial'onClick={closeMobileMenu}>Testimonail</Link></li>
                <li><Link to='/contact'onClick={closeMobileMenu}>Contact Us</Link></li>
            </ul>
            <div className="login-area flex">
            <li>
                <Link to= "/sign-in">
                    <i className="far fa-chevron-right">Sign In</i>
                </Link>
            </li>
            <li>
                <Link to= "/register">
                    <i className="far fa-chevron-right">Register</i>
                </Link>
            </li>
            <li>
                <Link to= "/contact">
                    <button className="primary-btn">Request a Qoute</button>
                </Link>
            </li>
            </div>
        </div>
    </nav>

        <header>
            <div className="container flex_space">
            <div className="logo">
                <img src="images/logo.png" alt=""/>
            </div>

            <div className="contact flex_space">
                <div className="box flex_space">
                    <div className="icons">
                        <i className="far fa-clock"></i>
                        <div className="text">
                            <h4>Working Hours</h4>
                            <Link to= '/contact'> Senin - Minggu 09:00 - 18:00</Link>
                        </div>
                    </div>

                    <div className="box flex_space">
                    <div className="icons">
                        <i className="fas fa-phone-volume"></i>
                        <div className="text">
                            <h4>Call Us Hours</h4>
                            <Link to= '/contact'> +62 895 2312 1120</Link>
                        </div>
                    </div>

                    <div className="box flex_space">
                    <div className="icons">
                        <i className="far fa-envelope"></i>
                        <div className="text">
                            <h4>Email Hours</h4>
                            <Link to= '/contact'> stetho@example.com</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </header>
        </>
    )
}

export default Navbar