import React from 'react'
import './Body1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faSquareEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import prince from '../images/prince1.jpg'
import {AiOutlineFacebook,AiOutlineYoutube } from 'react-icons/ai';
import {FiInstagram ,FiTwitter} from 'react-icons/fi';
function Body1() {
    return (
        <div className='body1'>
            {/* container1 */}
            <div className='hiwelcomecontainer'>
            <div className='hiwelcome'>
                <div className='hellowelcome'>Hello Welcome</div>
                <div className='text1'><strong>I'm Prince Acharya</strong></div>
                <div className='text1'><strong>Software Developer</strong></div>
            </div>
            <div className='butandportfolio'>
                <button className='button1'>
                <FontAwesomeIcon icon={faEnvelope} />
                    <div className='hireme'>Hire Me</div>
                </button>
                <div className='seeportfolio'>See Portfolio</div>
            </div>
            <div className='dotsandtext'>
           <div><FontAwesomeIcon icon={faEnvelope} /></div> 
         <div className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat error, aperiam dignissimos dolore voluptate molestiae quidem quis quas, ratione consectetur sit. Beatae, ut fugit quisquam perspiciatis ipsa ipsum sit.</div>
            </div>
            <div className='followandicons'>
            <div className='followme'>Follow me:</div>
            <div className='followmeicons'>
            <div><AiOutlineFacebook /></div>
            <div><FiInstagram /></div>
            <div><FiTwitter /></div>
            <div><AiOutlineYoutube /></div>
            </div>
            </div>
            </div>
            {/* container2 */}
            <div className='myphotocontainer'>
            <div className='myphoto'>
<img src={prince} className='princeimage'/>
            </div>
            </div>
            {/* container3 */}
            <div className='sixpercontainer'>
            <div className='sixper'>
                <div className='sixandyears'>
<div className='sixplus'>6+</div>
<div className='yearsofexperience'>Years of Experience</div>
</div>
<div className='sixandyears'>
<div className='sixplus'>100%</div>
<div className='yearsofexperience'>Success Rate</div>
</div>
<div className='sixandyears'>
<div className='sixplus'>150+</div>
<div className='yearsofexperience'>Happy Clients</div>
</div>
<div className='sixandyears'>
<div className='sixplus'>249+</div>
<div className='yearsofexperience'>Projects Completed</div>
</div>
            </div>
            </div>
        </div>
    )
}

export default Body1