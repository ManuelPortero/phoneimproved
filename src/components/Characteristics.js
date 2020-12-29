import React, { useState, useEffect } from "react";
import "./Characteristics.css";
import App from '../app/App';


const Characteristics = ({chars, removeChar, props}) => {

return (
    
    <div className="alert alert-success center-text" >
        
        {chars.length === 0? " No selected products ": <div> You have {chars.length} products </div>}
        {chars.length > 0 && 
            <div className=" card bg-secondary">
               
               <div className="text-white mt-2 pt-2 pb-2">

                <ul>
                    {chars.map(item =>
                      
                        <li key={chars.id}>
                        <div>
                        <button className="btn btn-success text-warning float-right mr-4"
                            onClick={() => removeChar(item.id)}
                            
                            >X</button>
                           <p> <b>{item.name}</b> </p>
                            <p> {item.manufacturer} </p>  
                            <p className ="text-justify pr-4">{item.description} </p>
                            <p> {item.color} </p>
                            <p>{item.screen} </p>
                            <p>{item.processor} </p>
                            <p> {item.ram} </p>
                           
                                
                            
                            
                        </div>    
                        <hr className="ml-4" width="350px" />
                        </li>)}
                        
                        
                </ul>
             
            </div>
         </div>
        }
        
    </div>
    
);
    }
export default Characteristics;
