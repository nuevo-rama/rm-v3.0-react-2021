import React from 'react';

function MainFrame() { //LA FUNCION SE LLAMA COMO EL COMPONENTE

    let condition = "active";
    let number = [1, 2, 3, 4, 5];

    return (
      <div>
        <h2 className= "style1">Titulo {condition} </h2>
        
        <ul>
            {number.map (number => <li> {number} </li>)}
        </ul>
      </div>
    );
  }

export default MainFrame;