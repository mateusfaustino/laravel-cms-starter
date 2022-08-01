import styled from 'styled-components';
 

export const StyledButton = styled.button`
    border-radius:4px;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    padding: 5px 15px;

    margin:${({margin})=>margin?margin:'0'}; 
    margin-left:${({marginLeft})=>marginLeft?marginLeft:'0'};
    margin-right:${({marginRight})=>marginRight?marginRight:'0'};
    margin-top:${({marginTop})=>marginTop?marginTop:'0'};
    margin-bottom${({marginBottom})=>marginBottom?marginBottom:'0'};

    &.variant-outlined{ 
     
        &.color-primary{
            color: #1976d2;
            border: 1px solid rgba(25, 118, 210, 0.5);
        }
        
        &.color-secondary{
            
        }

        &.color-light{
            color: #fff;
            border: 1px solid #fff;
        }
    }

    &.variant-contained{
        &&.color-primary{
            background:#0277BD;
            color:#fff;
        }
    
        &&.color-secondary{
    
        }

        &.color-light{
            color: #1976d2;;
            background: #fff;
        }
    }
    &.disabled{

    }

    &.disableElevation{
        
    }

    &.disableFocusRipple{

    }

    &.disableRipple{
        
    }

    &.fullWidth{

    }

    &.size-large{

    }

    &.size-medium{

    }

    &.size-small{

    }

    

    

    &.variant-text{
        &.color-primary{

        }
    
        &.color-secondary{
    
        }
    }

    span{
        width: 100%;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        
    }
`;