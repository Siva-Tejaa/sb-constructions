import React from 'react'

const About = () => {

  return (
    <div id="about">
        <p className='text-3xl font-semibold text-center mt-12 '>About</p>
        <p className='text-sm text-center mb-12 text-gray-400'>A Brief Profile</p>
        <div className='m-3'>
          <div className='flex flex-wrap justify-around gap-4 laptop:flex-nowrap'>
            <img src="https://contactdetailswala.in/wp-content/uploads/2021/05/mastercard-1.jpeg" className='w-96 h-96 flex-1 border-4 border-[#F7BB05] rounded-sm'/>
            <div className='flex-1 tablet:flex-auto laptop:flex-1'>
              <p className='font-medium text-3xl underline underline-offset-[5px] decoration-[#F7BB05] mb-4'>SB Constructions</p>
              <p className='text-slate-500 text-[0.93rem] text-justify'>
              
We have been executing civil and earthwork for 3 decades now in U.P., M.P., Chandigarh NCR.<br/>

The company was incorporated by Late Shri Sudhama Pathak in 1985 M/s Ashoka construction company Executing Heavy Engineering and construction Work on Pan INDIA Basis. Our CEO Mr. Virendra Kumar Pathak is a visionary leader of this industry and the company has its Branch office at Shaktinagar, District – Sonebhadra ( U.P).<br/>

The company is registered as a contractor with several government departments Which includes PWD U.P. M.P. irrigation department AA class NCL, Northern Eastern Railway
The firm is also a registered vendor (Contractor) with ALSTOM, KPTL Power Limited NTPC, and Hindalco.<br/>

Over 35 years in business, we’ve grown to see ourselves as more than just a construction company. We’re builders and contributors to the economic strength and well-being of the communities we serve.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-around mt-10  laptop:flex-nowrap'>
          <div className='shadow-[0px_0px_50px_0px_rgba(0,0,0,0.2)] rounded-sm p-4 m-4'>
            <p className='font-medium text-2xl mb-2 underline underline-offset-[3px] decoration-[#F7BB05]'>Vision</p>
            <p className='text-[0.93rem] text-justify'>Our Vision is to create and maintain an organization of highly skilled construction professionals that serve our clients’ needs with honesty and integrity. To provide an environment that promotes personal growth and self-pride. Ultimately, to differentiate ourselves as the builder quality, personal service, and value. To deliver our client the best solutions and broaden the activity base by diversifying into other infrastructure disciplines to sustain a healthy growth rate.</p>
          </div>
          <div className='shadow-[0px_0px_50px_0px_rgba(0,0,0,0.2)] rounded-sm p-4 m-4'>
            <p className='font-medium text-2xl mb-2 underline underline-offset-[3px] decoration-[#F7BB05]'>Mission</p>
            <p className='text-[0.93rem] text-justify'>Our Mission is to provide builder services that surpass our clients’ under mission as well. We will accomplish this through the selective usage of responsible subcontractors, by hiring and retaining first-class employees, and by approaching the building process with honesty and integrity. This will provide us the foundation for long-term customer relations and growth. We are committed to the success of our clients and our business partners.</p>
          </div>
        </div>
    </div>
  )
}

export default About