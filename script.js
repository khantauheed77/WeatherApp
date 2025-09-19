const apiKey ="a1b015edfa664642ddb302bc65e18d3d"
let city = "bangalore";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function cheackWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl)
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
     document.querySelector(".wind").innerHTML =data.wind.speed + " km/hr";
}
document.querySelector("button").addEventListener("click", function () {
    let city = document.querySelector(".input").value.trim();
    if(city ===""){
        city= "New York"
    }
    if (city !== "") {
        cheackWeather(city);
    }else {
        alert("Please Enter a valid City1");
    }
});

