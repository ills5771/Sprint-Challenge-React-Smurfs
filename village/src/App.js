import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: "",
        age: "",
        height: ""
      },
      isUpdating: false
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  deleteSmurf = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  updateForm = (ev, id) => {
    ev.preventDefault();
    this.setState({
      smurf: this.state.smurfs.find(smurf => smurf.id === id),
      isUpdating: true
    });
  };

  updateSmurf = () => {
    axios
      .put(
        `http://localhost:3333/smurfs/${this.state.smurf.id}`,
        this.state.smurf
      )
      .then(res => {
        this.setState({
          smurfs: res.data,
          isUpdating: false,
          smurf: {
            name: "",
            age: "",
            height: ""
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  addSmurf = () => {
    const smurf = {
      name: this.state.smurf.name,
      age: this.state.smurf.age,
      height: this.state.smurf.height
    };

    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        console.log(res.data);
        this.setState({
          smurfs: res.data,
          smurf: {
            name: "",
            age: "",
            height: ""
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="App">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textDecoration: "none",
            margin: "5%",
            width: "350px"
          }}
        >
          <NavLink to="/">Smurf Village</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              updateForm={this.updateForm}
              updateSmurf={this.updateSmurf}
              isUpdating={this.state.isUpdating}
              handleInputChange={this.handleInputChange}
              addSmurf={this.addSmurf}
              smurf={this.state.smurf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              updateForm={this.updateForm}
              isUpdating={this.state.isUpdating}
            />
          )}
        />
        {/* <SmurfForm
          updateForm={this.updateForm}
          updateSmurf={this.updateSmurf}
          isUpdating={this.state.isUpdating}
          handleInputChange={this.handleInputChange}
          addSmurf={this.addSmurf}
          smurf={this.state.smurf}
        /> */}
        {/* <Smurfs
          smurfs={this.state.smurfs}
          deleteSmurf={this.deleteSmurf}
          updateForm={this.updateForm}
          isUpdating={this.state.isUpdating}
        /> */}
        {/* <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              updateForm={this.updateForm}
              updateSmurf={this.updateSmurf}
              isUpdating={this.state.isUpdating}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              updateForm={this.updateForm}
              isUpdating={this.state.isUpdating}
            />
          )}
        /> */}
      </div>
    );
  }
}

export default App;
