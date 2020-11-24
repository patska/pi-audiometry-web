import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  padding: 0 8px;
  color: #4F87B7;
  border: 2px solid #4F87B7;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && css`
    border-color: #c53030;
    color: #c53030;
  `}

  ${props => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  ${props => props.isFilled && css`
    color: #ff9000;
  `}
  
  input {
    flex: 1;
    background: transparent;
    color: black;
    padding-left: 5px;
    border: 0;
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  
  height: 20px;
  margin-left: 16px;
  
  svg {
    margin: 0;
  }
`;