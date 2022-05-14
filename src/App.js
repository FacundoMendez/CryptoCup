import './App.css';
import Home from './components/header/home/Home';
import Nav from './components/header/nav/NavHeader';
import "./components/main/main.css"
import TokenMain from './components/main/token/TokenMain';
import TournamentMain from './components/main/tournament/TournamentMain';
import TiketsMain from './components/main/tikets/TiketsMain';

function App() {
  return (
    <div className="App">
      {/* <Preload/> */}
      <Nav />
      <Home />

      <main>
        <TournamentMain/>
        <TiketsMain/>
        <TokenMain/>
      </main>

    </div>
  );
}

export default App;
