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
    color: ${props => props.theme["base-title"]};
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};
  }
`

export const Itens = styled.div`
  display: flex;
  flex-wrap: wrap;
`