import './App.css';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';



function App() {
  return (
    <div className="App">
      <Header navBar = {["INICIO", "CREÁ TU DISEÑO", "MODELOS", "OPCIONES"]} />
        
        <ProductDetail 
        title = "New Cap"
        subtitle = "Regular Fit"
        price = "00"
        description = "Model: Cap"
        descriptionFull = "Color: Pink / Grey"
      
        />
        
        
        
      
    </div>
  );
}

export default App;
