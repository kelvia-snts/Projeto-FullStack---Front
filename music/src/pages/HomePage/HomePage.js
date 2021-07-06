import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/Header/MenuHeader"

export const HomePage = () => {
  useProtectedPage();
  return (
    
  <div>
    <MenuHeader currentPageLabel="Music" />
    </div>
  );
};
