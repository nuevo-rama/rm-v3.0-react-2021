import React, {useState} from 'react';


function Header (props) {  //EL COMPONENTE RECIBE PROPS
                                    //LAS PROPS LAS DEFINO EN APP
    
    return (
          <div >
            
                    {props.navBar.map (nav => <a> {nav} </a>)}
                
            
          </div>
      )
    
  }

export default Header;