import React from "react";
import {SignupForm} from "./SignupForm"

export const SignupPage = ({ setRightButtonText }) => {
  return(
    <div>
      <SignupForm setRightButtonText={setRightButtonText}/>
    </div>
  )
};
