
import Weather from './Weather';
import weather from '../weather';

const Forecast = () => {
    return <div className='container'> {weather.map((v, i) => (
        <Weather
          key={i}
          img={v.img}
          conditions={v.conditions}
          time={v.time}
        />
      ))} </div>
}

export default Forecast;