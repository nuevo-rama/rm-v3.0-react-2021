import './App.css';
import MainFrame from './components/MainFrame'; //IMPORTO EL COMPONENTE
import MainFrameFull from './components/MainFrameFull'; //IMPORTO EL COMPONENTE

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainFrame />
        <MainFrame />
        <MainFrame />
        <MainFrameFull />
      </header>
    </div>
  );
}

export default App;
