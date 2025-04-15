import "../styles/slider.css"

function SliderEle({ item }){

    var date= new Date(item.time_epoch*1000)
    var current = new Date()

    return(
        <div className="main">
            <p className="today">{(date.toLocaleDateString()==current.toLocaleDateString())?'Today' : 'Tomorrow'}</p>
            <p>{(date.getHours()==0||date.getHours()==12)?(date.getHours()==0? '12AM' : '12PM') : (date.getHours()>12? date.getHours()-12+"PM" : date.getHours()+"AM")}</p>
            <div>
                <img src={item.condition.icon} alt="img not found"/>
                {item.will_it_rain ? (<p>{item.chance_of_rain}%</p>) : (<p style={{opacity:"0"}}> 25%</p>)}
            </div>
            {/*<div style={{display: 'flex', flexDirection: 'row', 'justifyContent': "space-evenly"}}>
                <p>{Math.floor(item.main.temp_min - 273)}<sup>o</sup>C </p>
                <p>|</p>
                <p>{Math.floor(item.main.temp_max - 273)}<sup>o</sup>C</p>
            </div>*/}
            <p>{item.temp_c}<sup>o</sup>C</p>
        </div>
    )
}

export default SliderEle