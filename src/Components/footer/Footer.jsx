import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { AiOutlineFacebook ,AiOutlineYoutube} from 'react-icons/ai';
import { FiTwitter,FiInstagram} from 'react-icons/fi';
export default function Footer() {
    return (
        <div className='footer'>
            <div className='doandlorem'>
                <div className='twotexts'>
                    <div className='do'>Do you want to make beautiful</div>
                    <div className='do'>Products?</div>
                </div>
                <div className='twolorems'>
                <div className='lorem20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores, </div>
                <div className='lorem20'>ab perspiciatis debitis ratione dolores corrupti! Ad numquam ducimus soluta.</div>
                </div>
            </div>
            <div className='butandlorem'>
            <button className='footerbut'>
            <FontAwesomeIcon icon={faEnvelope} />
            <div className='hireme'>Hire me</div>
            </button>
            <div className='followandlogos'>
                <div className='follow'>Follow Me:</div>
                <div className='followmeicons1'>
                <div><AiOutlineFacebook /></div>
            <div><FiInstagram /></div>
            <div><FiTwitter /></div>
            <div><AiOutlineYoutube /></div>
                </div>
            </div>
            </div>
            <div className='aboutservices'>
                <div className='about'>About</div>
                <div className='about'>Services</div>
                <div className='about'>Portfolio</div>
                <div className='about'>Contact</div>
            </div>
          </div>
    )
}
