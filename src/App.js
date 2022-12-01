import logo from './logo.svg';
import './App.css';
import About from "./Components/About"
import Footer from "./Components/Footer"
import Info from "./Components/Info"
import Interests from "./Components/Interest"

function App() {
  
  return (
    <div className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
