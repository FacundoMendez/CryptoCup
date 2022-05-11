import './App.css';
import Home from './components/header/home/Home';
import Nav from './components/header/nav/Nav';
/* import Preload from './components/header/canvasPreload/Preload'; */


function App() {
  return (
    <div className="App">
      {/* <Preload/> */}
      <Nav />
      <Home />
    </div>
  );
}

export default App;
