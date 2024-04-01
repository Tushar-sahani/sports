import React from "react";
import Image from "next/image";
import collection1 from "@/assets/collectionImg1.jpeg";
import collection2 from "@/assets/collectionImg2.jpeg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const CollectionSpotlite = () => {
  return (
    <div className="m-36 mt-2 bg-gradient-to-r from-[#18282A] to-[#221A2C] text-center text-white">
      <div className="p-32 pt-12">
        <h1 className="text-5xl font-bold p-8">Collection Spotlight</h1>
        <p className="">
          Discover extraordinery moments with our Spotlight Collection
          metatickets-exclusive acces to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      <div className="flex relative justify-evenly">
        <button className="border-2 p-2 h-10 mt-64 text-lg border-[#2C9CF0] text-[#2C9CF0]">
          <FaChevronLeft />
        </button>
        <div className="flex">
          <div className="bg-[#3B3E47] w-64 p-2 ">
            <Image src={collection1} alt="colleciont" className="w-64" />
            <div className='relative text-[#818A97] after:bg-gradient-to-r after:from-[#18282A] after:to-[#221A2C] after:content-[""]  after:w-6 after:h-6 after:border-1 after:z-10 after:block after:rounded-full after:absolute after:-left-5 after:top-2 before:bg-gradient-to-r before:content-[""]  before:w-6 before:h-6 before:border-1 before:z-10 before:block before:rounded-full before:absolute before:-right-5 before:top-2 before:from-[#221A2C] before:to-[#18282A]'>
              _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
            </div>
            <div>
              <h2 className="p-2 text-lg font-bold">Las Vegas Aviators</h2>
              <p className="text-sm p-1">
                OCT 15 <span className="text-[#818A97]">|</span> SUN{" "}
                <span className="text-[#818A97]">|</span> 4:30 PM
              </p>
              <p className="p-1 text-[#DFDFDF]">
                Las Vagas Ballpark, Las Vegas, Nevada
              </p>
            </div>
            <button className="bg-black p-2 w-full ">
              Take Flight Collection
            </button>
          </div>
          <div className="bg-[#3B3E47] w-64 p-2 ml-20">
            <Image src={collection2} alt="colleciont" className="w-64" />
            <div className='relative text-[#818A97] after:bg-gradient-to-r after:from-[#18282A] after:to-[#221A2C] after:content-[""]  after:w-6 after:h-6 after:border-1 after:z-10 after:block after:rounded-full after:absolute after:-left-5 after:top-2 before:bg-gradient-to-r before:content-[""]  before:w-6 before:h-6 before:border-1 before:z-10 before:block before:rounded-full before:absolute before:-right-5 before:top-2 before:from-[#221A2C] before:to-[#18282A]'>
              _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
            </div>
            <div>
              <h2 className="p-2 text-lg font-bold">Las Vegas Aviators</h2>
              <p className="text-sm p-1">
                OCT 15 <span className="text-[#818A97]">|</span> SUN{" "}
                <span className="text-[#818A97]">|</span> 4:30 PM
              </p>
              <p className="p-1 text-[#DFDFDF]">
                Las Vagas Ballpark, Las Vegas, Nevada
              </p>
            </div>
            <button className="bg-black p-2 w-full ">
              Take Flight Collection
            </button>
          </div>
          <div className="bg-[#3B3E47] w-64 p-2 ml-20">
            <Image src={collection1} alt="colleciont" className="w-64" />
            <div className='relative text-[#818A97] after:bg-gradient-to-r after:from-[#18282A] after:to-[#221A2C] after:content-[""]  after:w-6 after:h-6 after:border-1 after:z-10 after:block after:rounded-full after:absolute after:-left-5 after:top-2 before:bg-gradient-to-r before:content-[""]  before:w-6 before:h-6 before:border-1 before:z-10 before:block before:rounded-full before:absolute before:-right-5 before:top-2 before:from-[#221A2C] before:to-[#18282A]'>
              _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
            </div>
            <div>
              <h2 className="p-2 text-lg font-bold">Las Vegas Aviators</h2>
              <p className="text-sm p-1">
                OCT 15 <span className="text-[#818A97]">|</span> SUN{" "}
                <span className="text-[#818A97]">|</span> 4:30 PM
              </p>
              <p className="p-1 text-[#DFDFDF]">
                Las Vagas Ballpark, Las Vegas, Nevada
              </p>
            </div>
            <button className="bg-black p-2 w-full ">
              Take Flight Collection
            </button>
          </div>
        </div>
        <button className="border-2 p-2 mt-64 h-10 text-lg border-[#2C9CF0] text-[#2C9CF0]">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CollectionSpotlite;
