import styled from 'styled-components';

export const AuthCard = styled.div`
    display: flex;
    min-height: 100vh;
    padding-top: 1.5rem;
    /* background-color: rgb(243 244 246 / 1); */
    background-color: #0277BD;
    align-items: center;
    flex-direction: column;
    overflow:hidden;

    .internal-card{
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        background-color: #fff;
        overflow: hidden;
        width: 100%;
        margin-top: 1.5rem;
        border-radius: 0.5rem;
        max-width: 28rem;
        --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
`;