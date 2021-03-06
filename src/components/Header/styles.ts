import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue-color);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 8.25rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        font-size: 1rem;
        color: var(--shape-principal-color);
        background: var(--blue-light-color);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        line-height: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`