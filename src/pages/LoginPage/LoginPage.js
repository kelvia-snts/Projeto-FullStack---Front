import React from "react";
import { useHistory } from "react-router-dom";
import { goToSignup } from "../../routes/Coordinator";
import { LoginForm } from "./LoginForm";
import Button from '@material-ui/core/Button';
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import {LoginContainer} from "./styled";

export const LoginPage = () => {
  useProtectedPage();
  const history = useHistory();
  return (
    <LoginContainer>
      <MenuHeader currentPageLabel="Music" />
      <LoginForm />
      <span>Não possui conta?</span>
      <Button variant="contained" color="primary" onClick={() => goToSignup(history)}>
          Cadastre-se
        </Button>
    </LoginContainer>
  );
};
