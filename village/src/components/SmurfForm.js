import React from "react";
import { Link } from "react-router-dom";

function SmurfForm(props) {
  function handleSubmit(ev) {
    ev.preventDefault();
    if (props.isUpdating) {
      props.updateSmurf();
    } else {
      props.addSmurf();
    }
  }
  return (
    <div className="SmurfForm">
      <form onSubmit={handleSubmit}>
        <input
          onChange={props.handleInputChange}
          placeholder="name"
          value={props.smurf.name}
          name="name"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="age"
          value={props.smurf.age}
          name="age"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="height"
          value={props.smurf.height}
          name="height"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="image"
          value={props.smurf.imgUrl}
          name="imgUrl"
        />

        <button>{props.isUpdating ? "Update" : "Add Smurf"}</button>
      </form>
    </div>
  );
}

export default SmurfForm;
