import React from "react";
import "./style.css"

// This file exports the Input, TextArea, and FormBtn components

export function Form(props) {
  return (
    <form className="border border-dark" {...props}>
    </form>
  );
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10, marginLeft: 10 }} className="btn btn-primary">
    </button>
  );
}


  export function SearchForm(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Book Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Title (required)"
            id="search"
          />
          <br />
          <button onClick={props.handleFormSubmit} className="btn btn-primary" style={{float: "right"}}>
            Search
          </button>
        </div>
      </form>
    );
  }

