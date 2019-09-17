import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,800&display=swap');
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        padding:0;
        margin:0;
        background: #f2f2f2;
    }
    h1, h2, h3, h4, h5, h6{
        margin:0;
        line-height: 2;
        word-break: break-word;
        font-size: 12px;
        font-weight: 100;
        color: #1f3a52;
    }
`;

export default GlobalStyle;
