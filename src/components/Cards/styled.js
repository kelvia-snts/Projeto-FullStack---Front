import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  &:hover {
    h2 {
      color: gray;
    }
  }
  h2 {
    font-size: 0.91rem;
    margin-top: 0.5rem;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
  h3{
    margin: 0;
  }
  @media (max-width: 600px) {
    width: 43vw;
  }
`;
