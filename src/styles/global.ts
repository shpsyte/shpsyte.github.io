import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --left-menu-bg: #282c34;
  --border-bg: #1976d2;
  --title-color: #545e6f;
  --body-color: #515151;
}
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   body {
     background: var(--background);
     -webkit-font-smoothing: antialiased;
     color: var(--body-color);
     line-height: 1.5;
   }

   body, input, textarea, button {
     font-family: Roboto, sans-serif;
     font-weight: 400;
    }
    
   h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
      color: var(--title-color);
      
   }

   html {
     @media (max-width: 1080px) {
       font-size: 93.75%;
     }

     @media (max-width: 720px) {
       font-size: 87.5%;
     }
   }
   

   button {
     cursor: pointer;
   }

   [disable] {
    opacity : 0.6;
    cursor: not-allowed;
   }
`