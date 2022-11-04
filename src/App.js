import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Header, Home, Crew, Destination, Technology } from "./components";

function App() {
  return (
    <Router>
      {<Header />}

      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path='/destination' element={<Destination />}/>
        <Route path="/crew" element={<Crew />}/>
        <Route path="/technology" element={<Technology />}/>
      </Routes>
    </Router>
  );
}

export default App;
