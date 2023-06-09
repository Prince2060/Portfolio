import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='container1'>
        <div className='prince'>
            <div className='mlogobox'>
            <FontAwesomeIcon icon={faCrown} className='logo'/>
        </div>
        <div className='namebox'>
            <div className='prince'><strong>PRINCE</strong></div>
            <div className='personal'>Personal</div>
        </div>
        </div>
        </div>
        <div className='container2'>
<div className='about'>About</div>
<div className='about'>Services</div>
<div className='about'>Portfolio</div>
<div className='about'>Contact</div>
        </div>
  <button className='button'>
  <FontAwesomeIcon icon={faPaperPlane} />
  <div className='letstalk'>Let's Talk</div>
  </button>
        
      
    </div>
  )
}

export default Navbar