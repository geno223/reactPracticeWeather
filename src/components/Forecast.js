
import Weather from './Weather';
import weather from '../weather';

const Forecast = () => {
    return weather.map(v => (
        <Weather
          img={v.img}
          conditions={v.conditions}
          time={v.time}
        />
      ))
}

export default Forecast