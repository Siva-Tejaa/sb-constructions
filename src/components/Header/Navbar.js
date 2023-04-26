import React,{useContext} from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import Context from '../utils/Context';

const Navbar = () => {

    const {active, setActive, mobileMenu, setMobileMenu} = useContext(Context);

    const scrollToTarget = (targetID) => {

        document.getElementById(targetID).scrollIntoView({ "block": 'start'});

        setActive(targetID);
        setMobileMenu(false);
    }  

    const activeCSS = "underline underline-offset-[3px] decoration-[#F7BB05] font-normal";

  return (
    <div className="shadow-md">
    <div className='flex items-center justify-between'>

        <img src="https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/SB%20Constructions.png" alt="SB Constructions Logo" className='w-72 tablet:w-80 laptop:w-80 desktop:w-80'/>

        <div className='hidden laptop:block desktop:block'>
            <span className='laptop:pr-4 flex items-center laptop:gap-8 desktop:pr-10 gap-10'>
                <div className={`cursor-pointer ${active === "home" && activeCSS}`} onClick={() => scrollToTarget("home")}>HOME</div>
                <div className={`cursor-pointer ${active === "about" && activeCSS}` } onClick={() => scrollToTarget("about")}>ABOUT</div>
                <div className={`cursor-pointer ${active === "services" && activeCSS}` } onClick={() => scrollToTarget("services")}>SERVICES</div>
                <div className={`cursor-pointer ${active === "projects" && activeCSS}` } onClick={() => scrollToTarget("projects")}>PROJECTS</div>
                <div className={`cursor-pointer ${active === "contact" && activeCSS}` } onClick={() => scrollToTarget("contact")}>CONTACT</div>
            </span>
        </div>

        <div className='laptop:hidden desktop:hidden'>
            <button className='mr-5' onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <RxCross1 style={{"fontSize": "1.8em" }}/> : <RxHamburgerMenu style={{"fontSize": "1.8em" }}/> }
            </button>
        </div>

    </div>

    <div className={mobileMenu ? 'laptop:hidden desktop:hidden' : "hidden"}>
            <span className='py-6 flex flex-col items-center justify-center gap-6'>
                <div className={`cursor-pointer ${active === "home" && activeCSS}`} onClick={() => scrollToTarget("home")}>HOME</div>
                <div className={`cursor-pointer ${active === "about" && activeCSS}` } onClick={() => scrollToTarget("about")}>ABOUT</div>
                <div className={`cursor-pointer ${active === "services" && activeCSS}` } onClick={() => scrollToTarget("services")}>SERVICES</div>
                <div className={`cursor-pointer ${active === "projects" && activeCSS}` } onClick={() => scrollToTarget("projects")}>PROJECTS</div>
                <div className={`cursor-pointer ${active === "contact" && activeCSS}` } onClick={() => scrollToTarget("contact")}>CONTACT</div>
            </span>
        </div>

    </div>
  )
}

export default Navbar