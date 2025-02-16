
import React from 'react'

function EducationCard({name,institute,description,duration}) {
  return (
    
       <div className="relative ">
              <div className="absolute -left-[2.35rem] top-2 w-4 h-4 bg-[#061B23] border-2 rounded-full" />
              <div className=" flex  md:justify-between md:items-start">
                <div className="flex-1 w-full  md:pr-4">
                  <h3 className=" text-lg md:text-xl font-semibold">{name}</h3>
                  <p className='text-sm md:text-[16px]'>{institute}</p>
                  <p className="text-[12px] md:text-sm mt-2">
                   {description}
                  </p>
                </div>
                <span className="text-[12px] md:text-sm underline">{duration}</span>
              </div>
            </div>
    
  )
}

export default EducationCard;
