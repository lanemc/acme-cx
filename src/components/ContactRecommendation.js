import React, { useEffect, useState } from 'react'
import getWeatherForecast from '../services/getWeatherForecast'

const ContactRecommendation = () => {
  const [forecast, setForecast] = useState({})

  useEffect(() => {
    async function getCurrentForecast() {
      const currentForecast = await getWeatherForecast()
      setForecast(currentForecast)
      console.log(currentForecast)
    }
    getCurrentForecast()
  },[])

  return (
    <div className="weather__info">
      Weather info
    </div>
  )
}

export default ContactRecommendation
