# How to Run the React Weather App

The Weather App displays the weather at the user's current location (provided that the user grants permission).
It fetches live weather data from the [APIXU](http://www.apixu.com) weather service.

Please note, to display the background images add blockers may need to be turned off.

To run the application enter the following command:

```bash
yarn start
```

The deployed app can be viewed [here](https://blogscot.github.io/weather-app/).

## Running a Local Server

During development, the weather app was tested using a local dummy JSON server, configured to mimic the JSON data format used by the APIXU weather service.

I was able to run both the front-end and local server at the same time using the command:

```bash
yarn start-all
```

The local JSON Server configuration used is as follows:

```text
  dummyWeatherServerUrl = "http://127.0.01:3001/api"
  dummyWeatherIcon = "http://127.0.0.1:3001/cloudy.png"
```
