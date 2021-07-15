import React, { useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { useRequestData } from "../../hooks/useRequestData";
import { CardMusic } from "../../components/Cards/Cards";
import { useHistory, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { goToAddMusic, goToAlbum } from "../../routes/Coordinator";
import { MusicsContainer, FeedContainer, Section, ProfileContainer, Div} from "./styled";
import { convertDate } from "../../constants/ConvertDate";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Snackbar from "../../components/Snackbar/Snackbar";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export const ProfilePage = () => {
  useProtectedPage();
  const [snack, setSnack] = useState({ text: "", success: false });
  const history = useHistory();

  const musics = useRequestData("/music/all", []);
  
  const musicComponent = musics.map((music) => {
    return (
      <Section>
        <CardMusic title={music.title} />
        <details>
          <embed type="video/webm" src={music.file} width="150" height="100" />
          <span>Link: </span>
          <u>{music.file}</u>
          <p>Postada em: {convertDate(music.date)}</p>
        </details>
        <Button
          variant="contained"
          color="primary"
          onClick={() => deleteMusic(music.id)}
        >
          Excluir
        </Button>
      </Section>
    );
  });

  const deleteMusic = (id) => {
    setSnack({ text: "" });
    axios
      .delete(`${BASE_URL}/music/delete/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setSnack({ text: "Música excluída com sucesso", success: true });
        window.location.reload();
        console.log(response.data);
      })
      .catch((error) => {
        setSnack({
          text: "Error",
          success: false,
        });
        console.log(error);
      });
  };

  const name = musics.map((music) => {
    return music.user
  })

  return (
    <Div>
     <MenuHeader isGoBack currentPageLabel={name[0]} />
      <AddCircleOutlineIcon style={{ fontSize: 66 }} color="primary" onClick={() => goToAddMusic(history)} />
    <h3 onClick={() => goToAlbum(history)}>Ver Albums</h3>
    <ProfileContainer>
      <FeedContainer>
        <MusicsContainer>{musicComponent}</MusicsContainer>
      </FeedContainer>
      {snack.text && <Snackbar text={snack.text} success={snack.success} />}
    </ProfileContainer>
    </Div>
  );
};
