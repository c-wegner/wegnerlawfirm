import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root{
        font-size: 18px;
    }

    *{
        box-sizing: border-box;
        margin:0;
        padding: 0;
    }

    body, html{
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        overflow-x: hidden;
        background-color: dimgrey;
    }
`

export default GlobalStyles;