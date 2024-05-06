const apiKey="3ee209bcbad0f5b7af1c6f5b3ce9cfb1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".card_body input");
const searchBtn= document.querySelector(".card_body button");
const weatherIcon= document.querySelector(".weather-icon");

searchBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchBtn.click();
  }
});


async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display='block';
        document.querySelector(".weather").style.display='none';

    }
    else{
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= data.main.temp + '°C';
        document.querySelector(".humidity").innerHTML= data.main.humidity + '%';
        
        if(data.weather[0].main== "Rain"){
            weatherIcon.src= "https://t4.ftcdn.net/jpg/03/38/74/43/360_F_338744374_c8v4RyKnToRWqPA4SalFf8ktaMQA48QW.jpg";
        }
        else if(data.weather[0].main== "Clear"){
            weatherIcon.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Weather-clear.svg/1200px-Weather-clear.svg.png";
        }
        else if(data.weather[0].main== "Clouds"){
            weatherIcon.src="https://cdn4.vectorstock.com/i/1000x1000/34/23/clouds-icon-vector-24713423.jpg";
        }
        else if(data.weather[0].main== "Drizzle"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/512/1458/1458966.png";
        }
        else if(data.weather[0].main== "Mist"){
            weatherIcon.src="https://www.shutterstock.com/image-vector/fog-blue-rgb-color-icon-260nw-1721057815.jpg";
        }
    
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error").style.display='none';
        
        
    }

    

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

