import React from 'react'
import { Button } from './styles'

export default function  ({children, onClick, variant}) {
  return <>
    <Button 
        onClick={onClick} 
        className={`variant-outlined color-primary`}
    >
        <span >
            {children}
        </span>
    </Button>
  </>
} 