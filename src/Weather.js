import React, {useState, useEffect} from 'react';

const Weather = () => {

    const [weather, setWeather] = useState(null);
    const APIKey = 'a9267f4bc7d15e422e0fd5a50fafe8a5';

    useEffect(() => {
        const pollWeather = async (lat, lon ) => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`)
                if(!res.ok) {
                    throw res;
                }
                const data = await res.json();
                setWeather(data);
            } catch(err) {
                console.error(err);
            }
        }

        const success = (res) => {
            // console.log("RES ", res.coords);
            const {latitude, longitude} = res.coords;
            pollWeather(latitude, longitude);
        };    

        const location = navigator.geolocation.getCurrentPosition(success);
    }, [])

    return (
        <div className="weather">

        </div>
    )
}

export default Weather;