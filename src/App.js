import './App.css';
import axios from 'axios';
import Navbar from './components/Navigation/Navbar';
import AllProducts from './components/Pages/AllProducts';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllProducts/>
    </div>
  );
}

export default App;
