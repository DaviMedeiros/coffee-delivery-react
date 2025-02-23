import styled from "styled-components";

export const HeaderContainer = styled.nav`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 1rem;
  }
`

export const Cart = styled.button`
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme["primary-light"]};
`

export const LocationButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme["secondary-light"]};
  color: ${props => props.theme["secondary"]};
  font-size: 16px;
`