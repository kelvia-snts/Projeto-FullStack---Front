import React from "react";
import { AddMusicForm } from "./AddMusicForm";
import { AddAlbumForm } from "./AddAlbumFrom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { AddGenreForm } from "./AddGenreForm";
import { AddContainer } from "./styled";

export const AddMusicPage = () => {
  useProtectedPage();
  return (
    <div>
      <MenuHeader isGoBack currentPageLabel="Configuração" />
    <AddContainer>
      <div>
      <AddAlbumForm />
      <AddGenreForm />
      </div>
      <AddMusicForm />
    </AddContainer>
    </div>
  );
};
