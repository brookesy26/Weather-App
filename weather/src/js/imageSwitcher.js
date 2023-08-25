import { useState, useEffect } from 'react'

const ImageSwitcher = ({ weatherCode }) => {
  const [imageSrc, setImageSrc] = useState('')
  const [weatherType, setWeatherType] = useState('')

  useEffect(() => {
    switch (weatherCode) {
      default:
      case 800:
        setWeatherType('Clear sky')
        setImageSrc('https://openweathermap.org/img/wn/01d@2x.png')
        break
      case 801:
        setWeatherType('few clouds')
        setImageSrc('https://openweathermap.org/img/wn/02d@2x.png')
        break
      case 802:
        setWeatherType('scattered clouds')
        setImageSrc('https://openweathermap.org/img/wn/03d@2x.png')
        break
      case 803:
      case 804:
        setWeatherType('broken clouds')
        setImageSrc('https://openweathermap.org/img/wn/04d@2x.png')
        break
      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
        setWeatherType('shower rain')
        setImageSrc('https://openweathermap.org/img/wn/09d@2x.png')
        break
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 511:
      case 520:
      case 521:
      case 522:
      case 531:
        setWeatherType('rain')
        setImageSrc('https://openweathermap.org/img/wn/10d@2x.png')
        break
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        setWeatherType('thunderstorm')
        setImageSrc('https://openweathermap.org/img/wn/11d@2x.png')
        break
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 613:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622:
        setWeatherType('snow')
        setImageSrc('https://openweathermap.org/img/wn/13d@2x.png')
        break
      case 701:
      case 711:
      case 721:
      case 731:
      case 741:
      case 751:
      case 761:
      case 762:
      case 771:
      case 781:
        setWeatherType('mist')
        setImageSrc('https://openweathermap.org/img/wn/50d@2x.png')
        break
    }
  }, [weatherCode])
  return <img alt={weatherType} src={imageSrc} />
}

export default ImageSwitcher