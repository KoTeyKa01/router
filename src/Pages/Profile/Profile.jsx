import React from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../../../data.js'
import './Profile.scss'

const Profile = () => {
    const {name} = useParams()

    const user = data.find((nug) => nug.name === name);
    return (
    <div>
        <h1>Welcom to profile {name}</h1>
        <div className='watch'>
            <img src={user.img} alt="" />
            <p>{user.price}</p>
        </div>
        
    </div>
  )
}

export default Profile