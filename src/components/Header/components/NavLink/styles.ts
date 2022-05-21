import styled from 'styled-components';

interface NavLinkProps {
  isActive?: boolean;
}

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    position: relative;
    transition: 0.5s;
    font-weight: ${props => props.theme.bigFontWidth};
    color: ${props => (props.isActive ? props.theme.firstColor : props.theme.textColor)};
    &::after {
      content: '';
      display: ${props => (props.isActive ? 'block' : 'none')};
      position: absolute;
      width: 140%;
      left: -20%;
      height: 5px;
      background: ${props => props.theme.firstColor};
      border-radius: 5px 5px 0px 0px;
      bottom: -95%;
    }
  }
`;
