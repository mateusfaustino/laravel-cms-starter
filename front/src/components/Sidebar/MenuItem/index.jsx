import React from 'react'
import Link from '@/components/Link'
import { 
    Container,
    IconWrapper,
    Tooltip,
    tooltipOpen,
    Text
} from './styles'

export default function MenuItem ({children,icon, href, tooltip, open, selected}) {
  return <Link href={href}>
    <Container>
        {icon && <IconWrapper open={open}>
            {icon}
        </IconWrapper>}
        <Text open={open} selected={selected}>
            {children}
        </Text>
        {tooltip && <Tooltip className="tooltip" open={tooltipOpen}>{tooltip}</Tooltip>}

    </Container>
  </Link>
}