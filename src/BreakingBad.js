import "bootstrap-css-only";
import { useState } from "react";

//Function to put on rendering area the characters based on the filter outcome
export default function BreakingBad({ character, key, season }) {
  return (
    <>
      <div className="card" style={{ width: `200px`, margin: `20px` }}>
        <img
          className="card-img-top"
          src={character.img}
          alt="Card"
          style={{ width: `100%`, height: `200px` }}
        ></img>
        <div className="card-body">
          <h6 className="card-title">{character.name}</h6>
          <p className="card-text" style={{ fontSize: `14px` }}>
            Nickname: {character.nickname}
          </p>
          <p className="card-text" style={{ fontSize: `14px` }}>
            Actor Name: {character.portrayed}
          </p>
          <p className="card-text" style={{ fontSize: `14px` }}>
            Birthday: {character.birthday}
          </p>
          <p className="card-text" style={{ fontSize: `14px` }}>
            Status: {character.status}
          </p>
        </div>
      </div>
    </>
  );
}
