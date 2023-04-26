import React from 'react';
import { IoCall, IoMail } from "react-icons/io5";

const InfoBar = () => {
  return (
    <div className='bg-[#F7BB05] text-[#3E3E3E] text-sm p-[6px] flex items-center justify-between'>

        <p className='text-xs whitespace-nowrap text-ellipsis overflow-hidden tablet:text-xs laptop:text-xs desktop:text-sm'>Delivering the highest degree of safety, quality and efficiency to your project.</p>
        
        <div className='hidden tablet:hidden laptop:flex items-center justify-center gap-5 text-xs desktop:text-sm flex items-center justify-center gap-5'>

            <span className='flex items-center justify-center gap-1'>
                <IoCall/>
                <span>7981203040</span>
            </span>

            <span className='flex items-center justify-center gap-1'>
                <IoMail/>
                <span>asivateja1999@gmail.com</span>
            </span>    

        </div>
    </div>
  )
}

export default InfoBar