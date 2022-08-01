import React from 'react'
import { StyledInput } from './styles'

export default function Input ({ disabled = false, className, ...props }) {
    return <StyledInput
        disabled={disabled}
        className={`${className}`}
        {...props}
    />

}
