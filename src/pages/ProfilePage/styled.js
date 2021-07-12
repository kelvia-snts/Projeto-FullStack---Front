import styled from "styled-components"

export const FeedContainer = styled.section`
img{
  width: 100px;
  position: fixed; 
  margin-top: -15vh;
  margin-left: 4vw;
}
    >svg{
      width: 60px;
      position: fixed;
      margin-top: -12vh;
      margin-left: 87vw;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
    }
    @media (max-width: 600px) {
      img{
        width: 50px;
        margin-top: -7vh;
      }
      >svg{
        width: 30px;
        margin-top: -6vh;
      }
    }
`
export const MusicsContainer = styled.nav`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: flex;
    margin: 0;
  }
`