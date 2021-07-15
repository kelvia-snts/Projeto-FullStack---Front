import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  &:hover {
    h2 {
      color: gray;
    }
  }
  h3 {
    font-size: 1.21rem;
    margin-top: 0.5rem;
    max-width: 90%;
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
