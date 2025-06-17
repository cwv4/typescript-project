
type WeatherStatus = "sunny" | "partlyCloudy" | "cloudy" | "windy" | "rainy" | "snowy";

type WeatherDate = Date | number | string;

interface WeatherReading {
    date: WeatherDate,
    status: WeatherStatus
}

function getWeatherDate(reading: WeatherReading): Date {
    if (typeof reading.date === "number") {
        return new Date(reading.date);
    } else if (typeof reading.date === "string") {
        return new Date(Date.parse(reading.date));
    } else {
        return reading.date;
    }
}


let weatherList: WeatherReading[] = [
    {date: new Date('05-01-2025'), status: "sunny"},
    {date: new Date('05-02-2025'), status: "rainy"},
    {date: new Date('05-03-2025'), status: "cloudy"},
    {date: new Date('05-04-2025'), status: "cloudy"},
    {date: new Date('05-05-2025'), status: "rainy"},
    {date: new Date('05-06-2025'), status: "sunny"}
];

// console.log(weatherList);

// console.log(findMaxForField(weatherList, "date"));
