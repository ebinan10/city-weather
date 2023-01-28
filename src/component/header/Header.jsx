import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState} from 'react'

const Header = () => {
    const [classname, setClassname] = useState('none');
    
    
   
    
    const changeStyle = () =>{
        if(classname==='none'){
            setClassname('block')
        }
        else{
            setClassname('none')
        }
        
    }
   
    
    
  return (
    <div className='header'>
        <div className="headerContainer">
            <h2 className="headerName">City Weather</h2>
            <img src="http://openweathermap.org/img/w/03n.png" alt="" />
            <div className="headerItem">
                    
                    EN<FontAwesomeIcon icon={faCaretDown} onClick={changeStyle}/>
                    
            </div>
        </div>
    </div>
  )
}

export default Header