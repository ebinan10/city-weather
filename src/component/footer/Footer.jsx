import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Twitter from './twitter (1).svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerContainer">
        <div className="footerContent">
        </div>
        <div className="footerItem">
        <a href="www.twitter.com/ebinan10"><img src={Twitter} alt="" to></img></a>
        <a href="www.facebook.com/ebinan10"><img src={Facebook} alt="" ></img></a>
        <a href="www.youtube.com/ebinan10"><img src={Youtube} alt="" ></img></a>
        <a href="www.linkedin.com/ebinan10"><img src={Linkedin} alt=""></img></a>
            <>&copy;2022 Component. All rights reserved.</>
        </div>
        </div></div>
  )
}

export default Footer