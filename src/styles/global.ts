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

        --input-background-color: #E7E9EE;
        --input-border-color: #D7D7D7;

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

    .react-modal-overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background: rgba(0, 0, 0, 0.5);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background-color);
        padding: 4rem 3rem;
        border-radius: 0.25rem;
        position: relative;
    }

    .react-modal-close {
        background: transparent;
        border: 0;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`