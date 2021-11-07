import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import getWeatherForecast from '../../services/getWeatherForecast'
import ContactStrategy from '../ContactStrategy'

jest.mock("../../services/getWeatherForecast")

test('it calls the openweathermap api on load', async () => {
  render(<ContactStrategy />)
  expect(getWeatherForecast).toHaveBeenCalledTimes(1);
})
