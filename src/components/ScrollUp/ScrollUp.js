import React,{useContext} from 'react';
import { BsArrowUpShort } from "react-icons/bs";

import Context from '../utils/Context';

const ScrollUp = () => {

    const {active, setActive, setMobileMenu} = useContext(Context);

    const scrollToTop = () => {
        window.scrollTo(0,0);
        setActive("home")
        setMobileMenu(false);
    }

    window.addEventListener("scroll", ()=>{

        const scrollupelem = document.getElementById("scrollup");

        if(window.scrollY >= 300){
            scrollupelem?.classList?.remove("hidden");
        }else{
            scrollupelem?.classList?.add("hidden");
        }
    })

  return (
    <div id="scrollup" className='hidden'>
        <button className='bg-[#F7BB05] fixed bottom-16 right-6 rounded-full p-1 tablet:right-8 laptop:right-10' title='Back to Top' onClick={() => scrollToTop()}>
            <BsArrowUpShort style={{"fontSize":"40px", "color":"white"}}/>
        </button>
    </div>
  )
}

export default ScrollUp