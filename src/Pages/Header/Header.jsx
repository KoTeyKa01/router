import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
        <ul>
            <li><h1>Home page</h1></li>
            <div>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </div>
        </ul>        
    </div>
  )
}

export default Header