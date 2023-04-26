import React from 'react';
import { servicesData } from '../../utils/Data';

const Services = () => {
  return (
    <div id="services" className='desktop:mb-36'>
        <p className='text-3xl font-semibold text-center mt-12 '>Our Services</p>
        <p className='text-sm text-center mb-12 text-gray-400'>What We Offer</p>
        <div className='flex items-center flex-wrap justify-center gap-10'>
        {
            servicesData.map((service) => (
                <div className='flex flex-col items-center justify-center' key={service.id}>
                    <img src={service.image} alt={service.title} className="max-h-44" width="250" height="250"/>
                    <br/>
                    <p className='font-medium'>{service.title}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Services