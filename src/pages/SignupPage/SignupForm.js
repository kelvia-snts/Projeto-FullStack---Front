import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { goToHome } from "../../routes/Coordinator";
import { Form } from "../../components/Form/Form";
import Button from "@material-ui/core/Button";
import Input from "../../components/Input/Input";
import { validateEmail } from "../../constants/validateEmail";
import { LinearProgressGlobal } from "../../GlobalStyle";
import Snackbar from "../../components/Snackbar/Snackbar";

export const SignupForm = () => {
  useUnprotectedPage();
  const history = useHistory();
  const [form, onChange] = useForm({
    name: "",
    email: "",
    password: "",
    nickname: "",
    role: ""
  });
  const [error, setError] = useState({});
  const [snack, setSnack] = useState({ text: "", success: false });
  const [loading, setLoading] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setError({});
    const currentError = {};

    if (form.name === "") {
      currentError.name = "Nome não foi inserido";
    }
    if (form.role === "") {
      currentError.name = "Tipo de conta não foi inserido";
    }

    if (form.email === "") {
      currentError.email = "E-mail não foi inserido";
    } else if (!validateEmail(form.email)) {
      currentError.email = "E-mail inválido";
    }

    if (form.password === "") {
      currentError.password = "Senha não foi inserida";
    } else if (form.password.length < 6) {
      currentError.password = "Senha precisa ter no mínimo 6 caracteres";
    }

    if (form.nickname === "") {
      currentError.cpf = "Nickname não foi inserido";
    }
    setError({ ...currentError });
  };

  const signup = () => {
    setSnack({ text: "" });
    setLoading(true);
    axios
      .post(`${BASE_URL}/user/register`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToHome(history);
      })
      .catch((error) => {
        setLoading(false);
        setSnack({
          text: "Não foi possível criar cadastro. Verifique preencheu todos os campos corretamente ou se o email já pertence a outra conta!",
          success: false,
        });
      });
  };

  return (
    <div>
      <Form onSubmit={handleClick} title="Cadastro">
        <Input
          label="Nome"
          placeholder={"Nome e Sobrenome"}
          type={"name"}
          name={"name"}
          value={form.name}
          onChange={onChange}
          error={error["name"]}
          required={true}
        />
        <Input
          label="Email"
          placeholder={"email@email.com"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          error={error["email"]}
          required={true}
        />
        <Input
          label="Senha"
          placeholder={"Mínimo 6 caracteres"}
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          error={error["password"]}
          required={true}
        />
        <Input
          label="Nickname"
          placeholder={"Como gostaria de ser chamado?"}
          type={"nickname"}
          name={"nickname"}
          value={form.nickname}
          onChange={onChange}
          error={error["nickname"]}
          required={true}
        />
        <label htmlFor="">Tipo de conta *</label>
        <select
         name={"role"}
         value={form.role}
         onChange={onChange}
         required={true}>
          <option>Selecione</option>
          <option>NORMAL</option>
          <option>ADMINISTRADOR</option>
        </select>
        <Button variant="contained" color="primary" onClick={signup}>
          Confirmar
        </Button>
        {loading && <LinearProgressGlobal />}
      </Form>
      {snack.text && <Snackbar text={snack.text} success={snack.success} />}
    </div>
  );
};
