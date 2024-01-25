import '../css/style.css'
import Connection from './API/api.js'
import SearchBar from './search'
import CurrentWeather from './currentWeather'
import DayForecast from './dayForecast'
import WeekForecast from './weekForecast'
import { useState } from 'react'

function App() {
  const [currentData, setCurrentData] = useState(null)
  const [forcastWeather, SetForecastData] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [enterState, setEnterState] = useState(false)
  return (
    <>
      <section>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          setEnterState={setEnterState} />
      </section>

      <section>
        <CurrentWeather
          apiData={currentData} />
      </section>

      <section className='flex-row'>
        <DayForecast
          apiData={forcastWeather}
        />
      </section>
      <section>
        <WeekForecast
          apiData={forcastWeather} />
      </section>

      <Connection
        apiType={'forecast'}
        setApiData={SetForecastData}
        city={inputValue}
        enterState={enterState} />

      <Connection
        apiType={'weather'}
        setApiData={setCurrentData}
        city={inputValue}
        enterState={enterState} />
    </>
  )
}

export default App;
