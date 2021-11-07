import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getFiveDayForecast } from '../../testHelpers/mocks/getFiveDayForecast'
import RecommendationTable from '../RecommendationTable'

jest.mock("../../services/getWeatherForecast")

test('it displays forecast data', async () => {
  const forecast = getFiveDayForecast
  render(<RecommendationTable forecast={forecast} />)
  await waitFor(() => expect(screen.getByText("text message")).toBeInTheDocument())
})
