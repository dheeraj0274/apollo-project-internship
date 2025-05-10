"use client"
import React from 'react'
import Image from 'next/image'
import appolo from '../styles/appollo2.png'
import Link from 'next/link'
import {Search , CircleUser , MapPin , ChevronDown } from 'lucide-react'


const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-[100px] bg-white z-1000' >
    <header className="border-b border-gray-300 ">
      <div className="flex  md:justify-around justify-evenly  items-center gap-2">
        <div className="flex gap-4">
          <div className="pl-2">
            <Image src={appolo} alt='logo' width={60} height={60} />
          </div>
          <div className="flex items-center gap-2">
            <MapPin />
            <div className="flex flex-col ">
              <span className="text-[12px] text-gray-700">Select Location</span>
              <div className="flex items justify-center">
                <span className="text-[13px]   font-semibold">
                  Select Address
                </span>
                <div>
                  {" "}
                  <ChevronDown className="cursur-pointer" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* search bar */}

        <div className="flex items-center">
          <div className="relative">
            <div>
              <input className=" flex w-[600px] max-[1000px]:hidden  h-[40px] rounded-xl md:bg-gray-100 bg-[#e1f4f3] outline-none border-2  border-gray-300"></input>
            </div>
            <Search
              size={20}
              className="max-[1000px]:hidden absolute top-2.5 left-4"
            />
          </div>
        </div>
        {/* login */}
        <div className=" flex rounded-xl items-center  md:border-1 md:border-[#346357] w-[100px] h-[40px]">
          <div className=" flex  gap-2">
            <div>
              <div className='relative'>
              <input className="   w-[80px] h-[40px] md:hidden rounded-xl  bg-[#e1f4f3] outline-none border-2  border-gray-300"></input>
              <Search
              size={20}
              className="md:hidden absolute top-2.5 right-13"
            />
              </div>
             
            </div>
            <div>
              <p className="text-[#346357] font-bold max-[1000px]:hidden">
                Login
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <CircleUser color="#346357" />
            </div>
          </div>
        </div>
      </div>
      </header>


       {/* 2nd header */}
      <nav className=" max-[1010px]:hidden h-[3rem] flex shadow bg-white  ">
        <div className="container flex items-center justify-center w-full mx-auto px-4">
          <ul className="flex items-center space-x-8 overflow-x-auto scrollbar-hide">
            <li className="py-4 whitespace-nowrap">
              <Link href="#" className="text-gray-800 font-medium hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 pb-1">
                Buy Medicines
              </Link>
            </li>
            <li className="py-4 whitespace-nowrap">
              <Link href="#" className="text-gray-800 font-medium hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 pb-1">
                Find Doctors
              </Link>
            </li>
            <li className="py-4 whitespace-nowrap">
              <Link href="#" className="text-gray-800 font-medium hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 pb-1">
                Lab Tests
              </Link>
            </li>
            <li className="py-4 whitespace-nowrap">
              <Link href="#" className="text-gray-800 font-medium hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 pb-1">
                Circle Membership
              </Link>
            </li>
            <li className="py-4 whitespace-nowrap">
              <Link href="#" className="text-gray-800 font-medium hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 pb-1">
                Health Records
              </Link>
            </li>
            <li className="py-4 whitespace-nowrap">
              <Link href="#" className="text-gray-800 font-medium hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 pb-1">
                Diabetes Reversal
              </Link>
            </li>
            <li className="py-4  ">
              <Link href="#" className="text-gray-800 font-medium hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 pb-1">
                Buy Insurance
              </Link>
              <span className="px-1.5 text-[13px] font-light bg-green-100 ml-1">New</span>
            </li>
          </ul>
        </div>
      </nav>
      </div>

  
  );
}

export default Header