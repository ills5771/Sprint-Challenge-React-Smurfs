import React from "react";

const Smurf = props => {
  return (
    <div className="container">
      <div
        className="card text-white bg-primary
    mb-3"
      >
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-light btn-xs">
            Update Smurf
          </button>
          <button
            // onClick={this.handleDeleteSmurf}
            type="button"
            className="btn btn-dark btn-xs"
          >
            Delete Smurf
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
