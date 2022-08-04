import React, {useEffect,useState} from 'react'
import { Container,
     StyledSidebar,
     LogoDetails,
     NavList,
} from './styles'
import Logo from '@/components/ApplicationLogo'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Input from '../Input';
export default function Sidebar ({children}) {
    const [open, setOpen] = useState(true)
    const [searchFocus, setSearchFocus] = useState(false)
    const [tooltipOpen, setTooltipOpen] = useState('')
    useEffect(() => {
        // let sidebar = document.querySelector(".sidebar");
        // let closeBtn = document.querySelector("#btn");
        // let searchBtn = document.querySelector(".bx-search");

        // closeBtn.addEventListener("click", ()=>{
        //     sidebar.classList.toggle("open");
        //     menuBtnChange();//calling the function(optional)
        // });

        // searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
        //     sidebar.classList.toggle("open");
        //     menuBtnChange(); //calling the function(optional)
        // });

        // // following are the code to change sidebar button(optional)
        // function menuBtnChange() {
        //     if(sidebar.classList.contains("open")){
        //         closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        //     }else {
        //         closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
        //     }
        // }
    }, []);
    function handleSearchFocus(){
        setSearchFocus(true)
        if (!open){
            setOpen(true)
        }
    }
    function handleSearchIconClick(){
        if(open){

        }else{
            setOpen(true)
        }
    }

    function handleSearchMouseEnter(){
        setSearchFocus(true)
        if(!open){
            setTooltipOpen('search')
        }
    }
    
    function handleSearchMouseLeave(){
        setSearchFocus(false)
        setTooltipOpen('')
    }
    return <>
        <StyledSidebar  open={open} searchFocus={searchFocus}>
            {/* <section className="home-section"> */}
            {/* </section> */}
            <LogoDetails className="logo-details">
                <Logo width='40' ></Logo>
                {/* <div class="logo_name">Mateus</div> */}
                <MenuIcon id="btn" onClick={()=>setOpen(!open)}></MenuIcon>
            </LogoDetails>
            <NavList>
                <li>
                    <Input 
                        type="text" 
                        className='search-input' 
                        placeholder="Search..."
                        onFocus={()=>handleSearchFocus()}
                        onBlur={()=>setSearchFocus(false)}
                        onMouseEnter={()=>handleSearchMouseEnter()}
                        onMouseLeave={()=>handleSearchMouseLeave()}
                        tooltipOpen={(tooltipOpen=='search')}
                        tooltip='Search'
                        icon={
                            <SearchIcon 
                                className='search-icon'
                                onClick={()=>handleSearchIconClick()}
                                onMouseEnter={()=>handleSearchMouseEnter()}
                                onMouseLeave={()=>handleSearchMouseLeave()}
                            />
                        }
                    />
                <span>
                </span>
                </li>
                <li>
                    <a href="#">
                    <i class='bx bx-grid-alt'></i>
                    <span class="links_name">Dashboard</span>
                    </a>
                    <span class="tooltip">Dashboard</span>
                </li>
                <li>
                <a href="#">
                    <i class='bx bx-user' ></i>
                    <span class="links_name">User</span>
                </a>
                <span class="tooltip">User</span>
                </li>
                <li>
                <a href="#">
                    <i class='bx bx-chat' ></i>
                    <span class="links_name">Messages</span>
                </a>
                <span class="tooltip">Messages</span>
                </li>
                <li>
                <a href="#">
                    <i class='bx bx-pie-chart-alt-2' ></i>
                    <span class="links_name">Analytics</span>
                </a>
                <span class="tooltip">Analytics</span>
                </li>
                <li>
                <a href="#">
                    <i class='bx bx-folder' ></i>
                    <span class="links_name">File Manager</span>
                </a>
                <span class="tooltip">Files</span>
                </li>
                <li>
                <a href="#">
                    <i class='bx bx-cart-alt' ></i>
                    <span class="links_name">Order</span>
                </a>
                <span class="tooltip">Order</span>
                </li>
                <li>
                <a href="#">
                    <i class='bx bx-heart' ></i>
                    <span class="links_name">Saved</span>
                </a>
                <span class="tooltip">Saved</span>
                </li>
                <li>
                <a href="#">
                    <i class='bx bx-cog' ></i>
                    <span class="links_name">Setting</span>
                </a>
                <span class="tooltip">Setting</span>
                </li>
                <li class="profile">
                    <div class="profile-details">
                    {/* <!--<img src="profile.jpg" alt="profileImg">--> */}
                    <div class="name_job">
                        <div class="name">Prem Shahi</div>
                        <div class="job">Web designer</div>
                    </div>
                    </div>
                    <i class='bx bx-log-out' id="log_out" ></i>
                </li>
                </NavList>
        </StyledSidebar>
                {children}
    </>
}