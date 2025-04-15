import { useState } from "react"
import SliderEle from "./sliderElement"
import "../styles/slider.css"
const api_key_open=process.env.REACT_APP_OW_KEY
const api_key_wapi=process.env.REACT_APP_WA_KEY

function Slider(){
    const [items,setItems]=useState([])
    const [fetched,setFetched]=useState(false)
    let sliders;

    function getDataOpen(){
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=12.971599&lon=77.6&appid=${api_key_open}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            setItems(data.list)
        })
        setFetched(true)
    }
    
    function getData(){
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api_key_wapi}&q=12.971599,77.6&days=14`).then((res)=>{
            return res.json()
        }).then((data)=>{
            setItems(data.forecast.forecastday[0].hour.concat(data.forecast.forecastday[1].hour))
        })
        setFetched(true)

    }

    /*async function getData(){
        let res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=12.971599&lon=77.6&appid=${api_key}`)
        let data = await res.json()
        return data.list
    }*/

    if(!fetched)
        getData()
    else
        sliders= items.map((item)=>{
            console.log(Date.now()+90000000)
            console.log(item.time_epoch*1000+"\n"+item.time+"\n")
            if((item.time_epoch * 1000 < Date.now() + 90000000) && (item.time_epoch*1000 >Date.now()))
                return <SliderEle key={item.time_epoch} item={item}/>
        })
    return(
        <div className="slider">
            {sliders}
        </div>    
    )
}

export default Slider