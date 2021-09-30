import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -4.25rem;

    div {
        background: var(--shape-principal-color);
        border-radius: 0.25rem;
        padding: 1.5rem 1.25rem 1rem 2rem;
        color: var(--text-title-color);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2.25rem;
            font-weight: 500;
            line-height: 3.375rem;
        }

        &.highlighted-background {
            background: var(--green-color);
            color: var(--shape-principal-color);
        }
    }
`