import React from "react";
import MenuHeader from "../components/Header/MenuHeader";
import { useRequestData } from "../hooks/useRequestData";
import { useParams } from "react-router-dom";

export const Albums = () => {
  const params = useParams();

  const albums = useRequestData(`/user/profile/${params.id}`, [])
  const AlbumsComponent = albums.map((album) => {
    return album.name
  })

  console.log(AlbumsComponent);
  
  return (
    <>
      <MenuHeader isGoBack currentPageLabel="Álbums" />
      
    </>
  );
};
