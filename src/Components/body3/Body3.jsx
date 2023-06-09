import React from 'react'
import './Body3.css'
import map from '../images/map.png'
function body3() {
    return (
        <div className='body3'>
            <div className='imageandcontent'>
                <img src={map} className='map' />
                <div className='sendmessagebox'>
                    <div>
                        <input type="text" placeholder='Enter Name'  className='textfill'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Enter Your Address'  className='textfill'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Location'  className='textfill'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Write About Yourself'  className='textfilllarge'/>
                    </div>
                    <button className='sendmessage'> Send Message</button>
                    </div>            
            </div>
        </div>
    )
}

export default body3