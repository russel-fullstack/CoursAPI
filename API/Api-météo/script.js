const precipitation = document.getElementById("pluie");
const vent = document.getElementById("vent");
const pression = document.getElementById("pression");
const temperature = document.getElementById("temperature");
const dayHeader = document.getElementById("day_1");
const pressureItem = document.querySelector(".pressure_item");
const temItem = document.querySelector(".tem_item");
const humidity = document.querySelector(".humidity");
const pressureItem1 = document.querySelector(".pressure_item1");
const pressureItem2 = document.querySelector(".pressure_item2");
const pressureItem3 = document.querySelector(".pressure_item3");
const pressureItem4 = document.querySelector(".pressure_item4");
const humidity1 = document.querySelector(".humidity1");
const humidity2 = document.querySelector(".humidity2");
const humidity3 = document.querySelector(".humidity3");
const humidity4 = document.querySelector(".humidity4");
const temItem1 = document.querySelector(".tem_item1");
const temItem2 = document.querySelector(".tem_item2");
const temItem3 = document.querySelector(".tem_item3");
const temItem4 = document.querySelector(".tem_item4");


fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code&hourly=temperature_2m,rain,precipitation,wind_speed_80m,surface_pressure,relative_humidity_2m&current=rain,temperature_2m,wind_speed_10m,surface_pressure",
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    });
    dayHeader.textContent = formatter.format(date);
    temperature.textContent = data.hourly.temperature_2m[date.getDay()] + "°C";
    temItem1.textContent = data.hourly.temperature_2m[1] + "°C";
    temItem2.textContent = data.hourly.temperature_2m[2] + "°C";
    temItem3.textContent = data.hourly.temperature_2m[3] + "°C";
    temItem4.textContent = data.hourly.temperature_2m[4] + "°C";
    precipitation.textContent = data.hourly.relative_humidity_2m[date.getDay()] + "%";
    humidity.textContent = data.hourly.relative_humidity_2m[1] + "%";
    humidity1.textContent = data.hourly.relative_humidity_2m[2] + "%";
    humidity3.textContent = data.hourly.relative_humidity_2m[3] + "%";
    humidity4.textContent = data.hourly.relative_humidity_2m[4] + "%";
    vent.textContent = data.hourly.wind_speed_80m[date.getDay()] + " km/h";
    pressureItem.textContent = data.hourly.surface_pressure[1] + " hPa";
        pression.textContent = data.hourly.surface_pressure[date.getDay()] + " hPa";
    pressureItem1.textContent = data.hourly.surface_pressure[2] + " hPa";
    pressureItem2.textContent = data.hourly.surface_pressure[3] + " hPa";
    pressureItem3.textContent = data.hourly.surface_pressure[4] + " hPa";
    pressureItem4.textContent = data.hourly.surface_pressure[5] + " hPa";
  });
