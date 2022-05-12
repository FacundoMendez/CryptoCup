import './App.css';
import Home from './components/header/home/Home';
import Nav from './components/header/nav/Nav';
import "./components/main/main.css"
import TokenMain from './components/main/token/TokenMain';
import TournamentMain from './components/main/tournament/TournamentMain';

function App() {
  return (
    <div className="App">
      {/* <Preload/> */}
      <Nav />
      <Home />

      <main>
        <TournamentMain/>
        <TokenMain/>
      </main>

    </div>
  );
}

export default App;
