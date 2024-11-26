import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    min-height: 100vh;
}

#root {
    width: 100%;
    min-height: 100vh;
}
`;

export default GlobalStyle;