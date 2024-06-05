document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );        

function showweatherDetails(event) {
      event.preventDefault();

      const city = document.getElementById('city').value;
      const apiKey = '6733dac4000b4aea0feb192ee2da94fb'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Feeling: ${data.main.feels_like} &#8451;<p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
                                  
        })
}
