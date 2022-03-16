import './App.css';

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingsscreen from './screens/Bookingsscreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/home' element={<Homescreen />} />
        <Route exact path='/book/:eventid' element={<Bookingsscreen />} />
        </Routes>
    </Router>
    </div>
  );
}


export default App;
