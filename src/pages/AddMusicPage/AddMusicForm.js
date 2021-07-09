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
      return <option value={album.id}>{album.name}</option>;
    });

  const genres = useRequestData("/music/genres", []);

  const genresComponents = genres.map((genre) => {
    return <option value={genre.id}>{genre.name}</option>;
  });

  const handleClick = (event) => {
    event.preventDefault();
    setError({});
    const currentError = {};

    if (form.title === "") {
      currentError.title = "Título não foi inserido";
    }
    if (form.file === "") {
      currentError.file = "Link não foi inserido";
    }
    setError({ ...currentError });
  };

  const create = () => {
    setSnack({ text: "" });
    setLoading(true);
    const headers = {
      Authorization: localStorage.getItem("token"),
    };
    const body = { ...form, genresIds: [form.genresIds] };
    axios
      .post(
        `
      ${BASE_URL}/music/createMusic`,
        body,
        {
          headers,
        }
      )
      .then((response) => {
        goToHome(history);
      })
      .catch((error) => {
        setLoading(false);
        setSnack({
          text: "Há Informações incorretas ou campos estão vazios",
          success: false,
        });
        console.log(error.response ? error.response.data : error.message);
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
        <label htmlFor="">Gênero Musical *</label>
        <select
          name={"genresIds"}
          value={form.genresIds}
          onChange={onChange}
          required={true}
        >
          <option>Selecione</option>
          {genresComponents}
        </select>
        <label>Playlist * </label>
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
