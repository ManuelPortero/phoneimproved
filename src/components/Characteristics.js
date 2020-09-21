import React, { useState, useEffect } from "react";
import "./Characteristics.css";


const Characteristics = (props) => {
    const [Characts, setCharacts] = useState([]);

return (
    <div className="alert alert-success">
        {characts.length === 0? " No selected products ": <div> You have {cartItems.length} products </div>}
        {characts.length > 0 && 
            <div>
                <ul>
                    {characts.map(item =>
                        <li>
                            <b>{item.title}</b>
                                
                            <button className="btn btn-success text-warning"
                            onClick={(e) =>this.props.handleRemovecharact(e,item)}
                            >X</button>
                        </li>)}
                </ul>
            </div>
        }
    </div>
    
);
    }
export default Characteristics;
