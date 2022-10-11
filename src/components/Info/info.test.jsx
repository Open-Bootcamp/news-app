import { cleanup, render, screen } from '@testing-library/react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import Info from './Info'

const currentDate = new Date().toLocaleString('en-US', {
  dateStyle: 'full'
})

const LocationComponent = () => {
  const location = useLocation()
  return <div>{location.pathname}</div>
}

let component

describe('info component tests', () => {
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Info />
        <Routes>
          <Route
            path='/'
            element={<div>Home</div>}
          />
          <Route
            path='/search'
            element={<div>Searchasd</div>}
          />
        </Routes>
        <LocationComponent />
      </BrowserRouter>
    )
  })

  afterEach(cleanup)

  it('should render current date', async () => {
    expect(screen.getByText(currentDate)).toBeDefined()
  })

  it('should render exchange rate', async () => {
    expect(screen.getByAltText('dollar symbol')).toBeDefined()
    expect(screen.getByAltText('euro symbol')).toBeDefined()
  })

  it('should render the time', async () => {
    expect(screen.getByAltText('time symbol')).toBeDefined()
    expect(screen.getByText('Trujillo:')).toBeDefined()
    expect(screen.getByText('28 °C')).toBeDefined()
  })

  it('should render search bar', async () => {
    expect(screen.getByPlaceholderText('Search by...')).toBeDefined()
    expect(screen.getByText('Search')).toBeDefined()
  })
})
