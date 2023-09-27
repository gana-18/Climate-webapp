import {F_KEY,L_KEY} from './config.js';
let city="Delhi"
let newEl;
update(city)
function error(){
    alert("Oops! City name is not valid🫤")
}
const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
$("#city-text").on('keyup', function (event) {
    if (event.keyCode === 13) {
       let inputEl=document.getElementById("city-text").value;
       newEl=document.querySelector(".city");
       newEl.textContent="";
       newEl.textContent=inputEl;
       update(inputEl);
    }
 });
function update(city){
$.getJSON(F_KEY+city+L_KEY,function(data){
    var icon="https://openweathermap.org/img/w/"+ data.weather[0].icon+".png";
    $('.icon-c').attr('src',icon);
    var temp=((data.main.temp)-32)*(5/9);
    let desc=data.weather[0].description;
    let humi=data.main.humidity;
    let speed=data.wind.speed;
    let dir=data.wind.deg;
    let vis=data.visibility;
    let unix=data.sys.sunrise;
    let unix1=data.sys.sunset;
    let coun=data.sys.country;
    let date=new Date();
    vis=vis/1000;
    let rise=new Date(unix*1000);
    let set=new Date(unix1*1000);
    let text=document.querySelector(".temp")
    text.textContent=""
    $('.temp').append(Math.floor(temp)+"°C");
    document.querySelector(".sky").textContent=""
    $('.sky').append(desc);
    document.querySelector(".humidity-text").textContent=""
    $('.humidity-text').append(humi+"%");
    document.querySelector(".wind-text").textContent=""
    $('.wind-text').append(speed+"m/s");
    document.querySelector(".direction-text").textContent=""
    $('.direction-text').append(dir+"°");
    document.querySelector(".visibility-text").textContent=""
    $('.visibility-text').append(vis+"km");
    document.querySelector(".sunrise-text").textContent=""
    $('.sunrise-text').append(rise.getHours()+":"+rise.getMinutes());
    document.querySelector(".sunset-text").textContent=""
    $('.sunset-text').append(set.getHours()+":"+set.getMinutes());
    document.querySelector(".time-text").textContent=""
    $('.time-text').append(weekdays[date.getDay()]+","+date.getHours()+":"+date.getMinutes());
    $('.city').append(","+coun)
})
.fail(function(data){
    error();
});
}
