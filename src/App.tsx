import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import EventInfo from './pages/EventInfo'
import Teams from './pages/Teams'
import PlayersByTeam from './pages/PlayersByTeam'
import Schedule from './pages/Schedule'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-info" element={<EventInfo />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players/:teamId" element={<PlayersByTeam />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Layout>
  )
}

export default App
