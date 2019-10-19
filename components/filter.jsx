import React from "react";
import "./filter.scss";

const Filter = () => {
  return (
    <div className="filter font-nunito">
      <button className="button active" type="button">
        Todos
      </button>
      <button className="button" type="button">
        Playas
      </button>
      <button className="button" type="button">
        Restaruantes
      </button>
      <button className="button" type="button">
        Cenotes
      </button>
      <button className="button" type="button">
        Tours
      </button>
      <button className="button" type="button">
        Parques
      </button>
    </div>
  );
};

export default Filter;
