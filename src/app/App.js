import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "../components/Products";
import Characteristics from "../components/Characteristics";


const App = () => {
  /*
  const handleAddToChar = (e, product) => {
    let charactalreadyclick =false;
    Object.keys(characs).forEach( item => {
      if( item.id === product.id){
        charactalreadyclick=true; 
      }
      if(!charactalreadyclick){
        e.push({...item, count:1});
      }
      localStorage.setCharacts("characts",JSON.stringify(characts));
      return characts; 
    })
  };


handleRemoveFromCart(e,item){
  setCharacts(
   characts= characts.filter(elm => elm.id!== item.id);
    localStorage.setCharacts('charact',characts);
    return {characts};
  );

}
*/

  return (
    <div className="  bg-secondary">
      <div className="text-center img-fluid">
        <br />
        <img
          className="header__image"
          src="https://images.ctfassets.net/5gv1edeicqfs/bomBQDobMA6eyu4CkuYmM/6f5debe74cf1e335bb0be7e3ecbba40b/gs-logo.png"
        />
      </div>

      <h3 className="bg-secondary text-white pl-2">Phone Catalogue </h3>
      
      <hr />
      
      <div className="row">
        <div className="col-md-6">

      <Products handleAddToChar={handleAddToChar} />
      
        </div>
        <div className="col-md-6"></div>
        
      <Characteristics characts={setState(characts)} handleRemoveCharact={handleRemoveCharact} />    

        </div>
    </div>
  );
};

export default App;
