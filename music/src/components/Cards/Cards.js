import React from "react";
import { Cards } from "./styled";

export const CardMusic = (props) => {
  return (
    <Cards onClick={props.onClick}>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
    </Cards>
  )
}