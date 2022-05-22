import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  min-width: 105px;
  padding: 0.3rem 0.9rem;
  background-color: ${props => props.theme.firstColor};
  font-size: ${props => props.theme.h1FontSize};
  color: ${props => lighten(0.29, props.theme.firstColor)};
  border-radius: 5px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  :hover {
    background-color: ${props => lighten(0.08, props.theme.firstColor)};
  }
  svg {
    width: 25px;
    fill: ${props => lighten(0.29, props.theme.firstColor)};
  }
`;
