import React from 'react';
import { FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {

    const date = new Date();

  return (
    <div className='mt-10 flex flex-col-reverse items-center gap-2 tablet:px-5 py-4 shadow-[0_-1px_4px_rgb(0_0_0_/_0.1)] laptop:flex laptop:flex-row desktop:flex desktop:flex-row items-center justify-between'>

        <div>
             <p>Copyright &copy; {date.getFullYear()} | SB Constructions</p>
        </div>

        <div className='flex items-center gap-5'>

            <a href="https://www.facebook.com/Sivaa.Teja" target="_blank" title="Whatsapp" rel="noreferrer">
                <FaWhatsappSquare style={{"fontSize": "1.5em", "color":"#25D366" }}/>
            </a>

            <a href="https://www.facebook.com/Sivaa.Teja" target="_blank" title="Facebook" rel="noreferrer">
                <FaFacebookSquare style={{"fontSize": "1.5em", "color":"#1877F2" }}/>
            </a>

            <a href="https://www.instagram.com/s.i.v.a_t.e.j.a" target="_blank" title="Instagram" rel="noreferrer">
                <FaInstagramSquare style={{"fontSize": "1.5em", "color":"#E04473" }}/>
            </a>

            <a href="https://www.instagram.com/s.i.v.a_t.e.j.a" target="_blank" title="Twitter" rel="noreferrer">
                <FaTwitterSquare style={{"fontSize": "1.5em", "color":"#1D9BF0" }}/>
            </a>
            
        </div>

    </div>
  )
}

export default Footer