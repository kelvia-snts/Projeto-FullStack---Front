import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 25vh;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    p {
      color: gray;
    }
  }
  p {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
`;
