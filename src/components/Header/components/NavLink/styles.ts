import styled from 'styled-components';

interface NavLinkProps {
  isActive?: boolean;
}

export const NavLinkContainer = styled.li<NavLinkProps>`
  position: relative;
  padding: 1rem;
  border-radius: ${props => props.theme.radius};
  svg {
    fill: ${props => (props.isActive ? props.theme.firstColor : props.theme.grayColor2)};
  }
  &:hover {
    background-color: ${props => props.theme.grayColorAlt};
  }
  &::after {
    content: '';
    /* display: ${props => (props.isActive ? 'block' : 'none')}; */
    display: none;
    position: absolute;
    width: 140%;
    left: -20%;
    height: 5px;
    background: ${props => props.theme.firstColor};
    border-radius: 5px 5px 0px 0px;
    bottom: 0%;
  }
  a {
    transition: 0.5s;
    font-weight: ${props => props.theme.bigFontWidth};
    color: ${props => (props.isActive ? props.theme.firstColor : props.theme.grayColor2)};
    /* &::after {
      content: '';
      display: ${props => (props.isActive ? 'block' : 'none')};
      position: absolute;
      width: 140%;
      left: -20%;
      height: 5px;
      background: ${props => props.theme.firstColor};
      border-radius: 5px 5px 0px 0px;
      bottom: -95%;
    } */
  }
`;
