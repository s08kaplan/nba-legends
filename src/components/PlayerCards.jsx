import React from "react";

const PlayerCards = ({ data }) => {


  return (
    <div className="row player-cards">
      {data.map(({ name, img, statistics }) => (
        <div className="col-sm-6 col-md-4 gap-3 col-lg-3 gap-5 toggle" key={name}>
         <div className="img mt-5 ">
            <img src={img} alt="" />
            <p className="player-name">{name}</p>
          </div>
          <div className="statistics">
            <div>{statistics[0]}</div>
            <div>{statistics[1]}</div>
            <div>{statistics[2]}</div>
            <div>{statistics[3]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerCards;



