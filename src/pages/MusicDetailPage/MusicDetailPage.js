import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { useRequestData } from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import {convertDate} from "../../constants/ConvertDate"

export const MusicDetailsPage = () => {
  useProtectedPage();
  const params = useParams();
  const music = useRequestData(`/music/${params.id}`, {})

  return( <div>
    <MenuHeader isGoBack currentPageLabel={music && music.title} />
      <h3>{music && music.file}</h3>
      <p>Postada em: {convertDate(music && music.date)}</p>
    </div>);
};
