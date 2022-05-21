import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.textColor};
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.grayColor3};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.firstColor)};
    }
  }

  body {
    background: ${props => props.theme.grayColorAlt};
    font: 400 1rem 'Poppins', sans-serif;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  ul, li{
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: ${props => props.theme.maxContent};
    padding: 0 1rem;

  }

`;
