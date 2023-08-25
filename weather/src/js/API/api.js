import { useEffect } from 'react'

function Connection({ city, setApiData, enterState, apiType }) {
  const key = '60ecfde95bd0733de51863e0c8e3f486'
  const api = `https://api.openweathermap.org/data/2.5/${apiType}?q=${city}&appid=${key}&units=metric`

  useEffect(() => {
    if (enterState) {
      console.log('enter State true')
      fetch(api)
        .then(response => response.json())
        .then(data => {
          if (data.cod === 200 || data.cod === '200') {
            setApiData(data)
          } else {
            alert(`Error: ${data.cod}, ${data.message}`)
          }
        }
        )
        .catch(error => {
          console.log(error)
          alert('Currently Experiencing Technical Issues Please Try again Later')
        }
        )
    }
    // console.log('check')
  }, [api, setApiData, enterState])
}

export default Connection