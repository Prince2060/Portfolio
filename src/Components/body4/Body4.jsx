import React from 'react'
import './Body4.css'
import dashboard from '../images/dashboard.png'
import figma from '../images/figma.png'
import jobsearch from '../images/jobsearch.png'
import kplc from '../images/kplc.png'
import muhib from '../images/muhib.png'
import ppd from '../images/ppd.png'
import netflix from '../images/netflix.png'
import youtube from '../images/youtube.png'
import valorant from '../images/valorant.png'
function body4() {
  return (
    <div className='body4'>
      <div className='projectandbuttons'>
        <div className='project'>My Recent Project</div>
        <div className='buttonsproject'>
           <div className='firstbutton'>
            <button className='but1'>All</button>
            </div> 
            <div className='firstbutton'>
            <button className='but2'>Webdesign</button>
            </div>
            <div className='firstbutton'>
                <button className='but2'>UX Design</button>
            </div>
        </div>
      </div>
      <div className='threeimages'>
        <div className='imagebox'>
        <img src={dashboard} className='images1'/>
        </div>
        <div className='imagebox1'>
        <img src={figma} className='images1'/>
        </div>
        <div className='imagebox2'>
        <img src={jobsearch} className='images1'/>
        </div>
      </div>
      <div className='threeimage1'>
        <div className='imagebox3'>
        <img src={kplc} className='images1'/>
        </div>
        <div className='imagebox4'>
        <img src={muhib} className='images1'/>
        </div>
        <div className='imagebox5'>
        <img src={ppd} className='images1'/>
        </div>
      </div>
      <div className='threeimage1'>
        <div className='imagebox3'>
        <img src={netflix} className='images1'/>
        </div>
        <div className='imagebox4'>
        <img src={youtube} className='images1'/>
        </div>
        <div className='imagebox5'>
          <a href="https://prince2060.github.io/valorant/">
          <img src={valorant} className='images1'/>
          </a>
        </div>
      </div>
      <div className='lastbutton'>
      <button className='lastbut'>Load More</button>
      </div>
     
    </div>
  )
}

export default body4