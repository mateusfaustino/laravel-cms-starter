import React from 'react'
import { Button } from './styles'

import Link from '../Link'

export default function  (
        {
            children, onClick, variant, href,color,
            margin, marginLeft, marginright, margintop, marginBottom,
            ...otherProps

        }){
    return<>
        <Customlink href={href}>
            <Button 
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
                    {children}
                </span>
            </Button>
        </Customlink> 
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