import React from 'react'
import Cards from '../Cards/Cards.jsx'
import Header from '../Header/Header.jsx'
import './Home.scss'
// import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import wristwatchBlack from '../../assets/img/wristwatchBlack.png'
import smartWatch from '../../assets/img/smart-watch.png'


function valuetext(value) {
    return `${value}°C`;
  }

const Home = () => {
    const [value, setValue] = React.useState([1800, 4000]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };  

  return (
    <>
    <Header/>
    <div className='home'>
        <div className="leftside">
            <ul>
                <li>
                    <h3>Price Range</h3>
                <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    step={500}
                    min={800}
                    max={10000}
                    marks
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    />
                </Box>
                    {/* <div>
                        <span>800</span>
                        <span></span>
                    </div> */}
                </li>
                <li>
                    <div className='watches'>
                        <button>
                            <img className='watch' src={wristwatchBlack} alt="" />
                            RegularWatch
                        </button>
                        <button>
                            <img className='smartwatch' src={smartWatch} alt="" />
                            SmartWatch
                        </button>
                    </div>
                </li>
            </ul>
        </div>
        <div className="rightside">
            <div className='wrapper'>
                <Cards/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home