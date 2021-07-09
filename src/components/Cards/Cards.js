import React from "react";
import { Cards } from "./styled";
import { Container } from "./styled";
import { ReactComponent as Music } from "../../assets/music.svg";

export const CardMusic = (props) => {
  return (
    <Container>
      <Music />
      <Cards onClick={props.onClick}>
        <h5>{props.id}</h5>
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <h4>{props.date}</h4>
        <h4>{props.file}</h4>
      </Cards>
    </Container>
  );
};
