import { CSSProperties } from "react";
import styled from "styled-components";

interface ItemProps {
  background: CSSProperties['color'];
}

export const ItemContainer = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 50%;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    width: 30px;
    height: 30px;
    background-color: ${props => props.background};
  }

  span{
    color: ${props => props.theme["base-text"]};
  }
  
`