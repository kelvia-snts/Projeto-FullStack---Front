import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { useRequestData } from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import { convertDate } from "../../constants/ConvertDate";
import { Details } from "./styled";
import { Section } from "./styled";
import { ReactComponent as Music } from "../../assets/music.svg";

export const MusicDetailsPage = () => {
  useProtectedPage();
  const params = useParams();
  const music = useRequestData(`/music/${params.id}`, {});

  return (
    <div>
      <MenuHeader isGoBack currentPageLabel={music && music.title} />
      <Section>
        <Music />
          <embed
            type="video/webm"
            src={music && music.file}
            width="250"
            height="200"
            />
        <Details>
          <summary>Detalhes da música</summary>
          <span>Link da música </span>
            <u>{music && music.file}</u>
          <p>Postada em: {convertDate(music && music.date)}</p>
        </Details>
      </Section>
    </div>
  );
};
