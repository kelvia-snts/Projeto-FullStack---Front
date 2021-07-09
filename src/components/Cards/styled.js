import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 25px;
  svg {
    width: 40px;
    margin-right: -48px;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 8vh;
  margin-bottom: 10px;
  cursor: pointer;
  border: 2px solid darkgray;
  border-radius: 10px;
  &:hover {
    h3 {
      color: gray;
    }
  }
  h3 {
    font-size: 0.91rem;
    margin-top: 0.5rem;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
  @media (max-width: 600px) {
    width: 43vw;
  }
`;
