import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
`;
export const IconWrapper = styled.span`
    svg{
        fill:#fff;
    }
    transition: all 0.5s ease;
    transform:translateX(calc(25px - 50%));
    ${({open})=>open?`
    transform:translateX(0);
    `:''}
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
export const Text = styled.div`
    opacity: 0;
    ${({open})=>open?`
    opacity: 1;
    `:
    `
    `}

    ${({selected})=>selected?`
    color:#fff;
    `:'color:#fff;'}

    transition: all 0.5s ease;
` 

