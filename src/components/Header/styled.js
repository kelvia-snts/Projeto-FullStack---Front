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
  color: #020024;
  font-size: 2.3rem;
  letter-spacing: 10px;
`;

export const ContainerIcon = styled.div`
  position: absolute;
  left: 1rem;
  cursor: pointer;
  svg {
    width: 2.40rem;
    position: relative;
    top: 5px;
    
  }
`;