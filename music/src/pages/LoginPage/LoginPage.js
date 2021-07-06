import React from "react";
import { useHistory } from "react-router-dom";
import { goToSignup } from "../../routes/Coordinator";
import { LoginForm } from "./LoginForm";
import Button from '@material-ui/core/Button';

export const LoginPage = ({ setRightButtonText }) => {
  const history = useHistory();
  return (
    <div>
      <LoginForm setRightButtonText={setRightButtonText} />
      <span>Não possui conta?</span>
      <Button color="primary" onClick={() => goToSignup(history)}>
          Cadastre-se
        </Button>
    </div>
  );
};
