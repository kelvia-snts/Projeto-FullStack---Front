import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { useRequestData } from "../../hooks/useRequestData";
import { CardMusic } from "../../components/Cards/Cards";
import { useHistory } from "react-router-dom";


export const HomePage = () => {
  useProtectedPage();
  
  const history = useHistory();

  const musics = useRequestData("/music/all", []);
  const onClickPost = (id) => {
    goToPost(history, id);
  };

  const musicComponent = 
    musics.map((music) => {
      return <CardMusic title={music.title} author={music.author} />;
    });
  console.log(musicComponent);

  return (
    <div>
      <MenuHeader currentPageLabel="Music" />
      <div>{musicComponent}</div>
    </div>
  );
};
