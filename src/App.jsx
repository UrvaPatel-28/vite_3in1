
import './App.css'
import ToDoApp from './ToDoApp/ToDoApp'
import WeatherApp from './WeatherApp/WeatherApp'
import TimeZoneConverter from './TimeZoneConverter/TimeZoneConverter'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'




function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todoapp' element={<ToDoApp />} />
          <Route path='/weatherapp' element={<WeatherApp />} />
          <Route path='/timeconversionapp' element={<TimeZoneConverter />} />
        </Routes>
      </Router>


    </>
  )
}


export default App
