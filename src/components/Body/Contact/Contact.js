import React,{useState} from 'react';
import { MdLocationOn, MdCall} from "react-icons/md";
import { IoIosMail } from "react-icons/io";

import Swal from 'sweetalert2'

// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'

const Contact = () => {

  const initialValues = {
    name:"",
    email:"",
    subject:"",
    message:""
  }

  const[userData, setUserData] = useState(initialValues);

  const{name, email, subject, message} = userData;

  const changeHandler = (e) => {
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    if(userData.name.trim() === "" || userData.email.trim() === "" || userData.subject.trim() === "" || userData.message.trim() === ""){
      Swal.fire({
        title: 'All Fields are Required',
        confirmButtonColor:"#F7BB05"
      })
    }else{
      console.log(userData);
      setUserData(initialValues);
      Swal.fire({
        title: 'Success',
        text: 'Your Details Recieved Successfully. We Will contact you soon',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor:"#F7BB05"
      })
    }

  }

  return (
    <div id="contact" className='m-3'>
        <p className='text-3xl font-semibold text-center mt-12'>Contact</p>
        <p className='text-sm text-center mb-12 text-gray-400'>Your Enquiry, Our Service</p>

        <div className='flex items-center justify-around flex-wrap gap-2'>
          <div className='flex items-center flex-col justify-center'>
            <MdLocationOn style={{"fontSize": "1.8em", "color":"grey" }}/>
            <p className='m-1 font-bold text-lg'>Our Office</p>
            <p className='text-sm'>Daikas Road, Nellore</p>
          </div>
          <div className='flex items-center flex-col justify-center'>
            <MdCall style={{"fontSize": "1.8em","color":"grey" }}/>
            <p className='m-1 font-bold text-lg'>Phone Number</p>
            <p className='text-sm'>+91 7981203040</p>
          </div>
          <div className='flex items-center flex-col justify-center'>
            <IoIosMail style={{"fontSize": "1.8em", "color":"grey" }}/>
            <p className='m-1 font-bold text-lg'>Email</p>
            <p className='text-sm'>asivateja199@gmail.com</p>
          </div>  
        </div>

        <div className='flex items-center justify-center flex-wrap m-8 gap-10 laptop:justify-around'>
          <div>
            <p className='text-xl font-bold my-1'>Get a Free Consultation Today</p>
            <p className='text-sm'>Available 24 Hours a day !</p>
            <div className='mx-1 my-5 mt-4'>
            {/* <p className='text-xs text-red-600 mb-2'>*All Fields are Required</p> */}
              <form className='flex flex-col gap-6'>
                <input type="text" placeholder='Name*' autoComplete="off" required onChange={changeHandler} name="name" value={name} className='border-[1.5px] border-[gray] rounded-sm p-1 focus:outline-gray-500'/>
                <input type="email" placeholder='Email*' autoComplete="off" required onChange={changeHandler} name="email" value={email} className='border-[1.5px] border-[gray] rounded-sm p-1 focus:outline-gray-500'/>
                <input type="text" placeholder='Subject*' autoComplete="off" required onChange={changeHandler} name="subject" value={subject} className='border-[1.5px] border-[gray] rounded-sm p-1 focus:outline-gray-500'/>
                <textarea placeholder="Message*" autoComplete="off" required rows={4} cols={40} onChange={changeHandler} name="message" value={message} className='border-[1.5px] border-[gray] rounded-sm p-1 focus:outline-gray-500'/>
                <button className='bg-[#F7BB05] p-2 text-white rounded-sm' onClick={submitHandler}>Send Message</button>
              </form>
            </div>
          </div>
          <div>
            <p className='text-xl font-bold my-1'>We are Here</p>
            <p className='text-sm'>Mon-Fri 09:00 AM-05:00PM / Phones are open 24/7 </p>
            <div className='mx-1 my-5'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123646.91819720225!2d79.89830156659555!3d14.429111858371446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cca0e958771%3A0xd3036c2025161f55!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1682048349031!5m2!1sen!2sin" loading="lazy" className='h-[20rem] w-[100%] overflow-hidden rounded-sm tablet:h-[21.8rem] desktop:w-[105%]'></iframe>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact