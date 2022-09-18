import React from "react";
import "../App.css";

const Card = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <b>name:</b> {user.name}
        </div>
        <div className="card-substitute mb-2 text-muted">
          <b>company:</b> {user.company.name}
        </div>
        <div className="card-text">
          <b>catchPhrase:</b> {user.company.catchPhrase}
        </div>
      </div>
    </div>
  );
};

export default Card;
