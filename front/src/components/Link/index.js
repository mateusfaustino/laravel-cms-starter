import React from 'react'
import { A } from './styles'
import Link from 'next/link'
export default function  ({href,children, className}) {

return (
    <Link href={href}>
        <A className={className}>
            {children}
        </A>
    </Link>
)}