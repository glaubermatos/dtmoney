import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #F2F0F5;
		--red-color: #e52e4d;
        --green-color: #33CC95;
		--blue-color: #5429cc;

		--blue-light-color: #6933ff;

		--text-title-color: #363f5f;
		--text-body-color: #969cb3;

		--shape-principal-color: #FFFFFF;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background-color);
        -webkit-font-smoothing: antialiazed;
    }
    
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`