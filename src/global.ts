import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: monospace;
        font-size: 24px
    }
    #root {
        margin: 0 auto;
    }
`;
