"use client"
import Header from "@/components/Header";
import { useState } from "react";
import './global.css'


import DoctorPage from "@/components/DoctorPage";
export default function Home() {
  const [loading, setLoading] = useState(true);

  const [filters,setFilters]=useState({
    mode:[],
    experience:[],
    fee:[],
    language:[],
    preference:[]
  })
  const handleCheckbox = 
    (key, value) => {
      setTimeout(()=>{
         setFilters((prev) => {
     
      const newValues = prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)  
        : [...prev[key], value];  
  
      return {
        ...prev,
        [key]: newValues,  
      };
    });
    

      } , 1000)

      setLoading(true)
       
  };

      
    

  

    return (
      <div >
       <Header />
       <DoctorPage onButtonClick={handleCheckbox}
       loading={loading}
       setLoading={setLoading}
        filters={filters} setFilters={setFilters}  />
      </div>
    );
  }
  