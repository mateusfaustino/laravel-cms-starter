import styled from 'styled-components';

export const StyledInput = styled.input`
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));

    border-radius: 0.375rem;
    width: 100%;
    display: block;
    margin-top: 0.25rem;

    &:focus {
        background-color: rgb(232, 240, 254);
        border: 1px solid #0277BD;
    }

`;