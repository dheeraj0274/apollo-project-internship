import React from 'react';

import Image from 'next/image';
import { ThumbsUp, Info } from "lucide-react"

const Card = ({doctor }) => {
  return (
    
     <div className="space-y-6 pl-4">
             
                
                <div className="border  rounded-xl h-[170px] flex  w-[500px] md:w-[700px] sm:w-[400px]  border-gray-300 p-4">
                  <div className="flex flex-row w-full">
                    <div className="flex flex-col items-center md:w-1/4 mb-4 md:mb-0">
                      <div className="relative w-24 h-24 mb-2">
                        <img
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          fill
                          className="rounded-full object-cover border-4 border-blue-100"
                        />
                      </div>
                     
                    </div>

                    <div className="md:w-2/4 pl-4">
                      <div className="flex items-center mb-1">
                        <h2 className="text-[15px] font-bold">{doctor.name}</h2>
                        <Info className="w-4 h-4 ml-2 text-blue-600" />
                      </div>
                      <p className="text-gray-500 font-semibold text-[15px] mb-1 pt-1">{doctor.speciality}</p>
                      <p className="text-purple-700 text-[13px] font-semibold mb-1">
                        {doctor.experience} YEARS • {doctor.qualifications}
                      </p>
                     
                      <p className="text-gray-500 text-[13px]  mb-3">{doctor.hospital}</p>
                     
                    </div>

                    <div className="md:w-1/4 flex flex-col pl-6 md:pl-0 items-center md:items-center ">
                      <div className="mb- text-center">
                        <p className="text-2xl font-bold  pt-5">₹{doctor.fee}</p>
                       
                      </div>
                      <button className="rounded-[10px] py-2 text-[13px] font-bold  md:w-auto border-1 hover:bg-sky-200 px-10 border-sky-900 text-sky-900 hover:shadow-xl mt-4">Consult Online</button>
                    </div>
                  </div>
                  </div>
              
           
                </div>
                
          
   
  )
}

export default Card