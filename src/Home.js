import React from 'react';
import './Home.css';
import Img1 from './img1.jpeg';
import Img2 from './img2.jpeg';
import Img3 from './img3.jpeg';
import Img4 from './img4.jpeg';
import Img5 from './img5.jpg';
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
import Tick from './tick.png';


const Home = () =>{
    return(<div className='homepage'>
            <div className='navbarhome'><Navbar /></div>
            <div className='hometopcard'>
                <div className='hometopellipse'></div>
                <div className='homebottomellipse'></div>
                <div className='hometopcardtext1'>Discover, collect, and sell</div>
                <div className='hometopcardtext2'>extraordinary NFTs</div>
            </div>
            <div className='hometopsellercardi'>
                <div className='hometopsellertitle'>Top Sellers</div>
                <div className='hometopsellercards'>
                    <div className='hometopsellerscardscards1'>
                        <div className='topsellermarking'>1</div>
                        <div className='ticksellerdiv'>
                            <div className='hometopsellercardimage'><img className='hometopsellerimg' src={Img1} /></div>
                            <div className='tickdiv'><img className='tickimg' src={Tick} /></div> 
                        </div>
                        <div className='hometopsellercardtext'>Mia ayana</div> 
                        <div className='hometopsellercarddatandtext'>
                            <div className='hometopsellercarddata'>5.250</div>
                            <div className='hometopsellercarddatatext'>ETH</div> 
                        </div>                
                    </div>
                    <div className='hometopsellerscardscards2'>
                    <div className='topsellermarking'>2</div>
                        <div className='ticksellerdiv'>
                            <div className='hometopsellercardimage'><img className='hometopsellerimg' src={Img2} /></div> 
                            <div className='tickdiv'><img className='tickimg' src={Tick} /></div> 
                        </div>
                        <div className='hometopsellercardtext'>Rian Leone</div> 
                        <div className='hometopsellercarddatandtext'>
                            <div className='hometopsellercarddata'>4.932</div>
                            <div className='hometopsellercarddatatext'>ETH</div> 
                        </div> 
                    </div>
                    <div className='hometopsellerscardscards3'>
                        <div className='topsellermarking'>3</div>
                        <div className='ticksellerdiv'>
                            <div className='hometopsellercardimage'><img className='hometopsellerimg' src={Img3} /></div> 
                            <div className='tickdiv'><img className='tickimg' src={Tick} /></div>  
                        </div>
                        <div className='hometopsellercardtext'>Lady Old</div> 
                        <div className='hometopsellercarddatandtext'>
                            <div className='hometopsellercarddata'>4.620</div>
                            <div className='hometopsellercarddatatext'>ETH</div> 
                        </div> 
                    </div>
                    <div className='hometopsellerscardscards4'>
                        <div className='topsellermarking'>4</div>
                        <div className='ticksellerdiv'>
                            <div className='hometopsellercardimage'><img className='hometopsellerimg' src={Img4} /></div> 
                            <div className='tickdiv'><img className='tickimg' src={Tick} /></div>  
                        </div>
                        <div className='hometopsellercardtext'>Black Glass</div> 
                        <div className='hometopsellercarddatandtext'>
                            <div className='hometopsellercarddata'>4.125</div>
                            <div className='hometopsellercarddatatext'>ETH</div> 
                        </div> 
                    </div>
                    <div className='hometopsellerscardscards5'>
                        <div className='topsellermarking'>5</div>
                        <div className='ticksellerdiv'>                           
                            <div className='hometopsellercardimage'><img className='hometopsellerimg' src={Img5} /></div>  
                            <div className='tickdiv'><img className='tickimg' src={Tick} /></div>  
                        </div> 
                        <div className='hometopsellercardtext'>Budhiman</div> 
                        <div className='hometopsellercarddatandtext'>
                            <div className='hometopsellercarddata'>6.921</div>
                            <div className='hometopsellercarddatatext'>ETH</div> 
                        </div> 
                    </div>
                </div>
            </div>
            <div className='hometophotbirds1'>
                <div className='hometophotbirdstitle'>Hot bids</div>
                <div className='homehotbirdscard'>
                    <div className='homehotbirdcardcards1'>
                        <div className='homehotbidsimage'><img className='hotbidsimagepic' src={Painting2} /></div>
                        <div className='homehotbidstext1'>Blue Red Art</div>
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
                        <div className='homehotbidstext1'>Lake Landscape</div>
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
                        <div className='homehotbidstext1'>Abstract Traingle</div>
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
                        <div className='homehotbidstext1'>White Line Grafiti</div>
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
                        <div className='homehotbidstext1'>Abstract Smoke Red Blue</div>
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
                        <div className='homehotbidstext1'>Mountain Landscape</div>
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
                        <div className='homehotbidstext1'>Paint Color on Wall</div>
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
                        <div className='homehotbidstext1'>Abstract Patern</div>
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
            <div className='loadbtndiv'><button className='loadbutton1'>Load More</button></div>
            <div className='footerhomepg'><Footer /></div>
        </div>)
}

export default Home;