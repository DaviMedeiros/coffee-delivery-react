import styled from "styled-components";

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["base-button"]};
  padding: 5px; 
  border-radius: 4px;
  gap: 5px;

  button{
    padding: auto 2px;
    background-color: transparent;
    border: none;
    color: ${props => props.theme["secondary"]};
    font-size: 20px;

    &:hover{
      color: ${props => props.theme["secondary-dark"]};
    }
  }


  input {
    padding: 5px;
    font-size: 18px;
    background-color: transparent;
    color: ${props => props.theme["base-text"]};
    border: none;
    max-width: 30px;
    text-align: center;
  }
`