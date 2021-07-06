import React from "react";
import { Cards } from "./styled";

export const CardMusic = (props) => {
  return (
    <Cards onClick={props.onClick}>
      <h5>{props.id}</h5>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <h4>{props.date}</h4>
      <p>{props.file}</p>
    </Cards>
  )
}