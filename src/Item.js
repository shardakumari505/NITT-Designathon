import React from 'react';
import './Item.css';
import Img2 from './img2.jpeg';
import Heartblack from './heartblack.png';
import Painting6 from './painting6.jpg';
import { NavLink } from 'react-router-dom';
import Footer from './Footer.js';
import Navbar from './Navbar.js';

const Item =() =>{
    return(<div className='itempage'>
        <div className='navitem'><Navbar /></div>
            <div className='itemleft'>
                <div className='leftimgdiv'><img className='leftimg' src={Painting6} /></div>
            </div>
            <div className='itemright'>
                <div className='itemrightall'>
                    <div className='itemrighttitle'>
                        <div className='itemtitle'>Abstract Smoke Red Blue</div>
                        <div className='itemrighticondiv'><img className='iconheart' src={Heartblack} /> 92</div>
                    </div>
                    <div className='profiledata'>
                        <div className=''>From</div>
                        <div className='prodata'>4.5 ETH</div>
                        <div className='dot'></div>
                        <div className=''>20 of 25 available</div>
                    </div>
                    <div className='creator'>Creator</div>
                    <div className='profilecontnt'>
                        <div className='miaimgdiv'><img className='miaimg' src={Img2} /></div>
                        <div className='miatextdiv'><div className='miatext'>Mia Ayana</div></div>
                    </div>
                    <div className=''>
                        <div className='doh'>
                            <div className='details'>Details</div>
                            <div className=''>Offers</div>
                            <div className=''>History</div>
                        </div>
                        <div className='dohbasediv'></div>
                        <div className='dohtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                    </div>
                    <div className='itembutton'>
                        <div className='buttondivk'><button className='loadbuttonk'><NavLink className='link buttonk' to="/Item">Buy for 4.5 ETH</NavLink></button></div>
                        <div className='buttondivl'><button className='loadbuttonl'><NavLink className='link buttonl' to="/Item">Make Offer</NavLink></button></div>
                    </div>
                </div>
            </div>
            <div className='footeritempg'><Footer /></div>

        </div>)
}

export default Item;