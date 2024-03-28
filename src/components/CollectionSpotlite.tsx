import React from 'react'
import Image from "next/image";
import imag from '@/assets/collectionImg1.jpeg'
const CollectionSpotlite = () => {
  return (
    <div className='m-36 mt-2 bg-gradient-to-r from-[#18282A] to-[#221A2C] text-center text-white'>
        <div className='p-32 pt-12'>
          <h1 className='text-5xl font-bold p-8'>Collection Spotlight</h1>
          <p className=''>Discover extraordinery moments with our Spotlight Collection metatickets-exclusive acces to premium events for an unforgettable experience. Grab yours today!</p>
        </div>

        <div>
          <div>
            <Image src={imag} alt="colleciont" />
            <div></div>
            <div>
              <h2>Las Vegas Aviators</h2>
              <p>OCT 15 <span>|</span> SUN <span>|</span> 4:30 PM</p>
              <p>Las Vagas Ballpark, Las Vegas, Nevada</p>
            </div>
            <button>Take Flight Collection</button>
          </div>
        </div>
    </div>
  )
}

export default CollectionSpotlite