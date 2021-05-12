import React, {useState} from 'react';
import '../styleComponents/Header.css';


function Header (props) {  //EL COMPONENTE RECIBE PROPS
                            //LAS PROPS LAS DEFINO EN APP
    
    return (
          <div className = "first">
            
                    {props.navBar.map ((nav, i) => <a key = {nav + i}> {nav} </a>)}
                
            
          </div>
      )
    
  }

export default Header;