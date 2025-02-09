import React from 'react'

function TechCard({name,institute,description,duration}) {
  return (
    
       <div className="relative">
              <div className="absolute -left-[2.35rem] top-2 w-4 h-4 bg-[#061B23] border-2 rounded-full" />
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p>{institute}</p>
                  <p className="text-sm mt-2">
                   {description}
                  </p>
                </div>
                <span className="text-sm">{duration}</span>
              </div>
            </div>
    
  )
}

export default TechCard
