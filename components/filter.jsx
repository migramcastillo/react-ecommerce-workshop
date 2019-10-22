import React from "react";
import "./filter.scss";

const Filter = ({ active, setFilter }) => {
  return (
    <div className="filter font-nunito">
      <button
        onClick={() => setFilter("")}
        className={`button ${active === "" && "active"}`}
        type="button"
      >
        Todos
      </button>
      <button
        onClick={() => setFilter("aventura")}
        className={`button ${active === "aventura" && "active"}`}
        type="button"
      >
        Aventura
      </button>
      <button
        onClick={() => setFilter("arqueologia")}
        className={`button ${active === "arqueologia" && "active"}`}
        type="button"
      >
        Arqueología
      </button>
      <button
        onClick={() => setFilter("naturaleza")}
        className={`button ${active === "naturaleza" && "active"}`}
        type="button"
      >
        Naturaleza
      </button>
      <button
        onClick={() => setFilter("cultural")}
        className={`button ${active === "cultural" && "active"}`}
        type="button"
      >
        Cultural
      </button>
    </div>
  );
};

export default Filter;
