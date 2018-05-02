const weather = new Weather('Boston','MA');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather());

function getWeather(){
    weather.getWeather().then(data =>{
        ui.paint(data)
    })
    .catch(err => console.log(err));
}
