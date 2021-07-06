import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 2.75rem;
  text-transform: capitalize;
  font-family: Roboto;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  -webkit-backdrop-filter: blur(110px);
  backdrop-filter: blur(10px);
  box-shadow: 0 3px 5px 15px rgba(0, 0, 0, 0.25);
  background-color: white;
  border-top: 1px solid black;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #020024;
`;

export const ContainerIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 0.625rem;
  cursor: pointer;
  svg {
    width: 1.44rem;
  }
`;