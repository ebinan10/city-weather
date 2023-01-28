import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faContactCard, faHome, faPhone, faQuestion, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="navContainer">
           
            <ul className="navItem"> 
             <li className='li'>
              <Link to="/">Home</Link>
              <FontAwesomeIcon icon={faHome} className='iconNav'/>
              </li> 
             <li className='li'>
              <Link to="/contact">Contact</Link>
              <FontAwesomeIcon icon={faPhone} className='iconNav'/>
              </li>      
             <li className='li'>
              <Link to="/about">About</Link>
              <FontAwesomeIcon icon={faQuestion}  className='iconNav'/>
              </li>       
                   
            </ul>
             

            
        </div>
        
    </div>
  )
}

export default Nav 