import React from 'react';
import './Footer.css';
import Light1 from './Light.png';
import Ig from './ig.png';
import Twitter from './twitter.png';
import Telegram from './telegram.png';
import Discord from './discord.png';

const Footer =() =>{
    return(<div className='footerpage'>
        <div className='ftpg'>
            <div className='footerpageinside'>
                <div className='footerleft'>                    
                    <div className=''><img className='' src={Light1} /></div>                    
                    <div className=''>Get the latest Updates</div>
                    <div className='email'>
                        <div className=''><input className='emailnext' type='text' placeholder='Your Email' /></div>
                        <div className=''><button className='emailbutton' >Email Me!</button></div>
                    </div>
                </div>
                <div className='footercenter'>
                    <div className='graphique'>Graphique NFT</div>
                    <div className='explore'>Explore</div>
                    <div className='how'>How it Works</div>
                    <div className='contact'>Contact Us</div>
                </div>
                <div className='footerright'>
                    <div className='support'>Support</div>
                    <div className='help'>Help center</div>
                    <div className=''>Terms of service</div>
                    <div className=''>Legal</div>
                    <div className=''>Privacy policy</div>
                </div>
            </div>
            <div className='footerbottom'>
                <div className='graphiquebottom'>Graphique, NITT.All Rights Reserved</div>
                <div className='socialicons'>
                    <div className='igdiv'><img className='igimg' src={Ig} /></div>
                    <div className='twitterdiv'><img className='twitterimg' src={Twitter} /></div>
                    <div className='igdiv'><img className='igimg' src={Telegram} /></div>
                    <div className='twitterdiv'><img className='twitterimg' src={Discord} /></div>
                </div>
            </div>
        </div>
    </div>)
}

export default Footer;