import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  padding: 6.25rem 0;
  gap: 56px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 80px;
  
  h1{
    font-size: 48px;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
  }
`

export const Itens = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    width: 30px;
    height: 30px;
    background-color: ${props => props.theme.primary};
  }
  
`