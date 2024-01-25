import ImageSwitcher from './imageSwitcher'
import TimeConverter from './timeConverter'

const DayForecast = ({ apiData }) => {

  return (
    <>
      {apiData !== null && (
        <>
          {apiData.list.slice(0, 5).map((listItem, index) => (
            <div key={index} className="tile">
              {<ImageSwitcher weatherCode={listItem.weather[0].id} />}
              <p>{Math.floor(listItem['main']['temp_max'])}</p>
              <p>{Math.floor(listItem['main']['temp_min'])}</p>

              {<TimeConverter
                time={listItem['dt']}
                format={'hours/mins'}
              />
              }

            </div>

          ))}
        </>
      )}
    </>
  )
}

export default DayForecast