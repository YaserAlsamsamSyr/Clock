var booll=false;
function change_background_color(){
let color=document.getElementsByTagName('body');
let img=document.getElementsByTagName('img');
let clock=document.getElementsByClassName('clock')[0].style;
let minute=document.getElementsByClassName('minute')[0].style;
let hour=document.getElementsByClassName('hour')[0].style;
let digital_color1=document.getElementsByClassName('dig_clock')[0].style;
let digital_color2=document.getElementsByClassName('dig_clock')[1].style;
img[0].style.backgroundColor='#D9D7DD';
if(booll){
    clock.backgroundColor= '#e6e6e6';
    clock.borderColor= 'white';
    minute.background='black';
    hour.background='black';
    digital_color1.color='black';
    digital_color2.color='black';
    color[0].style.backgroundColor='#D9D7DD';
    img[0].src='https://img.icons8.com/external-bearicons-glyph-bearicons/32/000000/external-moon-halloween-bearicons-glyph-bearicons.png';
    booll=false;
}
else{
    digital_color1.color='white';
    digital_color2.color='white';
    clock.backgroundColor= 'rgb(26, 25, 25)';
    clock.borderColor= 'rgb(26, 25, 25)';
    minute.background='#e6e6e6';
    hour.background='#e6e6e6';
    color[0].style.backgroundColor='#2e2d2d';
    img[0].src='https://img.icons8.com/ios/50/000000/sun.png';
    booll=true;
}
}
/* for digital clock */
function displayCurrentTime() {
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
let amOrPm = hours < 12 ? "<span class='c1'>AM</span>" : "<span class='c1'>PM</span>";
hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
hours = addZero(hours);
minutes = addZero(minutes);
seconds = addZero(seconds);
let timeString = `${hours} : ${minutes} : ${seconds} ${amOrPm}`;
document.getElementById("clock").innerHTML = timeString;
let timer = setTimeout(displayCurrentTime, 1000);
}
function addZero(component) {
return component < 10 ? "0" + component : component;
}
displayCurrentTime();
/* for analog clock */
var inc = 1000;
clock();
function clock() {
const date = new Date();
const hours = ((date.getHours() + 11) % 12 + 1);
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const hour = hours * 30;
const minute = minutes * 6;
const second = seconds * 6;
document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
document.querySelector('.second').style.transform = `rotate(${second}deg)`
}
setInterval(clock, inc);
/*-----DAY-MONTH-YEAR-----*/
function day_month_year()
{
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const now = new Date();
let y=now.getFullYear();
let m = months[now.getMonth()];//frome 0->11
//let d = days[now.getDay()];//from 0->6
let d=now.getDay();
document.getElementsByClassName('day_month_year')[0].innerHTML=d+","+m+","+y;
}
day_month_year();