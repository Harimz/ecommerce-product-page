import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: hsl(26, 100%, 55%);
    --secondary: hsl(25, 100%, 94%);

    --dark-blue: hsl(220, 13%, 13%);
    --dark-gray-blue: hsl(219, 9%, 45%);
    --gray-blue: hsl(220, 14%, 75%);
    --light-gray-blue: hsl(223, 64%, 98%);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
