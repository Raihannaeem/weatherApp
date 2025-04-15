import { useState, useEffect } from "react"
import getIcon from "../getIcon"

import "../styles/main.css"
const api_key=process.env.REACT_APP_OW_KEY
const lat=12.971599
const lon=77.6

function Current(){
    const [city,setCity]=useState('')
    const [weather,setWeather]=useState({})
    const [main,setMain]=useState({})
    const [icon,setIcon]=useState()
    const [video,setVideo]=useState('')

    function getData(){
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
            setCity(data.name)
            setWeather(data.weather[0])
            setIcon(getIcon(data.weather[0].icon)[0])
            setVideo(getIcon(data.weather[0].icon)[1])
            setMain(data.main)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div className="current">
            {video && (<video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4"/>
            </video>)}
            <div className="title">
                <h1>{city}</h1>
                <h3>{weather.main} • {weather.description}</h3>
            </div>

            <div className="temp">
                <img id="mainImg"  src={icon}/>
                <p id="tempReading">{Math.floor(main.temp-273.15)}<sup>o</sup>C</p>
            </div>
        </div>
    )
}

export default Current