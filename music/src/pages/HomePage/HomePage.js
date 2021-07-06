import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { useRequestData } from "../../hooks/useRequestData";
import { CardMusic } from "../../components/Cards/Cards";
import { useHistory } from "react-router-dom";
import { goToMusicDetail } from "../../routes/Coordinator";


export const HomePage = () => {
  useProtectedPage();
  
  const history = useHistory();
  const onClickMusic = (id) => {
    goToMusicDetail(history, id);
  };

  const musics = useRequestData("/music/all", []);

  const musicComponent = 
    musics.map((music) => {
      return <CardMusic title={music.title} author={music.author} onClick={()=> onClickMusic(music.id)} />;
    });

  return (
    <div>
      <MenuHeader currentPageLabel="Music" />
      <div>{musicComponent}</div>
    </div>
  );
};
