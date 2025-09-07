import React from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../../../data.js'
import './Profile.scss'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const Profile = () => {
    const {name} = useParams()
    const user = data.find((nug) => nug.name === name);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
    return (
    <div className='profile'>
        <h1>Welcome to profile {name}</h1>
        <div className='watch'>
            <img src={user.img} alt="" />
            <div>
                <p>{user.price}</p>
                <h5 className='about'>{user.h5}</h5>
                <div>
                    <Button className='btn' onClick={handleOpen}>Purchase</Button> {/* Show backdrop */}
                    <Backdrop
                        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1})}
                        open={open}
                        onClick={handleClose}
                    >
                        <CircularProgress color="inherit" />
                        Just a backdrop
                    </Backdrop>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Profile