import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { useRequestData } from "../../hooks/useRequestData";
import { CardMusic } from "../../components/Cards/Cards";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
  goToProfile,
} from "../../routes/Coordinator";
import { MusicsContainer, FeedContainer, Component } from "./styled";
import { convertDate } from "../../constants/ConvertDate";

export const HomePage = () => {
  useProtectedPage();
  const history = useHistory();

  const musics = useRequestData("/music/feed", {});

  const musicComponent = musics.musics ? musics.musics.map((music) => {
    return (
    <Component>
      <CardMusic author={music.user} title={music.title} />
      <details>
      <embed
          type="video/webm"
          src={music.file}
          width="150"
          height="100"
        />
        <span>Link:  </span>
        <u>{music.file}</u>
        <p> Postada	em: {convertDate(music.date)}</p>
      </details>
      </Component>
    );
  }) : []

  return (
    <div>
      <MenuHeader currentPageLabel="Feed" />
      <FeedContainer>
        <Button variant="contained" color="primary" onClick={() => goToProfile(history)}>Perfil</Button>
        <MusicsContainer>{musicComponent}</MusicsContainer>
      </FeedContainer>
    </div>
  );
};
