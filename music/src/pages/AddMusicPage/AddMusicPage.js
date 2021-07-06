import React from "react";
import {AddMusicForm} from "./AddMusicForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader"

export const AddMusicPage = () => {
  useProtectedPage();
  return (<div>
    <MenuHeader isGoBack currentPageLabel="Adcionar nova Música" />
<AddMusicForm/>   
 </div>)
};
