import React, {Component} from 'react'; //COMPONENT PARA CONVERTIR A STATEFULL
//import '../styleComponents/ProductDetail.css';


class ButtonChange extends Component {  //EL COMPONENTE RECIBE PROPS

    constructor (props) {
        super (props);
        this.state = {
            imagenActual: props.inicialImage,
            imagenSuperpuesta: props.inicialImage,
            imagenColorCostura: props.inicialImage
        }
    }

    colorUpGreen () {
        this.setState ( {imagenActual: this.props.colorUpGreen})
    }

    colorUpBlue () {
        this.setState ( {imagenActual: this.props.colorUpBlue})
    }

    resetImagen () {
        this.setState ( {imagenActual: this.props.inicialImage})
    }

    //COLORES PARA ABAJO Y ARRIBA

    resetImagen () {
        this.setState ( {imagenSuperpuesta: this.props.inicialImage})
    }

    colorDownGreen () {
        this.setState ( {imagenSuperpuesta: this.props.colorDownGreen})
    }

    colorDownBlue () {
        this.setState ( {imagenSuperpuesta: this.props.colorDownBlue})
    }

    //COLORES PARA LAS COSTURAS

    //resetImagen () {
       // this.setState ( {imagenColorCostura: this.props.inicialImage})
    //}

    colorThreadYellow () {
        this.setState ( {imagenColorCostura: this.props.colorThreadYellow})
    }

    colorThreadMagenta () {
        this.setState ( {imagenColorCostura: this.props.colorThreadMagenta})
    }

        
    render() {                         //ENVUELVO TODO EN RENDER
    return (
          <div className= "prueba" >
              <img className = "positionSuperpuesta" src ={this.state.imagenActual}></img>
              <img className = "positionSuperpuesta" src ={this.state.imagenSuperpuesta}></img>
              <img className = "positionSuperpuesta" src ={this.state.imagenColorCostura}></img>
              
              <button onClick= { () => this.colorUpGreen() }>Color Arriba Verde</button>
              <button onClick= { () => this.colorUpBlue() }>Color Arriba Azul</button>

              <button onClick= { () => this.colorDownGreen() }>Color Abajo Verde</button>
              <button onClick= { () => this.colorDownBlue() }>Color Abajo Azul</button>

              <button onClick= { () => this.colorThreadYellow() }>Color Costura Amarilla</button>
              <button onClick= { () => this.colorThreadMagenta() }>Color Costura Magenta</button>
              
              

              <button onClick= { () => this.resetImagen() }>Reset</button>
          </div>
      )
    
  }}

  

export default ButtonChange;