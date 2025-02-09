import React from 'react'

function LogoCard({imgUrl,name}) {
  return (
    <div className="relative">
              <div className="absolute -left-[2.35rem] top-2 w-4 h-4 bg-[#061B23] border-2 rounded-full" />
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  <div key={name} className="flex flex-col items-center p-4  rounded-lg shadow-sm">
                    <img 
                      src={imgUrl} 
                      className="w-13 h-12 mb-2"
                      alt="logo"
                    />
                  </div>
              </div>
            </div>
  )
}

export default LogoCard
