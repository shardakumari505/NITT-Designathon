import React,{useState} from 'react';
import './Item.css';
import Img2 from './img2.jpeg';
import Heartblack from './heartblack.png';
import Painting6 from './painting6.jpg';
import { NavLink } from 'react-router-dom';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import Modal from './Modal';
import NavbarMobile from './NavbarMobile.js'

const BUTTON_WRAPPER_STYLES ={
    position:'relative',
    zIndex:1
}

const Item =() =>{

    const [isOpen, setIsOpen] = useState(false)
    const [isClose, setIsClose] = useState(true)
    return(<div className='itempage'>
        <div className='navitem'><Navbar /></div>
        <div className='navmobile'><NavbarMobile /></div>
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
                        <div className='data20'>20 of 25 available</div>
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
                        <div className='buttondivk' style={BUTTON_WRAPPER_STYLES}><button className='loadbuttonk' onClick={() => setIsOpen(true )}>Buy for 4.5 ETH</button></div>
                        <div className='buttondivl'><button className='loadbuttonl'><NavLink className='link buttonl' to="/Item">Make Offer</NavLink></button></div>
                        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                            <div className='checktitle'>Check Out</div>
                            <div className='checknext'></div>
                            <div className='subtitl'>
                                <div className='modalitem'>Item</div>
                                <div className='modalsubtotal'>Subtotal</div>
                            </div>
                            <div className='modal3rd'>
                                <div className='modalimgndtxt'>
                                    <div className='modalimg'><img className='modalimgpic' src={Painting6} /></div>
                                    <div className='imgnexttext'>
                                        <div className=''>Mia Ayana</div>
                                        <div className='modalabstract'>Abstract Smoke Red Blue</div>
                                    </div>
                                </div>
                                <div className='modalttldata'>
                                    <div className='modaldata'>4.5</div>
                                    <div className='modaldatatext'>ETH</div>
                                </div>
                            </div>
                            <div className='modaltotaldata'>
                                <div className='modaltotal'>Total</div>
                                <div className='modalttldata'>
                                    <div className='modaldata'>4.5</div>
                                    <div className='modaldatatext'>ETH</div>
                                </div>
                            </div>
                            <div className='modaltotalnext'></div>
                            <div className='modalbuttons'>
                                <div className=''><button className='modalcheckout'>Checkout</button></div>
                                <div className=''><button className='modalcancel'>Cancel</button></div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className='footeritempg'><Footer /></div>

        </div>)
}

export default Item;