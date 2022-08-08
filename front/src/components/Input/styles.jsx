import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: all 0.5s ease;

`
export const Tooltip = styled.span`
    position: absolute;
    left: calc(100% + 15px);
    z-index: 3;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;

    ${({open})=>open?`
        opacity: 1;
    `:''}
`
export const IconWrapper = styled.span`
    position:absolute;
    z-index: 10;
    left: 0;
    transform: translateX(calc(25px - 50%))translateY(calc(3px));
    transition: all 0.5s ease;
`
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

    &:hover {
        background-color: #fff;
    }
    ${({icon})=>icon?`
        padding: 0 20px 0 50px;
    `:''}
`;