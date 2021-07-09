import React from "react";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import MenuHeader from "../../components/Header/MenuHeader";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const ProfilePage = () => {
  useProtectedPage();
  const params = useParams();
  const profile = useRequestData(`/user/profile/${params.id}`, {});

  return (
    <div>
      <MenuHeader isGoBack currentPageLabel="Perfil" />
      <h3>álbuns</h3>
    </div>
  );
};
