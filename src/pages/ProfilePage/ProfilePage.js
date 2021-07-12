import React, { useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { useRequestData } from "../../hooks/useRequestData";
import { CardMusic } from "../../components/Cards/Cards";
import { useHistory, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { goToAddMusic, goToProfile } from "../../routes/Coordinator";
import { MusicsContainer, FeedContainer } from "./styled";
import { convertDate } from "../../constants/ConvertDate";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
//import { LinearProgressGlobal } from "../../GlobalStyle";
import Snackbar from "../../components/Snackbar/Snackbar";

export const ProfilePage = () => {
  useProtectedPage();
  const [snack, setSnack] = useState({ text: "", success: false });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const musics = useRequestData("/music/all", []);

  const deleteMusic = (id) => {
    setSnack({ text: "" });
    setLoading(true);
    axios
      .delete(`${BASE_URL}/music/delete/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setSnack({ text: "Música excluída com sucesso", success: true });
        goToProfile(history);
        console.log(response.data)
      })
      .catch((error) => {
        setLoading(false);
        setSnack({
          text: "Error",
          success: false,
        });
        console.log(error);
      });
  };

  const musicComponent = musics.map((music) => {
    return (
      <div>
        <CardMusic title={music.title} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => deleteMusic(music.id)}
        >
          deletar
        </Button>
        {/* {loading && <LinearProgressGlobal />} */}
        <details>
          <embed type="video/webm" src={music.file} width="150" height="100" />
          <span>Link: </span>
          <u>{music.file}</u>
          <p>Postada em: {convertDate(music.date)}</p>
        </details>
      </div>
    );
  });


  return (
    <div>
      <MenuHeader isGoBack currentPageLabel="Minhas músicas" />
      <FeedContainer>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToAddMusic(history)}
        >
          Adicionar Novas Músicas
        </Button>
        <MusicsContainer >{musicComponent}</MusicsContainer>
      </FeedContainer>
      {snack.text && <Snackbar text={snack.text} success={snack.success} />}
    </div>
  );
};
