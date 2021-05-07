import './App.css';
import MainFrame from './components/MainFrame'; //IMPORTO EL COMPONENTE
import MainFrameFull from './components/MainFrameFull'; //IMPORTO EL COMPONENTE
import FrameProps from './components/FrameProps'; //IMPORTO EL COMPONENTE

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <MainFrame />
        <MainFrameFull />
        <FrameProps />
        
      </header>
    </div>
  );
}

export default App;
