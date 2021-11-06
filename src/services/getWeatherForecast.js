import appConfig from '../config/appConfig'

export default async function getWeatherForecast() {
  const apiKey = appConfig.apiKey

  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=5037649&appid=${apiKey}&units=imperial`)
  //const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=minneapolis,us&units=imperial&APPID=09110e603c1d5c272f94f64305c09436")
  const data = await response.json()
  return data
}