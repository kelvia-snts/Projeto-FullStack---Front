import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Form } from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "@material-ui/core/Button";
import Snackbar from "../../components/Snackbar/Snackbar";
import { LinearProgressGlobal } from "../../GlobalStyle";

export const AddAlbumForm = () => {
  
  const [form, onChange, clear] = useForm({
    name: ""
  });
  const [error, setError] = useState({});
  const [snack, setSnack] = useState({ text: "", success: false });
  const [loading, setLoading] = useState(false);


  const handleClick = (event) => {
    event.preventDefault();
    setError({});
    const currentError = {};

    if(form.name === "") {
      currentError.name = "Nome do Album não foi informado"
    }
    setError({ ...currentError });
  }

  const createAlbum = () => {
    setSnack({ text: "" });
    setLoading(true);
   axios
    .post(`${BASE_URL}/music/createAlbum`, form, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      clear()
      setSnack({ text: "Àlbum criado com sucesso", success: true });
    })
    .catch((error) => {
      setLoading(false);
      setSnack({ text: "Há Informações incorretas ou campo está vazio", success: false });
      console.log(error.response ? error.response.data : error.message);
    });
  }

  return (
    <div>
      <Form  onSubmit={handleClick} title="Criar uma Playlist">
        <Input
          label="nome"
          placeholder="Nome da playlist"
          type={"name"}
          name={"name"}
          value={form.name}
          onChange={onChange}
          error={error["name"]}
          required={true}
        />
        <Button variant="contained" color="primary" onClick={createAlbum}>
          Criar Playlist
        </Button>
     {loading && <LinearProgressGlobal />}
      </Form>
      {snack.text && <Snackbar text={snack.text} success={snack.success} />}
    </div>
  )
}