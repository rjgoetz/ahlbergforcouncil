import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body {
  box-sizing: border-box;
  font-size: ${(props) => props.theme.rootFontSize};
  height: 100%;
  margin: 0;
}

*, &:before, &:after {
    box-sizing: inherit;
  }
}

body {
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: ${(props) => props.theme.lineHeight};
  -webkit-font-smoothing: antialiased;
}   

::placeholder {
  color: #9e9e9e;
}
`;

export default GlobalStyle;
