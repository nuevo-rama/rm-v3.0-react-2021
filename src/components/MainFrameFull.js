import React from 'react';
import MainFrame from './MainFrame'; //IMPORTO EL COMPONENTE
import FrameProps from './FrameProps'; //IMPORTO EL COMPONENTE

function MainFrameFull() { //LA FUNCION SE LLAMA COMO EL COMPONENTE
    return (
      <div>
        <MainFrame />

        <FrameProps  nombre = "A" />
        <FrameProps  nombre = "B" />
        <FrameProps  nombre = "C" />
        
        
      </div>
    );
  }

export default MainFrameFull;