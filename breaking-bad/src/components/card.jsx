import React from "react";
import "./card.css";

const Card = ({ character }) => {
  return (
    <div className="card">
      <img src={character.img} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <span
          className={`btn btn-sm float-end ${
            character.status.toLowerCase().includes("alive")
              ? "btn-success"
              : "btn-danger"
          }`}
        >
          {character.status}
        </span>
        <h4 className="card-title">{character.name}</h4>
        <h6>{character.nickname}</h6>
        <div>
          <p>Occupations:</p>
          <ul>
            {character.occupation.map((job, index) => {
              return (
                <li key={index}>
                  <strong>{job}</strong>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
