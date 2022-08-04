import React from 'react'
import { 
    StyledInput,
    IconWrapper,
    Container,
    Tooltip
} from './styles'

export default function Input (
    { 
        disabled = false,
        className, 
        icon, 
        tooltip,
        tooltipOpen,
        ...props 
    }) 
    {
    return <Container>
        {icon && <IconWrapper>
            {icon}
        </IconWrapper>}
        <StyledInput
            disabled={disabled}
            className={className}
            icon={icon}
            {...props}
        />
        {tooltip && <Tooltip className="tooltip" open={tooltipOpen}>{tooltip}</Tooltip>}
    </Container>

}
