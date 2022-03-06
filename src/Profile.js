import React from 'react';
import './Profile.css';
import Img1 from './img1.jpeg';
import Search from './Search.png';
import Arrow from './arrow.png';
import Heartwhite from './heartwhite.png';
import Heartblack from './heartblack.png';
import Painting1 from './painting1.jpg';
import Painting2 from './painting2.jpg';
import Painting3 from './painting3.jpg';
import Painting4 from './painting4.jpg';
import Painting5 from './painting5.jpg';
import Painting6 from './painting6.jpg';
import Painting7 from './painting7.jpg';
import Painting8 from './painting8.jpg';
import { NavLink } from 'react-router-dom';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import NavbarMobile from './NavbarMobile.js'

const Profile =() =>{
    return(<div className='profilepage'>
            <div className='navprofile'><Navbar /></div>
            <div className='navpromobile'><NavbarMobile /></div>
            <div className='profiletopbackground'><img className='profilebgimg' src={Painting3} /></div>
            <div className='profiletopimage'><img className='profileimageimg' src={Img1} /></div>
            <div className='profileoptions'>
                <div className='profilesearch'><img className='searchicon' src={Search} /><input className='searchbarexplore' type='text' placeholder='Search Item Here' /></div>
                <div className='profilerecently'><input className='searchbarexplore' type='text' placeholder='Recently Listed' /><img className='searchicon' src={Arrow} /></div>
            </div>
            <div className='hometophotbirds'>
                <div className='hometophotbirdstitle'>Hot bids</div>
                <div className='homehotbirdscard'>
                    <div className='homehotbirdcardcards1'>
                        <div className='homehotbidsimage'><img className='hotbidsimagepic' src={Painting2} /></div>
                        <div className='homehotbidstext'>Blue Red Art</div>
                        <div className='hotbidcardbottomsection'>
                            <div className='hotbiddatandtext'>
                                <div className='hotbiddata'>0.85</div>
                                <div className='hotbiddatatext'>ETH</div>
                            </div>
                            <div className='hotbidicon'><img className='logoimg' src={Heartwhite} /> 66</div>
                        </div>
                    </div>
                    <div className='homehotbirdcardcards2'>
                        <div className='homehotbidsimage'><img className='hotbidsimagepic' src={Painting1} /></div>
                        <div className='homehotbidstext'>Lake Landscape</div>
                        <div className='hotbidcardbottomsection'>
                            <div className='hotbiddatandtext'>
                                <div className='hotbiddata'>0.52</div>
                                <div className='hotbiddatatext'>ETH</div>
                            </div>
                            <div className='hotbidicon'><img className='logoimg' src={Heartblack} /> 63</div>
                        </div>
                    </div>
                    <div className='homehotbirdcardcards3'>
                        <div className='homehotbidsimage'><img className='hotbidsimagepic' src={Painting8} /></div>
                        <div className='homehotbidstext'>Abstract Traingle</div>
                        <div className='hotbidcardbottomsection'>
                            <div className='hotbiddatandtext'>
                                <div className='hotbiddata'>0.90</div>
                                <div className='hotbiddatatext'>ETH</div>
                            </div>
                            <div className='hotbidicon'><img className='logoimg' src={Heartwhite} /> 71</div>
                        </div>
                    </div>
                    <div className='homehotbirdcardcards4'>
                        <div className='homehotbidsimage'><img className='hotbidsimagepic' src={Painting4} /></div>
                        <div className='homehotbidstext'>White Line Grafiti</div>
                        <div className='hotbidcardbottomsection'>
                            <div className='hotbiddatandtext'>
                                <div className='hotbiddata'>0.09</div>
                                <div className='hotbiddatatext'>ETH</div>
                            </div>
                            <div className='hotbidicon'><img className='logoimg' src={Heartwhite} /> 22</div>
                        </div>
                    </div>
                </div>
                <div className='homehotbirdscard2'>
                    <div className='homehotbirdcardcards1'>
                        <div className='homehotbidsimage'><img className='hotbidsimagepic' src={Painting5} /></div>
                        <div className='homehotbidstext'>Abstract Smoke Red Blue</div>
                        <div className='hotbidcardbottomsection'>
                            <div className='hotbiddatandtext'>
                                <div className='hotbiddata'>1.25</div>
                                <div className='hotbiddatatext'>ETH</div>
                            </div>
                            <div className='hotbidicon'><img className='logoimg' src={Heartblack} /> 92</div>
                        </div>
                    </div>
                    <div className='homehotbirdcardcards2'>
                        <div className='homehotbidsimage'><img className='hotbidsimagepic' src={Painting8} /></div>
                        <div className='homehotbidstext'>Mountain Landscape</div>
                        <div className='hotbidcardbottomsection'>
                            <div className='hotbiddatandtext'>
                                <div className='hotbiddata'>0.20</div>
                                <div className='hotbiddatatext'>ETH</div>
                            </div>
                            <div className='hotbidicon'><img className='logoimg' src={Heartwhite} /> 25</div>
                        </div>
                    </div>
                    <div className='homehotbirdcardcards3'>
                        <div className='homehotbidsimage'><img className='hotbidsimagepic' src={Painting7} /></div>
                        <div className='homehotbidstext'>Paint Color on Wall</div>
                        <div className='hotbidcardbottomsection'>
                            <div className='hotbiddatandtext'>
                                <div className='hotbiddata'>0.00</div>
                                <div className='hotbiddatatext'>ETH</div>
                            </div>
                            <div className='hotbidicon'><img className='logoimg' src={Heartblack} /> 55</div>
                        </div>
                    </div>
                    <div className='homehotbirdcardcards4'>
                        <div className='homehotbidsimage'><img className='hotbidsimagepic' src={Painting6} /></div>
                        <div className='homehotbidstext'>Abstract Patern</div>
                        <div className='hotbidcardbottomsection'>
                            <div className='hotbiddatandtext'>
                                <div className='hotbiddata'>0.87</div>
                                <div className='hotbiddatatext'>ETH</div>
                            </div>
                            <div className='hotbidicon'><img className='logoimg' src={Heartwhite} /> 82</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='loadbtndivc'><button className='loadbutton'><NavLink className='link buttonc' to="/Item">Load More</NavLink></button></div>
            <div className='footerprofilepg'><Footer /></div>
        </div>)
}

export default Profile;