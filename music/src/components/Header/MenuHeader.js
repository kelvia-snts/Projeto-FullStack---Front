import React from "react";
import { Header, ContainerIcon } from "./styled";
import { useHistory } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/backIcon.svg";

export default function MenuHeader({ currentPageLabel, isGoBack, goTo }) {
  const history = useHistory();

  return (
    <Header>
      {isGoBack && (
        <ContainerIcon onClick={goTo ? goTo : history.goBack}>
          <BackIcon/>
        </ContainerIcon>
      )}
      {currentPageLabel}
    </Header>
  );
}