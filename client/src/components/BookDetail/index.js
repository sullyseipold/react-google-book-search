import React from "react";

export function Detail(props) {
  return (
    <div className="">
      <img alt={props.title} className="img-fluid" src={props.image} style={{ margin: "0 auto" }} />
      <p>Authors: {props.authors}</p>
      <p>Title: {props.title}</p>
      <p>Description: {props.description}</p>
      <p>Book Details: {props.infoLink}</p>
    </div>
  );
}

export function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
      <img alt={props.title} className="img-fluid" src={props.image} style={{ marginRight: "20px", float: "left" }} />
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text"><strong>Authors: </strong>{props.authors}</p>
      <p className="card-text"><strong>Description: </strong>{props.description}</p>
      <p className="card-text"><a href={props.infoLink}><strong>Book Details</strong></a></p>
      {props.children}
      </div>
    </div>
  );
}
