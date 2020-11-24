import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonStyle = styled.button`
  background: #4F87B7;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #FFF;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  text-decoration: none;
  &:hover {
    background: ${shade(0.2, '#4F87B7')};
  }
`;