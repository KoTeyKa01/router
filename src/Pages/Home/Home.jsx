import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {data} from '../../../data.js'
import './Home.scss'

const Home = () => {
    const navigate = useNavigate();
    const nugHandler = (name) => {
        navigate(`/profile/${name}`);
    }
  return (
    <div>
        <h1>Home page</h1>
        <Link to={'/about'}>About</Link>
        <br />
        <Link to={'/contact'}>Contact</Link>
        
        <div className='wrapper'>
            {data.map((nug) => 
                <div key={nug.name} onClick={() => nugHandler(nug.name)}>
                    <img src={nug.img} alt="" />
                    <h3>{nug.name}</h3>
                    <p>{nug.price}</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default Home