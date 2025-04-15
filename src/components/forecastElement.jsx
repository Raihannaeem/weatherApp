import getIcon from "../getIcon"
import sunRise from "../static/sunRise.png"
import sunSet from "../static/sunSet.png"

function ForecastEle({item}){
    // const item={dt:1744698600,sunrise: 1744677414, sunset:1744722119, temp:{max:305.37,min:295.51}, pop:0.3, weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }]}
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const date = new Date(item.dt*1000)
    const sunriseTime = new Date(item.sunrise*1000)
    const sunsetTime = new Date(item.sunset*1000)
    const now = new Date()

    return(
        <div className="forecastElement">
            <img src={getIcon(item.weather[0].icon)[0]}/>
            <h2>{date.getDate()!=now.getDate() ? days[date.getDay()]: 'Today'}</h2>
            <p>{Math.floor(item.temp.max-273)}<sup>o</sup>C | {Math.floor(item.temp.min-273)}<sup>o</sup>C</p>
            <div className="sunRise">
                <img src={sunRise} />
                <p>{sunriseTime.getHours()}:{sunriseTime.getMinutes()<10?0:''}{sunriseTime.getMinutes()} PM</p>
            </div>
            <div className="sunRise">
                <img src={sunSet} alt="" />
                <p>{sunsetTime.getHours()-12}:{sunsetTime.getMinutes()<10?0:''}{sunsetTime.getMinutes()} AM</p>
            </div>
        </div>
    )
}

export default ForecastEle