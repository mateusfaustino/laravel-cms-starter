import styled from 'styled-components';

export const NavList = styled.ul`
    margin-top: 20px;
    height: 100%;
`
export const StyledSidebar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 78px;
    background: #11101D;
    padding: 6px 14px;
    z-index: 99;
    transition: all 0.5s ease;

    
    i{
        color: #fff;
        height: 60px;
        min-width: 50px;
        font-size: 28px;
        text-align: center;
        line-height: 60px;
    }

    input{
        font-size: 15px;
        color: #FFF;
        font-weight: 400;
        outline: none;
        height: 50px;
        width: 100%;
        width: 50px;
        border: none;
        border-radius: 12px;
        transition: all 0.5s ease;
        background: #1d1b31;
    }
    li{
        position: relative;
        margin: 8px 0;
        list-style: none;
    }
    .bx-search{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        font-size: 22px;
        background: #1d1b31;
        color: #FFF;
    }
    
    .bx-search:hover{
        background: #FFF;
        color: #11101d;
    }
    ${({open})=>open?`
    
    width: 250px;
    input{
        padding: 0 20px 0 50px;
        width: 100%;
    }
    .bx-search:hover{
        background: #1d1b31;
        color: #FFF;
    }
    `:''}
    `
export const LogoDetails = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content:space-between;
   
    .icon{
        opacity: 0;
        transition: all 0.5s ease;
    }

    .logo_name{
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        opacity: 0;
        transition: all 0.5s ease;
    }

    .icon,
    .logo_name{
        opacity: 1;
    }
    
    ${({open})=>open?`
        color: #fff;
        height: 60px;
        min-width: 50px;
        font-size: 28px;
        text-align: center;
        line-height: 60px;
    `:''}

    #btn{
        color:#fff;
        cursor:pointer;
    }
    

`
export const Container = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins" , sans-serif;
        }

        
        

        .sidebar li{
        position: relative;
        margin: 8px 0;
        list-style: none;
        }
        .sidebar li .tooltip{
        position: absolute;
        top: -20px;
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
        }
        .sidebar li:hover .tooltip{
        opacity: 1;
        pointer-events: auto;
        transition: all 0.4s ease;
        top: 50%;
        transform: translateY(-50%);
        }
        .sidebar.open li .tooltip{
        display: none;
        }
        .sidebar 
        .sidebar.open 
        .sidebar 
        .sidebar.open 
        .sidebar 
        .sidebar li a{
        display: flex;
        height: 100%;
        width: 100%;
        border-radius: 12px;
        align-items: center;
        text-decoration: none;
        transition: all 0.4s ease;
        background: #11101D;
        }
        .sidebar li a:hover{
        background: #FFF;
        }
        .sidebar li a .links_name{
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: 0.4s;
        }
        .sidebar.open li a .links_name{
        opacity: 1;
        pointer-events: auto;
        }
        .sidebar li a:hover .links_name,
        .sidebar li a:hover i{
        transition: all 0.5s ease;
        color: #11101D;
        }
        .sidebar li i{
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        border-radius: 12px;
        }
        .sidebar li.profile{
        position: fixed;
        height: 60px;
        width: 78px;
        left: 0;
        bottom: -8px;
        padding: 10px 14px;
        background: #1d1b31;
        transition: all 0.5s ease;
        overflow: hidden;
        }
        .sidebar.open li.profile{
        width: 250px;
        }
        .sidebar li .profile-details{
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        }
        .sidebar li img{
        height: 45px;
        width: 45px;
        object-fit: cover;
        border-radius: 6px;
        margin-right: 10px;
        }
        .sidebar li.profile .name,
        .sidebar li.profile .job{
        font-size: 15px;
        font-weight: 400;
        color: #fff;
        white-space: nowrap;
        }
        .sidebar li.profile .job{
        font-size: 12px;
        }
        .sidebar .profile #log_out{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: #1d1b31;
        width: 100%;
        height: 60px;
        line-height: 60px;
        border-radius: 0px;
        transition: all 0.5s ease;
        }
        .sidebar.open .profile #log_out{
        width: 50px;
        background: none;
        }
        .home-section{
        position: relative;
        background: #E4E9F7;
        min-height: 100vh;
        top: 0;
        left: 78px;
        width: calc(100% - 78px);
        transition: all 0.5s ease;
        z-index: 2;
        }
        .sidebar.open ~ .home-section{
        left: 250px;
        width: calc(100% - 250px);
        }
        .home-section .text{
        display: inline-block;
        color: #11101d;
        font-size: 25px;
        font-weight: 500;
        margin: 18px
        }
        @media (max-width: 420px) {
        .sidebar li .tooltip{
            display: none;
        }
        }

`;