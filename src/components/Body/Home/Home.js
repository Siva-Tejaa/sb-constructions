import React,{useContext} from 'react';

import Context from '../../utils/Context';

const Home = () => {

  const {active, setActive} = useContext(Context);

  const scrollToTarget = (targetID) => {

    document.getElementById(targetID).scrollIntoView();

    setActive(targetID);
}

  return (
    <div className='bg-[url(https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/SBConstructions%20Background%20Image.png)] h-[25rem] bg-cover bg-center flex flex-col items-center justify-center p-5 text-white gap-2 desktop:h-[30rem]' id="home">
      {/* <img src="https://www.propacademy.co.za/v1/wp-content/uploads/Real-Estate-Courses-South-Africa-2.jpg" className='w-[100%]'/> */}

            <p className='text-[0.8rem] tablet:text-[0.9rem]'>Way In Building & Civil Construction</p> 
            <p className='font-extrabold text-3xl text-center border-solid tablet:text-4xl'>BUILD YOUR <span className='text-[#ffc413]'>DREAM</span></p>
            <div>
            <p className='text-[0.8rem] text-center tablet:text-[0.9rem]'>We Specialize in commercial, industrial, public infrastructure, housing</p>
            <p className='text-[0.8rem] text-center tablet:text-[0.9rem]'>construction and supply, installation and maintenance.</p>
            </div>
            <button className='bg-[#F7BB05] px-5 py-2 rounded-sm m-2' onClick={() => scrollToTarget("contact")}>Get a Quote</button>

    </div>
  )
}

export default Home