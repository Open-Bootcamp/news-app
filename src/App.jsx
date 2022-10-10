import { Route, Routes } from 'react-router-dom'
import Business from './pages/Business'
import Entertainment from './pages/Entertainment'
import Health from './pages/Health'
import Home from './pages/Home'
import Science from './pages/Science'
import Search from './pages/Search'
import Sports from './pages/Sports'
import Technology from './pages/Technology'

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/general'
          element={<Home />}
        />
        <Route
          path='/general/:page'
          element={<Home />}
        />

        <Route
          path='/business'
          element={<Business />}
        />
        <Route
          path='/entertainment'
          element={<Entertainment />}
        />
        <Route
          path='/Health'
          element={<Health />}
        />
        <Route
          path='/science'
          element={<Science />}
        />
        <Route
          path='/sports'
          element={<Sports />}
        />
        <Route
          path='/technology'
          element={<Technology />}
        />
        <Route
          path='/search/:search'
          element={<Search />}
        />
        <Route
          path='/search/:search/:page'
          element={<Search />}
        />

        <Route
          path='*'
          element={<h1>Not Found</h1>}
        />
      </Routes>
    </>
  )
}

export default App
