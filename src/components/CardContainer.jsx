import React from "react";
import PlayerCards from "./PlayerCards";
import data from "../data";


const CardContainer = () => {
  return (
    <>
    
  
    <div className="container d-flex justify-content-center align-items-center gap-5">
        
      <PlayerCards data={data} />
    </div>
    </>
  );
};

export default CardContainer;
