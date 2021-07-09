import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ErrorContainer } from "./styled";
import MenuHeader from "../../components/Header/MenuHeader";

export const ErrorPage = () => {
  return (
    <section>
      <MenuHeader
        isGoBack
        currentPageLabel="ERROR 404 - página não encontrada"
      />
      <ErrorContainer>
        <Logo />
      </ErrorContainer>
    </section>
  );
};
