import React from "react";
import axios from "axios";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader";
import { useRequestData } from "../../hooks/useRequestData";
import { CardMusic } from "../../components/Cards/Cards";
import { useHistory } from "react-router-dom";
import { goToProfile } from "../../routes/Coordinator";
import { MusicsContainer, FeedContainer, Component, Svg, Div } from "./styled";
import { convertDate } from "../../constants/ConvertDate";
import { BASE_URL } from "../../constants/urls";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from "@material-ui/core/Button";

export const HomePage = () => {
  useProtectedPage();
  const history = useHistory();

  const musics = useRequestData("/music/feed", {});
  const profile = useRequestData("/user/profile/:id", [])



  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const musicComponent = musics.musics
    ? musics.musics.map((music) => {
        return (
          <Component>
            <Div>
            <CardMusic author={music.user} title={music.title} />
            </Div>
            <details>
              <embed
                type="video/webm"
                src={music.file}
                width="150"
                height="100"
              />
              <span>Link: </span>
              <u>{music.file}</u>
              <p> Postada em: {convertDate(music.date)}</p>
            </details>
          </Component>
        );
      })
    : [];

  return (
    <section>
      <MenuHeader currentPageLabel="Feed" />
      <Svg>
      <AccountCircleIcon style={{ fontSize: 66 }} color="primary" onClick={() => goToProfile(history)} />
      <ExitToAppIcon style={{ fontSize: 66 }} color="primary" onClick={() => logout()}/>
      </Svg>
      <section>
        <MusicsContainer>{musicComponent}</MusicsContainer>
      </section>
    </section>
  );
};
