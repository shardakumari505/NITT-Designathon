import React from 'react';
import './Navbar.css';
import Search from './Search.png';
import Light from './Light.png';
import { NavLink } from 'react-router-dom';


const Navbar = () =>{
    return(<div className='navbarpg'>
        <div className='navbarpgtop'>
            <div className=''><img className='logoimg' src={Light} /></div>
            <div className='navsearch'><img className='searchicon1' src={Search} /><input className='searchbarexplore' type='text' placeholder='Search Item Here' /></div>
            <div className='explorenav'>Explore</div>
            <div className='exploremy'><NavLink className='myitemsnav' to="/Profile">My Items</NavLink></div>
            <div className='explorefollow'>Following</div>
            <div className='connectbtndiv'><button className='connectbtn'>Connect</button></div>
            <div className='createbtndiv'><button className='createbtn'><NavLink className='createnav' to="/CreateItem">Create</NavLink></button></div>
        </div>
        </div>)
}

export default Navbar;