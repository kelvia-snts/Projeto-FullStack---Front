import styled from "styled-components";

export const FeedContainer = styled.section`
 display: flex;
  details{
    display: flex;
    margin-top: -100px;
    text-align: center;
    >embed{
      margin: auto;
    }
  }
`;
export const MusicsContainer = styled.nav`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Div = styled.div`
  >svg{
    position: relative;
    left: 94vw;
    top: 5px;
    cursor: pointer;
  }
`

export const Section = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    font-size: 10px;
    font-weight: bold;
  }
`;

export const ProfileContainer = styled.section`
display: flex;
justify-content: center;
  
` 
