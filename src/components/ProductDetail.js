import React, {useState} from 'react';
import '../styleComponents/ProductDetail.css';


function ProductDetail (props) {  //EL COMPONENTE RECIBE PROPS
                                    //LAS PROPS LAS DEFINO EN APP
    
    return (
          <div className="ProductDetail">
              <section className="ColumnLeft">
              <img src={props.image_1}></img>
              </section>

              <section className="ColumnCenter">
                  <img src={props.image_2}></img>
                  <img src={props.image_3}></img>
                  <img src={props.image_4}></img>
                  
              </section>

              <section className="ColumnRight">
                  <h2>{props.title}</h2>
                  <h3>{props.subtitle}</h3>
                  <h3>{props.price}</h3>
                  <p>{props.description}</p>
                  <p>{props.descriptionFull}</p>

              </section>

            
              

          </div>
      )
    
  }

  ProductDetail.defaultProps = {

      image_1 : null,
      title : null,
      subtitle : null,
      price : null,
      description : null,
      descriptionFull : null

  }

export default ProductDetail;