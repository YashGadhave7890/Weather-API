const apiKey = "2d46f3027bad2ad2be24e90f1fdc5ded"; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById("cityInput");

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city name!");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      alert(data.message);
      return;
    }

    // Update DOM
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".description").textContent = data.weather[0].main;
    document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
    document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;
    document.querySelector(".date").textContent = new Date().toDateString();

    const iconMap = {
      clear: "clear.png",
      clouds: "clouds.png",
      rain: "rain.png",
      drizzle: "rain.png",
      thunderstorm: "thunderstorm.png",
      snow: "snow.png",
      mist: "mist.png",
      haze: "mist.png",
      fog: "mist.png",
      smoke: "mist.png"
    };

    const weatherMain = data.weather[0].main.toLowerCase();
    document.querySelector(".icon").src = `images/${iconMap[weatherMain] || "clear.png"}`;
  } catch (err) {
    alert("Error fetching weather data.");
  }
}
