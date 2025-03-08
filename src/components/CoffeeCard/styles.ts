import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${propos => propos.theme["base-card"]};
  max-width: 256px;
  min-height: 310px;
  margin-top: 54px;
  padding: 20px;

  border-top-left-radius: 4px;
  border-top-right-radius: 50px;

  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 50px;

  img {
    margin-top: -50px;
  }

  h2 {
    font-size: 20px;
    font-family: 'Baloo 2';
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 8px;
  }
  
  p {
    font-size: 14px;
    text-align: center;
    color: ${props => props.theme["base-label"]};
    margin-bottom: 33px;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }  
`

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 4px 8px;
  color: ${props => props.theme["primary-dark"]};
  background: ${props => props.theme["primary-light"]};
  border-radius: 10px;
  margin-top: 12px;
  margin-bottom: 16px;
`

export const ValueCoffee = styled.span`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 25px;
  color: ${props => props.theme["base-text"]};

  span {
    font-size: 16px; 
    font-weight: 500;
    margin-right: 5px;
  }
`

export const ButtonCart = styled.button`
    border: none;
    background-color: ${props => props.theme["secondary-dark"]};
    padding: 5px;
    border-radius: 4px;
`