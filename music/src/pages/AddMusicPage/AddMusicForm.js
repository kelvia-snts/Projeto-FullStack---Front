import axios from "axios";
import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Snackbar from "../../components/Snackbar/Snackbar";
import Button from "@material-ui/core/Button";
import { LinearProgressGlobal } from "../../GlobalStyle";
import { BASE_URL } from "../../constants/urls";
import { goToHome } from "../../routes/Coordinator";
import { useRequestData } from "../../hooks/useRequestData";

export const AddMusicForm = () => {
  const history = useHistory();
  const [form, onChange] = useForm({
    title: "",
    file: "",
    genresIds: [],
    albumId: "",   
  });
  const [error, setError] = useState({});
  const [snack, setSnack] = useState({ text: "", success: false });
  const [loading, setLoading] = useState(false);

  const albums = useRequestData("/music/albums", []);
  const albumsComponents =
    albums &&
    albums.map((album) => {
      return <option value="albumId">{album.id}</option>;
    });

  const genres = useRequestData("/music/genres", []);

  const genresComponents = genres.map((genre) => {
    return <option value="genresIds">{genre.id}</option>;
  });

  const handleClick = (event) => {
    event.preventDefault();
    setError({});
    const currentError = {};

    if (form.title === "") {
      currentError.email = "Título não foi inserido";
    }
    if (form.file === "") {
      currentError.email = "Link não foi inserido";
    }
    setError({ ...currentError });
  };

  const create = () => {
    setSnack({ text: "" });
    setLoading(true);
    axios
      .post(`${BASE_URL}/music/createMusic`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToHome(history);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        setSnack({ text: "Há Informações incorretas", success: false });
      });
  };

  return (
    <div>
      <Form onSubmit={handleClick} title="Adicionar nova música">
        <Input
          label="Título"
          placeholder="Título da música"
          type={"title"}
          name={"title"}
          value={form.title}
          onChange={onChange}
          error={error["title"]}
          required={true}
        />
        <Input
          label="Link"
          placeholder="Link da música"
          type={"url"}
          name={"file"}
          value={form.file}
          onChange={onChange}
          error={error["file"]}
          required={true}
        />
          {/* <Input
            label="Gêneros ID"  
            placeholder="Gênero"
            type={"text"}
            name={"genresIds"}
            value={form.genresIds}
            onChange={onChange}
            error={error["genresIds"]}
            required={true}
          /> */}
        <label htmlFor="">Gênero ID *</label>
        <select
          name={"genresIds"}
          value={form.genresIds}
          onChange={onChange}
          required={true}
        >
          <option>Selecione</option>
          {genresComponents}
        </select>
        <label>Álbum ID* </label>
        <select
          name={"albumId"}
          value={form.albumId}
          onChange={onChange}
          required={true}
        >
          <option>Selecione</option>
          {albumsComponents}
        </select>

        <Button variant="contained" color="primary" onClick={create}>
          Adicionar nova música
        </Button>
        {loading && <LinearProgressGlobal />}
      </Form>
      {snack.text && <Snackbar text={snack.text} success={snack.success} />}
    </div>
  );
};
