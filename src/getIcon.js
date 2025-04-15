import clearS from "./static/sunny.png"
import clearM from "./static/moon.png"
import cloudS from "./static/cloudSun.png"
import cloudyS from "./static/cloudySun.png"
import cloudM from "./static/cloudMoon.png"
import cloudyM from "./static/cloudyMoon.png"
import rainS from "./static/rainD.png"
import rainM from "./static/rainN.png"
import thunderS from "./static/thunderS.png"
import thunderM from "./static/thunderM.png"

function getIcon(value){
    switch(value){
        case "01d":
            return [clearS,"/videos/clearS.mp4"]
            break;
        case "01n":
            return [clearM,"/videos/clearM.mp4"]
            break;
        case "02d":
            return [cloudS,"/videos/cloudS.mp4"]
            break;
        case "02n":
            return [cloudM,"/videos/cloudM.mp4"]
            break;
        case "03d":
        case "04d":
            return [cloudyS,"/videos/cloudyS.mp4"]
            break;
        case "03n":
        case "04n":
            return [cloudyM,"/videos/cloudyM.mp4"]
            break;
        case "09d":
        case "10d":
            return [rainS,"/videos/rainS.mp4"]
            break;
        case "09n":
        case "10n":
            return [rainM,"/videos/rainM.mp4"]
            break;
        case "11d":
            return [thunderS,"/videos/thunderS.mp4"]
            break;
        case "11n":
            return [thunderM,"/videos/thunderM.mp4"]
            break;
    }
}

export default getIcon