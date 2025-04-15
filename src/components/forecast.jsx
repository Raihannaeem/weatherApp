import {useState,useEffect} from "react"
import "../styles/main.css"
import ForecastEle from "./forecastElement"

const key_openweather=process.env.REACT_APP_OW_KEY
const lat=12.971599
const lon=77.6

function Forecast(){
    let elements;
    const [items,setItems]=useState([])
    const [fetched,setFetched]=useState(false)

    function getData(){
        fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=8&appid=${key_openweather}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            setItems(data.list)
            setFetched(true)
        })
    }

    if(!fetched)
        getData()
    else{
        elements=items.map((item)=>{
                return <ForecastEle key={item.dt} item={item}/>
        })
    }

    return(
        <div className="forecast">
            {elements}
        </div>
    )    
}

export default Forecast