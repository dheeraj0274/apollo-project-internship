
"use client"
import React from 'react'

const Sidebar = ({filter,setFilters, onButtonClick}) => {
  
  
  
  
  return (
    <div className='w-[300px]  hidden  h-screen p-4 fixed transition-all duration-300 ease-in-out  sm:block sm:w-[20px] md:w-[220px] lg:w-[250px] xl:w-[280px] '>
         <div className=" md:w-72 p-4 h-screen   flex flex-col items-end w-[200px]  overflow-y-scroll">
        <div className="flex justify-between   items-center mb-4 border-b-2 w-[180px]  border-gray-200 p-2">
          <h2 className="text-lg font-medium">Filters</h2>
          <button className="text-sky-900 text-sm font-medium">
            Clear All
          </button>
        </div>
        <div className="pl-2">
          <button className=" border-1  rounded-[5px] p-1.5 text-[13px] font-bold text-sky-900 px-5 border-sky-900">
            Show Doctors Near me
          </button>
        </div>
        {/* mode of consult */}
        <div className="flex pl-2 flex-col w-full gap-3">
          <div className=" w-full  pl-19 pt-3 flex flex-col">
            <div>
              <h1 className="font-semibold text-[17px]">Mode of Consult</h1>
            </div>
            <div className="flex flex-col gap-2 pt-2 pl-2">
              <div className="flex gap-2">
                <input type="checkbox"
                value="hospital"
                onChange={()=>onButtonClick("mode","hospital")}
                />
                <label className=' text-[15px]'>Hospital</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox"
                value="online"
                onChange={()=>onButtonClick("mode","online")} />
                <label>Online</label>
              </div>
            </div>
          </div>




          <div className=" w-full   pl-19 pt-3 flex flex-col">
            <div>
              <h1 className="font-semibold text-[17px]">Experience (in years)</h1>
            </div>
            <div className="flex flex-col gap-2.5 pt-2 pl-2">
              <div className="flex gap-2">
                <input type="checkbox"
                value="0-5"
                onChange={()=>onButtonClick("experience","0-5")} />
                <label>0-5</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" 
                value="6-11"
                onChange={()=>onButtonClick("experience","6-11")} 
                 />
                <label>6-11</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox"
                value="11-15"
                onChange={()=>onButtonClick("experience","11-15")}  />
                <label>11-15</label>
              </div>
            </div>
          </div>







          <div className=" w-full  pl-19 pt-3 flex flex-col">
            <div>
              <h1 className="font-semibold text-[17px]">Fee (in rupee)</h1>
            </div>
            <div className="flex flex-col gap-2.5 pt-2 pl-2">
              <div className="flex gap-2">
                <input type="checkbox" 
                value="0-500"
                onChange={()=>onButtonClick("fee","0-500")} />
                <label>0-500</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox"
                value="500-1000"
                onChange={()=>onButtonClick("fee","500-1000")}  />
                <label>500-1000</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox"
                value="1000+"
                onChange={()=>onButtonClick("fee","1000+")}  />
                <label>1000+</label>
              </div>
            </div>
          </div>






          <div className=" w-full  pl-19 pt-3 flex flex-col">
            <div>
              <h1 className="font-semibold text-[17px]">Langauge</h1>
            </div>
            <div className="flex flex-col gap-2.5 pt-2 pl-2">
              <div className="flex gap-2">
                <input type="checkbox"
                value="hindi"
                onChange={()=>onButtonClick("language","hindi")}  />
                <label>Hindi</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" 
                value="english"
                onChange={()=>onButtonClick("language","english")} />
                <label>English</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" 
                value="telugu"
                onChange={()=>onButtonClick("language","telugu")} />
                <label>Telugu</label>
              </div>
            </div>
          </div>







          <div className=" w-full h-[250px] pl-19 pt-3 flex flex-col">
            <div>
              <h1 className="font-semibold text-[17px]">Facility</h1>
            </div>
            <div className="flex flex-col gap-1 pt-2 pl-2">
              <div className="flex gap-2">
                <input type="checkbox" 
                value="apollo-hospital"
                onChange={()=>onButtonClick("preference","apollo-hospital")} />
                <label>Apollo Hospital</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox"
                value="other"
                onChange={()=>onButtonClick("preference","other")}  />
                <label>Other clinic</label>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Sidebar