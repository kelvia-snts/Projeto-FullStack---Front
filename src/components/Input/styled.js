import styled from "styled-components";
const colorRedTheme = "#e02020";
export const Input = styled.input`
  width: 100%;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  width: calc(100% - 3rem);
  font-size: 1rem;
  letter-spacing: -0.39px;
`;
export const Label = styled.label`
  position: absolute;
  background-color:  #b8b8b8 ;
  border-radius: 2px;
  bottom: 2.75rem;
  margin: 0 0 0 1rem;
  width: 3.875rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 0.95rem;
  letter-spacing: -0.29px;
  color: white;
  padding: 0 0.25rem;
`;
export const IconPassword = styled.div`
  cursor: pointer;
`;
export const FormControl = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  position: relative;
  height: 3.5rem;
  background-color: white;
`;
export const DivInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 0rem 0 1rem;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 1rem 0 0;
  }
`;

export const MsgError = styled.span`
  color: ${colorRedTheme};
  font-family: Roboto;
  font-size: 0.75rem;
  margin: 0.313rem 0 0 1rem;
  letter-spacing: -0.39px;
`;
export const DivFormControl = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .Error {
    border: solid 1px ${colorRedTheme};
  }
  .Error label {
    color: ${colorRedTheme};
  }
`;