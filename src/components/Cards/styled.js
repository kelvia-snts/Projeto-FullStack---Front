import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-left: 25px;
  svg{
    width: 30px;
    margin-right: -48px;
  }
` 

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 8vh;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 10px;
  &:hover {
    h3 {
      color: gray;
    }
  }
  h3 {
    font-size: 0.910rem;
    margin-top: 0.5rem;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
`
