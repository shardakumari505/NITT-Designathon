import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import './NavbarMobile.css';
import { NavLink } from 'react-router-dom';

class NavbarMobile extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }


  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Explore</a>
        <a id="about" className="menu-item" href="/Item">My Items</a>
        <a id="contact" className="menu-item" href="/Profile">Following</a>
        <div className='connectbtndivnavmob'><button className='connectbtnnavmob'>Connect</button></div>
        <div className='createbtndivnavmob'><button className='createbtnnavmob'><NavLink className='createnav' to="/CreateItem">Create</NavLink></button></div>
      </Menu>
    );
  }
}


export default NavbarMobile;