import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { NavBar } from './components/NavBar/NavBar'
import Business from './pages/Business'
import Entertainment from './pages/Entertainment'
import Health from './pages/Health'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Science from './pages/Science'
import Search from './pages/Search'
import Sports from './pages/Sports'
import Technology from './pages/Technology'

function App() {
  return (
    <>
      <NavBar />
      <main className='m-4 flex max-w-screen-dk flex-1 flex-col font-lora md:mx-auto md:w-11/12 '>
        <Routes>
          <Route
            path='/'
            element={<Navigate to='/general' />}
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
            path='/business/:page'
            element={<Business />}
          />
          <Route
            path='/entertainment'
            element={<Entertainment />}
          />
          <Route
            path='/entertainment/:page'
            element={<Entertainment />}
          />
          <Route
            path='/Health'
            element={<Health />}
          />
          <Route
            path='/Health/:page'
            element={<Health />}
          />
          <Route
            path='/science'
            element={<Science />}
          />
          <Route
            path='/science/:page'
            element={<Science />}
          />
          <Route
            path='/sports'
            element={<Sports />}
          />
          <Route
            path='/sports/:page'
            element={<Sports />}
          />
          <Route
            path='/technology'
            element={<Technology />}
          />
          <Route
            path='/technology/:page'
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
            element={<NotFound />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
