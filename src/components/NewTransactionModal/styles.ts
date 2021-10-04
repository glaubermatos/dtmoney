import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 {
        color: var(--text-title-color);
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 600;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        border-radius: 0.25rem;
        background: var(--input-background-color);
        border: 1px solid var(--input-border-color);
        height: 4rem;
        padding: 0 1.5rem;

        font-size: 1rem;
        line-height: 1.5rem;

        &::placeholder {
            color: var(--text-body-color);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type='submit'] {
        width: 100%;
        height: 4rem;
        background: var(--green-color);
        border: 0;
        color: #fff;
        border-radius: 0.25rem;
        margin-top: 1rem;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
	green: '#33CC95',
	red: '#E62E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'};

    display: flex;
    justify-content: center;
    align-items: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')}
    }

    &.active {
        border-color: var(--green-color);
    }

    span {
        margin-left: 1rem;

        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: var(--text-title-color);
    }

    img {
        width: 20px;
        height: 20px;
    }
`