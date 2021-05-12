import './App.css';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ButtonChange from './components/ButtonChange';



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
        image_1 ="image_1_cap.jpg"
        image_2 ="image_1_cap.jpg"
        image_3 ="image_1_cap.jpg"
        image_4 ="image_1_cap.jpg"
      
        />
        
      <ButtonChange
      inicialImage= {'image_0_cap.jpg'}
      changeImage= {'image_1_cap.jpg'}
      /> 
        
      
    </div>
  );
}

export default App;
