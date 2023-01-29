import axios from 'axios';
import React, { useState,useEffect } from 'react'
import './home.css'

const WeatherApi = () => {
  const [response,setResponse] = useState({})
    const [info, setInfo]= useState(false)
    const [ arr, setArr] = useState([])
    const [cityname, setCityname] = useState('')
    const [name, setName] = useState('')
    const [country, setCountry] = useState("")
    const [tempCent, setTempCent] = useState(null)
    const [weatherInfo, setWeatherInfo] = useState('')
    const [description, setDescription]= useState('')
    const [icon,setIcon]= useState('')
    const [iconImg,setIconImg]= useState('')
    const [error,setError]= useState('')
    const [degree,setDegree]= useState('')
    const [imgsrc,setImgscr]= useState('')

    const homeBtn=()=>{
       setInfo(false);
       setCityname('')
      }

     const submitCity=async()=>{
       apI()
        setTimeout(() => {
           
          setInfo(true)
       
        }, 1434);
      
      
  }
  
    
     const apI=async()=>{
      const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
      
      const ApiKey = 'd5f31baa758a56b76ded08d7267e3ab1'
      const response = await axios.get(baseUrl + `q=${cityname}&appid=${ApiKey}`)
      console.log(response.status)
      const {data} = response
      console.log(data.sys.country) 
              setResponse(response)
              setArr([data])
              setIcon(data.weather[0].icon)
              setCountry(data.sys.country)
              setDescription(data.weather[0].description)
              setWeatherInfo(data.weather[0].main)
              setTempCent(Math.round(((data.main.temp-273.15) + Number.EPSILON) * 10) / 10)
              setDegree(<>&deg;C</>)
              setError('')
      console.log(data);
    
     
   }
   
   useEffect(() => {
    setTimeout(() => {
      
      const countryFlag = response.status ?country.toLowerCase():''
     const imgSr = response.status ?`https://flagcdn.com/16x12/${countryFlag}.png`:'';
     const ico = response.status ? `https://openweathermap.org/img/wn/${icon}@2x.png`:'';
     setImgscr(imgSr)
      setName(cityname.toUpperCase())
     return response.status ?setIconImg(ico):'' ;
   }, 434);    
     
   }, [info,cityname,country,icon,response.status])

   
   
  return (<div>
   
    {
    info===true?
        <div className ='weather'>
            
    <div className = 'container'>
      <h2>{name} Weather Report</h2>
        <div className='location'>
             <h3>{arr.name} </h3><br/>
             <h1>  {country}  <img src= {imgsrc} alt=''/></h1>                   
</div>
<div className='location-temp'>
   <div className='degree-section'>
<div className='temperature-degree'> <h6>{error}</h6>{tempCent}{degree}</div>

       
</div>  
       <div className ='image'>   <img src = {iconImg} alt=''/></div>
</div>
<div className='temperature'>
      <h3> {weatherInfo} </h3>     <h3> {description}</h3>
    </div>
    <div className ='homeButton'>
    <button  onClick={()=>{homeBtn()}}>Check Another City</button>
    </div> 
    </div>  
    
    </div>:
    <div className ='label'>
        <label><h1>Get Weather Report</h1> </label><br/>
    <input type="text"
     value={cityname}
     placeholder='Enter City Name'
      onChange={(e)=>setCityname(e.target.value)} autoFocus="autofocus">
         </input><br/>
         <button onClick={()=>submitCity()}
            value ={cityname}  
         >Submit</button>
    </div>
    }
</div>
  )
}

export default WeatherApi