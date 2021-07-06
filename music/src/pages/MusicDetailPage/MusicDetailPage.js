import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";

export const MusicDetailsPage = () => {
  useProtectedPage();
  return( <div>
    <MenuHeader isGoBack currentPageLabel="Detalhe" />
    
    MusicDetailsPage</div>);
};
