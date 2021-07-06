import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { useRequestData } from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";

export const MusicDetailsPage = () => {
  useProtectedPage();
  const params = useParams();
  const music = useRequestData(`/music/${params.id}`, {})

  const time = (milliseconds) => {
    const date = new Date(milliseconds);
    return date.toLocaleDateString("pt-br");
  };


  return( <div>
    <MenuHeader isGoBack currentPageLabel="Detalhe" />
      <h2>{music && music.title}</h2>
      <h3>Música ID: {music && music.id}</h3>
      <h3>Usuário ID: {music && music.author}</h3>
      <h3>Link: {music && music.file}</h3>
      <span>Criado em: {time(music && music.date)}</span>
    </div>);
};
