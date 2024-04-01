import React, { ReactNode } from "react";
import Image from "next/image";
import { sportsData } from "@/constant/sportsData";
import addsimg from '@/assets/addsImg.jpeg'
const Sports = () => {
  return (
    <div className="p-20 text-white box-border">
      <h1 className='dark:text-black text-xl font-bold after:content-[""] after:bg-[#738FFF] after:block after:h-[2px] after:w-16 pl-7'>
        Sports
      </h1>
      <div className="p-7 flex justify-center">
        {sportsData.map((data) => {
          return (
            <div key={data.id} className="bg-[#3B3E47] dark:bg-white box-border w-60 p-3 ml-5">
              <Image src={data.img_url} alt="game" className="w-64 aspect-[4/7] object-cover" />
              <h1 className="font-semibold pt-2 pb-2">{data.name}</h1>
              <div className="flex justify-between bg-[#292B32] p-2 box-border">
                <div>
                  <h4 className="text-[#DFDFDF] text-xs">Total Events</h4>
                  <p>{data.total_event} Events</p>
                </div>
                <div className="pr-5">
                  <h4 className="text-[#DFDFDF] text-xs">Sport</h4>
                  <p>{data.sport}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="bg-[#3B3E47] dark:bg-white dark:text-black box-border w-60 p-3 ml-5 relative">
          <span className="absolute bg-black w-12 text-center right-3 font-semibold dark:text-white">Ad</span>
              <Image src={addsimg} alt="game" className="w-64" />
              <h1 className="font-semibold pt-3 pb-2 text-center text-xl">Advertisement Title</h1>
              <p className="text-sm p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro impedit maiores, architecto dicta neque velit laudantium aliquid nostrum commodi doloribus temporibus non consequuntur quis id nesciunt officiis saepe dolorum?
              </p>
            </div>
      </div>
      <button className="bg-[#2C9CF0] p-2 w-28 absolute left-[45%]">See More</button>
    </div>
  );
};

export default Sports;
