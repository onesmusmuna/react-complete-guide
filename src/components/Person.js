import React from "react";
import "./person.css";

function Person({name, age}) {
  return (
    <div className="person">
      <h2>{name}</h2>
      <p>I am {age} years old</p>
    </div>
  );
}

export default Person;
