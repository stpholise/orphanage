"use client"

import { useState, useEffect } from 'react'
import Modals from '../ui/Modals'

const Volunteer = () => {
  const [ isPopupActive, setIsPopupActive ] = useState( false )
  
  useEffect( () => {
    isPopupActive ?  document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  })
  return (
    <div className="flex w-full lg:gap-16 items-center justify-center bg-[url('/Images/BG-Image.jpg')] bg-cover h-80 py-10 md:h-96 rounded-lg ">
      <div
        className={`flex flex-col px-4 items-center py-6 justify-center w-full md:w-[760px] md:px-4  gap-9 `}
      >
        <h3 className="font-bold sm:text-2xl text-lg md:text-4xl lg:text-5xl text-white ">
          You can contribute to provide a place for children with special needs!
        </h3>
        <div className=" flex flex-col md:flex-row items-center justify-center gap-4">
          <button onClick={() => setIsPopupActive(true)}  className="bg-[#F2C94C] w-44 md:w-52 h-10 md:h-12 rounded-sm">
            Join as a volunteer
          </button>
          <button className="bg-white  text-black w-28 md:w-36 h-10 md:h-12 rounded-sm">
            Donate
          </button>
        </div>
        <div className="">
          {
            isPopupActive &&
            <Modals setIsPopupActive={ setIsPopupActive} />
          }
          {
            isPopupActive && 
            <div onClick={() => setIsPopupActive(false)} className="fixed top-0 left-0 right-0 z-30 bottom-0 bg-[rgba(0,0,0,0.1)] "></div>
          }
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
