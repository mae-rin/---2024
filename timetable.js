const weatherElm = document.querySelector('.js-weather_switch');
const sunnyElm = document.querySelector('.sunny');
const triangle = document.querySelector('.triangle');
const rainElm = document.querySelector('.rain');
const sunnyContent = document.querySelector('.sunny_content');
const rainContent = document.querySelector('.rain_content');
const weatherTooltip = document.querySelector('.weather_tooltip');


function changeWeatherIcon(weather) {
    if (weather==="rain") {
      weatherElm.classList.remove("sunny_move");
      weatherElm.classList.add("rain_move");
      triangle.classList.remove("sunny_rotate");
      triangle.classList.add("rain_rotate");
      sunnyContent.classList.remove("is-active");
      rainContent.classList.add("is-active");

    }else if(weather==="sunny") {
      weatherElm.classList.remove("rain_move");
      weatherElm.classList.add("sunny_move");
      triangle.classList.remove("rain_rotate");
      triangle.classList.add("sunny_rotate");
      rainContent.classList.remove("is-active");
      sunnyContent.classList.add("is-active");
    }
}
  
  rainElm.addEventListener('click', function() {
    changeWeatherIcon("rain");
    weatherTooltip.classList.add("is-hidden");

  })
  
  sunnyElm.addEventListener('click', function() {
    changeWeatherIcon("sunny");
    weatherTooltip.classList.add("is-hidden");
  })

  triangle.addEventListener('click',function(){
    if(triangle.classList.contains("rain_rotate") == true ) {
        changeWeatherIcon("sunny");
	} else {
        changeWeatherIcon("rain");
  }
  weatherTooltip.classList.add("is-hidden");
})
