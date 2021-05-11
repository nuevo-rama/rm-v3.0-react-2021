import './App.css';
import ProductDetail from './components/ProductDetail';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ProductDetail 
        title = "New Cap"
        subtitle = "Regular Fit"
        price = "00"
        description = "Model: Cap"
        descriptionFull = "Color: Pink / Grey"
      
        />
        
        
        
      </header>
    </div>
  );
}

export default App;
