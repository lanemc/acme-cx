import React from 'react'

const RecommendationTable = ({ forecast }) => (
  <table>
    <tr>
      <th>Date/Time</th>
      <th>Temp</th>
      <th>Weather</th>
      <th>Contact Type</th>
    </tr>
    {forecast.hasOwnProperty(0) && forecast.map(data =>
      <tr>
        <td>{data.dateTime}</td>
        <td>{data.temp}</td>
        <td>{data.weather}</td>
        <td>{data.contactType}</td>
      </tr>
    )}
  </table>
)


export default RecommendationTable
