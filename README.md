# 🌤️ Weather App

A responsive Weather App built using **HTML**, **CSS**, and **JavaScript**. This application fetches real-time weather data using the **OpenWeatherMap API** and displays information such as temperature, weather condition, humidity, and wind speed for any city you search.



---

## 🚀 Features

- 🌍 Search weather by city name
- 🌡️ Display temperature in Celsius
- 💧 Show humidity and wind speed
- ☁️ Dynamic weather icons
- 📱 Responsive layout for all devices
- 🧠 Uses Fetch API to get real-time weather data

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. **Get an API key**
    -Go to OpenWeatherMap
    -Sign up and get your free API key

3. **Configure your API key**
    -Open the script.js file
    -Replace this line:
     ```bash
         js
           const apiKey = "YOUR_API_KEY_HERE";

with your actual API key

4. **Run the App**
     -Open index.html in your browser
     -Or use Live Server if you're using VS Code
          ```bash
               weather-app/
│
├── index.html       # Main HTML file
├── style.css        # CSS styles
├── script.js        # JavaScript logic
├── icons/           # Weather icons (optional)
└── README.md        # Project documentation


## 📸 Screenshots
 ![Weather App Screenshot](./screenshot.png)


## 🧠 How It Works

-User enters a city name and clicks the "Search" button
-JavaScript sends a fetch request to the OpenWeatherMap API
-The app receives the response containing weather data
-The DOM is updated with temperature, humidity, wind speed, and weather icon

## ⚠️ Notes

-Ensure your API key is correct and not expired
-Handle API errors such as:
-Invalid city name
-No internet connection
-API rate limit exceeded

## 📜 License
-This project is licensed under the MIT License

## 💬 Contact
For questions or suggestions, feel free to contact me at yashgadhave248@gmail.com
Or open an issue on GitHub





