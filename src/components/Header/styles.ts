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

export const ButtonCart = styled.button`
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme["primary-light"]};
  position: relative;

  span {
    position: absolute;
    top: -10px;
    right: -8px;
    background-color: ${props => props.theme["primary-dark"]};
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 999px;
  }
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