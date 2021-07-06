import React from "react";
import { useHistory } from "react-router-dom";
import { goToSignup } from "../../routes/Coordinator";
import { LoginForm } from "./LoginForm";
import Button from '@material-ui/core/Button';
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const LoginPage = () => {
  useProtectedPage();
  const history = useHistory();
  return (
    <div>
      <LoginForm />
      <span>Não possui conta?</span>
      <Button variant="contained" color="primary" onClick={() => goToSignup(history)}>
          Cadastre-se
        </Button>
    </div>
  );
};
