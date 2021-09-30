import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        color: var(--text-body-color);
        
        thead tr th {
            padding: 0.75rem 2rem;
            text-align: left;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.25rem;
        }
        
        tbody tr td {
            background: var(--shape-principal-color);
            border-radius: 0.25rem;
            padding: 1.25rem 2rem;

            &:first-child {
                color: var(--text-title-color);
            }
            
            &.deposit {
                color: var(--green-color);
            }
            &.withdraw {//retirada
                color: var(--red-color);
            }
        }
    }
`