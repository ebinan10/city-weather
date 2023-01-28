import React, { useState } from 'react'
import './contact.css'
import axios from 'axios';

const Contact = () => {
    const [message, setMessage] = useState('');
    const [input, setInput]= useState('');
    const Submit =() =>{
            axios.post({message,input})
    }
    const EnterInput = (e,value) =>{
        if(value==='message'){
            setMessage(e.target.value)
            console.log(message)
        }
        else{
            setInput(e.target.value)
            console.log(input)
        }
    }
  return (
    <div className='contact'>
        <div className="contactContainer">
            
            <div className="contactItem">
                <div className='contat'>
                    Email
                    <p className='contactPar'>
                        ebinan10@gmail.com
                    </p>
                </div>
                <div className='contat'>
                    Phone
                    <p className='contactPar'>
                    +2348135110879
                    </p>
                </div>
                <div className='contat'>
                    Physical Address
                    <p className='contactPar'>No 8b, Osholonge street Agric Ikorodu Lagos</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact