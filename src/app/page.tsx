"use client";
import React, { useState, useRef, useEffect } from "react";
import {LayoutGridDemo} from '../components/layout-grid/LayoutGridDemo'
import {ImagesSlider} from '../components/ui/images-slider'


import Image from "next/image";
import cab from '../asset/cab.jpg'
import cabr from '../asset/cabr.png'
import cab2 from '../asset/cab2.png'

import { FaCar } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";






export default function Home() {
  const photo=[cabr.src,cab.src,cab2.src]

  const config={
    place:[
      {
        image:"/images/rameshwaram.jpg",
        text1:"Rameshwaram",
        text2:"Rameshwaram Tour"
      },
      {
        image:"/images/madurai.jfif",
        text1:"Madurai  ",
        text2:"Madurai Temple Tour"
      },
      {
        image:"/images/kannayakumari.jfif",
        text1:"Kanyakumari",
        text2:"Kanyakumari Beach Tour"
      },
        {
        image:"/images/trichy2.webp",
        text1:"Trichy",
        text2:"Trichy Cultural Tour"
      },
      {
        image:"/images/munnar.jpg",
        text1:"Munnar",
        text2:"Munnar Hill Station Tour"
      },
      {
        image:"/images/thanjavur2.png",
        text1:"Thanjavur",
        text2:"Thanjavur Heritage Tour"
      },
    ]
  }

  const experince={
    customers:[
      {
        text1:"Happy Customers",
        text2:"1000",
        icon:FaCar
      },
       {
        text1:"Years Experience",
        text2:"5years",
         icon:FaAddressCard
      },
       {
        text1:"Experienced Drivers",
        text2:"10years",
        icon:FaCar
      }

    ]

  }


  return (
    <section className="   ">
      <ImagesSlider
        images={photo}
        autoplay={true}
        direction="up"
        className=" inset-0 w-full md:h-[550px]  h-lvh pt-16"
        overlayClassName=""
      >
         <div className="z-50 relative  text-center">
          <h1 className="text-4xl font-bold">Welcome to TCM Cabs</h1>
        </div>

      </ImagesSlider>
     <div className=" md:flex  md:ml-4 md:mr-10 mt-24 ">

      <div className="md:ml-5">
        <Image src={cab} alt="img" className=" w-full md:h-[450px] md:w-[1100px] rounded"/>
      </div>
      <div className=" p-4  ml-5 ">
        <p className="text-red-500" >Creating Memories, One Trip at a Time</p> 
        <p className="md:text-3xl text-xl font-black">TCM Tours & Travels</p><br />
        <p>At TCM Cab's, we believe that every journey is an opportunity to create cherished memories. With our commitment to excellence and customer satisfaction, we take pride in offering you unparalleled travel experiences.</p> <br />
                <p>Whether you're seeking an adventurous escapade, a cultural exploration, or a relaxing getaway, our diverse range of tours and travel packages cater to every wanderlust soul. From picturesque hill stations to sun-kissed beaches,
                   from historical landmarks to vibrant cities, we meticulously craft each itinerary to ensure a seamless blend of comfort, excitement, and authenticity.</p> <br />
                <p>Driven by our passion for travel and dedication to exceeding your expectations, latha Cab's Tours and Travels is your trusted companion in transforming your travel dreams into unforgettable realities</p><br />
      </div>
     </div>

     <div className="flex w-full  justify-center gap-5">
      <button className="bg-cyan-500 p-1 rounded px-2">View Packages</button>
      <button className="bg-cyan-500 p-1 rounded px-2">Book Now</button>
     </div>

     {/* BEST PLACES TO VISIT */}
     <div className="ml-5 p-4 mt-24">
      <p className="text-red-500 ">BEST PLACES TO VISIT</p>
      <p className="md:text-3xl text-xl font-black ">Uncover the wonders of BEST PLACES <br/> TO VISIT, where every second creates <br/> lasting memories.</p>
     </div>
  
 <div className=" p-4 grid md:grid-cols-3 grid-cols-2   ">
      {config.place.map((place, index) => (
        <div key={index} className="p-2 gap-10">
          <Image
            className="md:w-[250px] md:h-[180px] rounded mx-auto w-[200px] h-[120px] gap-10 "
            src={place.image}
            alt="Image of destination"
            width={300}
            height={200}
          />
          <p className="text-sm text-center">{place.text1}</p>
          <p className="text-center">{place.text2}</p>
          <button className="bg-cyan-500 mx-auto block p-1 rounded px-2 mt-2">Book now</button>
        </div>
      ))}
    </div>

    {/* CUSTOMERS EXPERIENCE */}
   

     {/* <div className=" flex grid-col-3 justify-between ml-24 p-4">
       <div className="bg-white w-[200px] h-[100px]">
       <p className="flex  items-center gap-2">HappyCustomers <FaAddressCard/></p>
      <p>1000</p>
     </div>
      <div className="bg-white w-[200px] h-[100px]">
       <p className="flex  items-center gap-2">YearsExperience <FaAddressCard/></p>
      <p>1000</p>
     </div> <div className="bg-white w-[200px] h-[100px]">
       <p className="flex  items-center gap-2">ExperiencedDrivers <FaAddressCard/></p>
      <p>1000</p>
     </div>
     </div> */}


     

       <div className="ml-5 p-4 mt-24">
      <p className="text-red-500 ">Explore Local Wonders</p>
      <p className="md:text-3xl text-xl font-black ">Your Trusted Journey Companion.</p>
     </div>

     <main>
      <div className="  grid md:grid-cols-2 md:space-x-20  mr-10 ml-10 md:mr-10">
       <div>
      <p className="text-sm py-1 text-gray-400 "><span className="font-semibold text-neutral-200">Sri Arulmigu Ramanathaswamy Temple:</span> Delve into the sacred ambiance of one of India's holiest pilgrimage sites, known for its architectural splendor and spiritual significance</p>
      <p className="text-sm py-1 text-gray-400"><span className="font-semibold text-neutral-200" >Ramar Padham:</span> Walk in the footsteps of Lord Rama at Ramar Padham, a revered spot believed to bear the imprints of Lord Rama's feet.</p>
      <p  className="text-sm py-1 text-gray-400"><span className="font-semibold text-neutral-200" >Pamban Bridge:</span> Witness engineering marvel at its finest as you traverse the historic Pamban Bridge, India's first sea bridge connecting Rameswaram to mainland India.</p>
      <p className="text-sm py-1 text-gray-400"><span className="font-semiboldtext-neutral-200 " >Dr. A.P.J. Abdul Kalam Memorial:</span> Pay homage to India's Missile Man at this memorial dedicated to the visionary leader, showcasing his life and achievements.</p>
      <p className="text-sm py-1 text-gray-400"><span className="font-semibold text-neutral-200" >Villondi Theertham:</span> Experience serenity at Villondi Theertham, a natural freshwater spring revered for its cleansing properties and mythological significance.</p>
      <p className="text-sm py-1 text-gray-400"><span className="font-semibold text-neutral-200" >Agnitheertham:</span> Immerse yourself in spiritual purification as you take a dip in the sacred waters of Agnitheertham, believed to absolve sins and offer salvation.</p>
      <p className="text-sm py-1 text-gray-400"><span className="font-semibold text-neutral-200" >Lakshmana Theertham:</span> Explore the mythological tales surrounding Lakshmana Theertham, a holy water body believed to have been created by Lord Rama's brother Lakshmana.</p>
      <p className="text-sm py-1 text-gray-400"><span className="font-semibold text-neutral-200" >Dhanushkodi:</span> Unravel the mysteries of the ghost town of Dhanushkodi, where the Bay of Bengal and the Indian Ocean converge, offering breathtaking views and a glimpse into history</p>
      <p className="text-sm py-1 text-gray-400"><span className="font-semibold text-neutral-200" >Floating Stone:</span> Marvel at the wonder of the Floating Stone, believed to be used in the construction of the legendary Ram Setu bridge, showcasing the ancient engineering prowess.</p>
     </div>

     <div className="">
       <LayoutGridDemo/>
     </div>
     
     </div>
     </main>

    

 {/* EXPERINCE */}
 <div className="grid md:grid-cols-3 gap-10 md:h-[150px] p-4  text-center ml-10 mr-10">
  {experince.customers.map((customer, index) => (
    <div
      key={index}
      className="bg-white flex   md:flex-row items-center justify-center gap-4 p-4 rounded-lg shadow-sm"
    >
      <customer.icon className="text-red-600 w-[40px] h-[40px]" />

      <div className="text-center md:text-left">
        <p className="text-gray-500">{customer.text1}</p>
        <p className="font-bold text-black md:text-3xl">{customer.text2}</p>
      </div>
    </div>
  ))}
</div>

  
    </section>
  );
}

 
