import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {data} from '../../../data.js'
import "./Cards.scss"

const Cards = () => {
    const navigate = useNavigate();
    const nugHandler = (name) => {
        navigate(`/profile/${name}`);
    }
  return (
    <div className='cards'>
        {data.map((nug) => 
            <div key={nug.name} onClick={() => nugHandler(nug.name)}>
                <img src={nug.img} alt="" />
                <div className='info'>
                    <h3>{nug.name}</h3>
                    <p>{nug.price}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default Cards