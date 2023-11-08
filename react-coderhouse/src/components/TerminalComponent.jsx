import React, { useState, useEffect } from 'react';
import Clima from './clima';

const TerminalComponent = () => {
        const [typedText, setTypedText] = useState('');
      
        useEffect(() => {
          const text = "> Estamos trabajando... ";
          let index = 0;
      
          const interval = setInterval(() => {
            setTypedText(text.slice(0, index));
            index++;
            if (index > text.length) {
              clearInterval(interval);
              setTimeout(() => {
                index = 0; 
              }, 10000); 
            }
          }, 100); 
        }, []);
      
        return (
          <div className="terminal  d-flex align-items-center justify-content-center" style={{marginTop:"20%"}}>
            <div className="text">
              <span className="green">{typedText}</span>
              <span className="green" style={{paddingTop:"10%"}}><Clima></Clima></span>
            </div>
            
          </div>
        );
      };
      

export default TerminalComponent;
