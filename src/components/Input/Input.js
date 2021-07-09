import React, { useState } from "react";
import {
  Input,
  Label,
  IconPassword,
  FormControl,
  DivInput,
  MsgError,
  DivFormControl,
} from "./styled";
import { ReactComponent as Senha } from "../../assets/senha.svg";
import { ReactComponent as Senha2 } from "../../assets/senha-2.svg";

export default function FormPropsTextFields({
  label,
  placeholder,
  value,
  onChange,
  type,
  name,
  error,
  required,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <DivFormControl>
      <FormControl className={error ? "Error" : ""}>
        <DivInput>
          <Input
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            id={name}
            value={value}
          />

          {type === "password" && (
            <IconPassword>
              {showPassword ? (
                <Senha2 onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <Senha onClick={() => setShowPassword(!showPassword)} />
              )}
            </IconPassword>
          )}
        </DivInput>
        <Label for={name}>
          {label}
          {required && "*"}
        </Label>
      </FormControl>
      <MsgError>{error}</MsgError>
    </DivFormControl>
  );
}
