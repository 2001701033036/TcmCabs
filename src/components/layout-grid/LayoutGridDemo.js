"use client";
import React from "react";
import { LayoutGrid } from "./LayoutGrid";
import {SkeletonOne, SkeletonTwo, SkeletonThree,SkeletonFour} from "./skeletons/Skeletons";

export function LayoutGridDemo() {
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: "/images/rameshwaram.jpg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: "/images/t2.avif",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "/images/t3.webp",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "/images/t5.jpg",
    },
  ];

  return (
    <div className="min-h-screen h-full  w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
