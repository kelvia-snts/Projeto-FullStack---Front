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
    <section>
      <MenuHeader isGoBack currentPageLabel="Configuração" />
      <AddContainer>
        <aside>
          <AddAlbumForm />
          <AddGenreForm />
        </aside>
        <AddMusicForm />
      </AddContainer>
    </section>
  );
};
