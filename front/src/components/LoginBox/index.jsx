import React from 'react'
import { AuthCard } from './styles'

export default function  ({ logo, children }) {
  return <AuthCard>
    <div>{logo}</div>
        <div className='internal-card '>
            {children}
        </div>
    </AuthCard>
}