import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data.js'
import {GoThreeBars} from 'react-icons/go'
import'./navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="container nav__container">

            {/* This is where I define the Logo */}

                <Link to="/" className='logo'>
                    <img src={Logo} alt="Nav Logo" />
                </Link>

            {/* This is where I define the nav links */}

                <ul className='nav__links'>
                    {
                        links.map(({name, path}, index) =>{
                            return(
                                <li>
                                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav':''}>{name}</NavLink>
                                </li>
                            )
                        }
                        )
                    }
                </ul>

            {/*This is where I define the nav buttons */}
                <button className='nav__toggle-btn'>
                    <GoThreeBars></GoThreeBars>
                </button>
            </div>
        </nav> 
    )
}

export default Navbar