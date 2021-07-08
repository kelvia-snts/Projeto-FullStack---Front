import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {ErrorContainer} from "./styled";

export const ErrorPage = () => {
  return (
    <ErrorContainer>
      <h1>ERROR 404 - página não encontrada</h1>
      <Logo/>
    </ErrorContainer>
    );
};
