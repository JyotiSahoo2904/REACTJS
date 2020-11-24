import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Components/Modal";

import "./ModalTest.css";

class ModalTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      input :"",
      input1:""

    };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
      input :value,
      input1:value
    });
  }

  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true,
                    input1: this.state.input });
   // this.setState({ input1: this.state.input });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!! {this.state.name}</h1>
        <input type="text" name="input" value={this.state.input} onChange={e =>this.handleChange(e)} ></input>  
        <a href="javascript:;" onClick={e => this.modalOpen(e)}>
          Open Modal
        </a>
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
          <h2>Hello Modal</h2>
          <div className="form-group">
            <label>Enter Name:</label>
            <input
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
             <input
              type="text"
              value={this.state.input1}
              name="input1"
              //onChange={e => this.handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button onClick={e => this.handleSubmit(e)} type="button">
              Save
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalTest;
