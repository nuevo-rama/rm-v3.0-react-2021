import React, {useState} from 'react';


function ProductDetail (props) {  //EL COMPONENTE RECIBE PROPS
                                    //LAS PROPS LAS DEFINO EN APP
    
    return (
          <div className="ProductDetail">
              <section className="ColumnLeft">
              <img src="image_1_cap.jpg"></img>
              </section>

              <section className="ColumnCenter">
                  <img src="image_1_cap.jpg"></img>
                  <img src="image_1_cap.jpg"></img>
                  <img src="image_1_cap.jpg"></img>
                  
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

export default ProductDetail;