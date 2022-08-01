import React from 'react'
import { StyledButton } from './styles'

import Link from '../Link'

export default function Button (
        {
            children, onClick, variant, href,color,
            margin, marginLeft, marginright, margintop, marginBottom,
            ...otherProps

        }){
    return<>
            <StyledButton 
                onClick={onClick} 
                className={`
                ${variant?'variant-'+variant:'variant-contained'} 
                    ${color?'color-'+color:'color-primary'}
                    
                    `}
                margin={margin}
                marginLeft={marginLeft}
                marginright={marginright}
                margintop={margintop}
                marginBottom={marginBottom}
                {...otherProps}
            >
                <span >
                    <Customlink href={href}>
                        {children}
                    </Customlink> 
                </span>
            </StyledButton>
    </> 
  
} 

function Customlink({children, href}){
    return href?<>
        <Link href={href}>
            {children}
        </Link>
    </>
    :<>
        {children}
    </>
}