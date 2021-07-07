import React from "react";
import {SignupForm} from "./SignupForm";
import MenuHeader from "../../components/Header/MenuHeader";

export const SignupPage = () => {
  return(
    <div>
      <MenuHeader isGoBack  />
      <SignupForm/>
    </div>
  )
};
