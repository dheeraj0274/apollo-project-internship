"use client"
import React, { useState } from "react";
import Sidebar from "./sidebar";
import Doctor from './mainPage.jsx'
import RightPage from "./rightPage.jsx";

const DoctorPage = ({onButtonClick , filters , setFilters , loading , setLoading}) => {
 


 
  return (
    <div className="flex w-full  flex-row mt-[100px] ">
      <div className="">
        {" "}
        <Sidebar filter={filters} onButtonClick={onButtonClick} setFilters={setFilters} />
      </div>

      <div className="w-full  md:ml-[300px] sm:ml-[200px]  flex">
        <div>
          {" "}
          <Doctor loading={loading} setLoading={setLoading} filters={filters} />
        </div>
        <div>
          <RightPage />
        </div>
        <div />
      </div>
    </div>
  );
  }


export default DoctorPage;
