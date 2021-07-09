import React from "react";
import { Main, Title, ContainerInput } from "./styled";

export function Form({ children, labelButton, title, onSubmit }) {
  return (
    <Main OnSubmit={onSubmit}>
      <Title>{title}</Title>
      <ContainerInput>{children}</ContainerInput>
    </Main>
  );
}
