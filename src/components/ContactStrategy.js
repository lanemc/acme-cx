import React, { useEffect, useState } from 'react'
import getWeatherForecast from '../services/getWeatherForecast'
import RecommendationTable from './RecommendationTable'

const ContactStrategy = () => {
  const [forecast, setForecast] = useState()

  useEffect(() => {
    async function getFiveDayForecast() {
      const currentForecast = await getWeatherForecast()
      const weatherByTime = currentForecast.list?.map(time => ({
        dateTime: time?.dt_txt,
        temp: parseInt(time?.main?.temp),
        weather: time?.weather[0]?.main,
        contactType: getContactType(parseInt(time?.main?.temp), time?.weather[0]?.main),
      }))
      setForecast(weatherByTime)
    }
    getFiveDayForecast()
  },[])

  const getContactType = (temperature, weather) => {
    if (temperature > 75 && weather === "Clear") {
      return "text message"
    } else if (temperature > 55 && temperature < 75) {
      return "email"
    } else if (temperature < 55 || weather === "Rain") {
      return "phone call"
    } else {
      return "No recommendation"
    }
  }

  return (
    <>
      <h3>Forecast for Minneapolis</h3>
      {forecast && <RecommendationTable forecast={forecast} />}
    </>
  )
}

export default ContactStrategy
