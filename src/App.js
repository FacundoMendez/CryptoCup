import './App.css';
import Home from './components/header/home/Home';
import Nav from './components/header/nav/NavHeader';
import "./components/main/main.css"
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      {/* <Preload/> */}
      <Nav />
      <Home />

      <Main />
  

    </div>
  );
}

export default App;
