import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { useRequestData } from "../../hooks/useRequestData";
import { CardMusic } from "../../components/Cards/Cards";
import { useHistory } from "react-router-dom";
import profile from "../../assets/profile.png";
import {
  goToAddMusic,
  goToMusicDetail,
  goToProfile,
} from "../../routes/Coordinator";
import { MusicsContainer, FeedContainer } from "./styled";

import { ReactComponent as CreateMusic } from "../../assets/criar.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";

export const HomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const onClickMusic = (id) => {
    goToMusicDetail(history, id);
  };

  const musics = useRequestData("/music/all", []);

  const musicComponent = musics.map((music) => {
    return (
      <CardMusic title={music.title} onClick={() => onClickMusic(music.id)} />
    );
  });

  return (
    <div>
      <MenuHeader currentPageLabel="Feed" />
      <FeedContainer>
        <img src={profile} onClick={() => goToProfile(history)} />
        <CreateMusic onClick={() => goToAddMusic(history)} />
        <MusicsContainer>{musicComponent}</MusicsContainer>
      </FeedContainer>
    </div>
  );
};
