import TimeConverter from "./timeConverter"
import ImageSwitcher from "./imageSwitcher"
const CurrentWeather = ({ apiData }) => {

  return (
    <>
      {apiData !== null && (
        <>
          <div><ImageSwitcher weatherCode={apiData['weather'][0]['id']} /></div>
          <div>Location: {apiData['name']}</div>
          <div>Description: {apiData['weather'][0]['description']}</div>
          <div>Current Temp: {Math.floor(apiData['main']['temp'])}</div>
          <div>min Temp: {Math.floor(apiData['main']['temp_min'])}</div>
          <div>Max Temp: {Math.floor(apiData['main']['temp_max'])}</div>
          <div>wind Speed: {Math.floor(apiData['wind']['speed'])}</div>
          <div>Humidity: {Math.floor(apiData['main']['temp'])}%</div>
          <div>
            <TimeConverter time={apiData['sys']['sunrise']} format={'hours/mins'} />
            {` - `}
            < TimeConverter time={apiData['sys']['sunset']} format={'hours/mins'} />
          </div>
        </>
      )}
    </>
  )
}

export default CurrentWeather