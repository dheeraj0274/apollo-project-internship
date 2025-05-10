"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "./card";
import axios from "axios";
import qs from "qs";
import { Repeat } from "lucide-react";
import { FaSpinner } from "react-icons/fa";

const filterSetting= {
            language:['English', 'Hindi', "Telugu"],
            mode:["Online", "Offline"],
            experience:['0-6','6-11',"11-15"],
            
}





const Doctor = ({ filters , loading , setLoading }) => {
  const [doctors, setDoctors] = useState([]);

  
  const [showFilter , setShowFilter] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      const fetchDoctors = async () => {
      setLoading(true);
      try {
        console.log("filters being sent", filters);

        const response = await axios.get(
          "http://localhost:8000/api/list-doctors-with-filter",
          {
            params: filters,
            paramsSerializer: (params) =>
              qs.stringify(params, { arrayFormat: "repeat" }),
          }
        );
        console.log(response.data);

        setDoctors(response.data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
      setLoading(false);
    };

    fetchDoctors();
      
    }, 3000);
    
  }, [filters]);


  //filetr-responsive-sectionm 
 
  const[selectfilter ,setSelectFilter]=useState(filterSetting.language)
  console.log(selectfilter);
  
 
   const activeFilter= (e)=>{
    const key = e.target.dataset.value;
    if(filterSetting[key]) setSelectFilter(filterSetting[key])

    
     
  }

  
  

  return (
    <div className="w-[110%]  flex flex-col justify-center items-center ">
      <div>
        <div className="flex-1 p-4 ml-4 ">
          {/* Breadcrumb */}
          <div className="flex items-center  text-sm mb-4">
            <Link href="/" className="text-sky-500">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/doctors" className="text-blue-600">
              Doctors
            </Link>
            <span className="mx-2">›</span>
            <span>General Physicians</span>
          </div>

          {/* Page Title */}
          <div className="flex w-full md:justify-evenly flex-col items-start md:gap-15">
            <div className="mb-6 flex flex-col ">
              <h1 className="md:text-2xl text-xl font-bold">
                Consult General Physicians Online - Internal
                <br />
                Medicine Specialists
              </h1>
              <p className="text-gray-600">(161 doctors)</p>
            </div>

            <div className="flex gap-6">
              <select className="border px-3 w-[120px] bg-sky-200 text-blue-900 md:bg-white py-2 rounded-md">
                <option value="relevance">Relevance</option>
                <option value="experience">Experience</option>
                <option value="lowToHigh">Fee: Low to High</option>
                <option value="highToLow">Fee: High to Low</option>
              </select>
              <div className="md:hidden visible" >
                <button className="border-2 border-gray-300 px-8 cursor-pointer py-2 rounded-xl"
                onClick={()=>{setShowFilter(true)}}>Filter</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center gap-2 ">
        <p>Loading doctors...</p>
         <FaSpinner size={30} color="green" className="animate-spin"/>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {doctors.length === 0 ? (
            <p>No doctors found based on the selected filters.</p>
          ) : (
            <div className="flex flex-col gap-7">
              {doctors.map((doc, index) => (
                <Card key={index} doctor={doc} />
              ))}
            </div>
          )}
        </div>
      )}


      {/* FILTER OVERLAY */}

      
        {showFilter && (
        <div className="mt-[120px] fixed ml-15    inset-0 z-50 bg-white w-[450px]  sm:max-w-[480px] md:hidden visible h-[60%] shadow-2xl shadow-cyan-700 rounded-2xl flex flex-col  overflow-y-auto transition-all">
          <div className="flex justify-between items-center px-4 py-3 ">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button
              onClick={() => {
                setShowFilter(false);
                // Optional: Clear filters logic here
              }}
              className="text-blue-600 font-medium"
            >
              Clear All  
            </button>
          </div>

          <div className="flex">
            <div className="w-[40%] ">
              <ul className=" ">
                <li className="p-4 border-b border-b-gray-200 font-semibold bg-gray-100">Mode of Consult</li>
                <li className="p-4 border-b border-b-gray-200 " onClick={activeFilter} data-value="experience">Experience</li>
                <li className="p-4 border-b border-b-gray-200 "  onClick={activeFilter} data-value="language">Fees</li>
                <li className="p-4 border-b border-b-gray-200 " onClick={activeFilter} data-value="language">Language</li>
                <li className="p-4 border-b border-b-gray-200 ">Facility</li>
              </ul>
            </div>


            <div className="flex w-full flex-col ">
            <div >
              
                {selectfilter.map((data,index) => {
                  return(
                    <div key={index} className="pl-5 pt-2">
                      <div className="flex gap-2 ">
                        <input type="checkbox"/>
                        <label>{data}</label>
                        </div>


                    </div>
 
                  )
                })
              }
            </div>
               
           
          <div className="flex justify-between w-full mt-auto px-4 py-3 border-t">
            <button
              onClick={() => setShowFilter(false)}
              className="border border-blue-700 text-blue-700 w-[48%] py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={() => {
             
                setShowFilter(false);
              }}
              className="bg-blue-700 text-white w-[48%] py-2 rounded-md"
            >
              Apply
            </button>
          </div>
          </div>
        </div>
        </div> 
        )}
       
     
      </div>
)};

export default Doctor;
