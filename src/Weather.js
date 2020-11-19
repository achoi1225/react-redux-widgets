import React, {useState, useEffect} from 'react';

const Weather = () => {

    const [weather, setWeather] = useState(null);
    const APIKey = 'a9267f4bc7d15e422e0fd5a50fafe8a5';

    useEffect(() => {
        const pollWeather = async (lat, lon ) => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${APIKey}&lat=${lat}&lon=${lon}`)
                if(!res.ok) {
                    throw res;
                }
                const data = await res.json();
                setWeather(data);
                console.log(await weather);
            } catch(err) {
                console.error(err);
            }
        }

        const success = (res) => {
            // console.log("RES ", res.coords);
            const {latitude, longitude} = res.coords;
            pollWeather(latitude, longitude);
        };

        navigator.geolocation.getCurrentPosition(success);
    }, [])

    const convertTemp = (kTemp) => {
        return parseInt(1.8 * (kTemp - 273) + 32);
    }

    return (
        <div className="weather">
            {weather && 'Temperature: '+convertTemp(weather.main.temp)}&deg;
        </div>
    )
}

export default Weather;
