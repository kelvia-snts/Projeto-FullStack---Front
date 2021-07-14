import styled from "styled-components"

export const Component = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    details{
    display: flex;
    margin-top: -100px;
    text-align: center;
    border-bottom: 1px solid white;
    >embed{
      margin: auto;
    }
  }
`

export const MusicsContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: flex;
    margin: 0;
  }
`

export const Svg = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  svg{
    cursor: pointer;
  }
`

export const Div = styled.div`
  display: flex;
  svg{
    cursor: pointer;
  }
`