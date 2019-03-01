import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
    <Link to="/smurf-form">
      <div className="container">
        <div
          className="card text-white bg-primary
    mb-3"
        >
          {" "}
          <img src={props.imgUrl} alt={props.imgUrl} />
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              onClick={ev => props.updateForm(ev, props.id)}
              type="button"
              className="btn btn-light btn-xs"
            >
              Update Smurf
            </button>

            <button
              onClick={ev => props.deleteSmurf(ev, props.id)}
              type="button"
              className="btn btn-dark btn-xs"
            >
              Delete Smurf
            </button>
          </div>
        </div>{" "}
      </div>
    </Link>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: "",
  imgUrl: ""
};

export default Smurf;
