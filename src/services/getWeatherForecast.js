import appConfig from '../config/appConfig'

export default async function getWeatherForecast() {
  const apiKey = appConfig.apiKey

  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=5037649&appid=${apiKey}&units=imperial`)

  const data = await response.json()

  return data
}