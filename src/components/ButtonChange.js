import React, {Component} from 'react'; //COMPONENT PARA CONVERTIR A STATEFULL
//import '../styleComponents/ProductDetail.css';


class ButtonChange extends Component {  //EL COMPONENTE RECIBE PROPS

    constructor (props) {
        super (props);
        this.state = {
            imagenActual: props.inicialImage
        }
    }

    cambiarImagen () {
        this.setState ( {imagenActual: this.props.changeImage})
    }

    resetImagen () {
        this.setState ( {imagenActual: this.props.inicialImage})
    }
        
    render() {                         //ENVUELVO TODO EN RENDER
    return (
          <div >
              <img src ={this.state.imagenActual}></img>
              <button onClick= { () => this.cambiarImagen() }>Color Rosa</button>
              <button onClick= { () => this.resetImagen() }>Reset</button>
          </div>
      )
    
  }}

  

export default ButtonChange;