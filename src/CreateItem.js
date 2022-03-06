import React from 'react';
import './CreateItem.css';
import Image from './Image.png';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import NavbarMobile from './NavbarMobile.js'

const CreateItem =() =>{
    return(<div className='createitempage'>
            <div className='navcreateitem'><Navbar /></div>
            <div className='navmobile'><NavbarMobile /></div>
            <div className='createiteminside'>
                <div className='createtitle'>Create New Item</div>
                <div className='uploadfileitem'>
                    <div className='uploadfiletext'>Upload File</div>
                    <div className='uploadfilenext'>
                        <div className='jpgtxt'>JPG, PNG, GIF, SVG, WEBM, MP3, MP4, Max 100mb.</div>
                        <div className='imageicondiv'><img className='imageicon' src={Image} /></div>
                        <div className='drag'>Drag and Drop File</div>
                        <div className='dragnext'>
                            <div className='or'>or</div>
                            <div className='browse'>browse media on your device</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='nametitle'>Name</div>
                    <div className=''><input className='namenext' type='text' placeholder='Item Name' /></div>
                </div>
                <div className=''>
                    <div className='desctitle'>Description</div>
                    <input className='descriptionnext' type='text' placeholder='Description of your item' />
                </div>
                <div className=''>
                    <div className='pricetitle'>Price</div>
                    <input className='pricenext' type='text' placeholder='Enter Price' />
                </div>
                <div className='create'><button className='createbutton' >Create Item</button></div>
            </div>
            <div className='footercreatepg'><Footer /></div>
        </div>)
}

export default CreateItem;