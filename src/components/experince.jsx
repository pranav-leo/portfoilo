"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";


// const reviews = [

 
 
// ];



const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  



  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      
        <img className="w-44 h-36"  alt={name} src={img} />
        
     
    </figure>
  );
};

export function ExpMarquee() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setReviews(data.images.map((img) => ({
        img: `/compnies/${img}`,
        
      })))
      )
      .catch(console.error);
  }, []);

  let firstRow = reviews.slice(0, reviews.length / 2);
  let secondRow = reviews.slice(reviews.length / 2);
  // swap 3 random reviews in first row with 3 random reviews in second row
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * firstRow.length);
    const temp = firstRow[randomIndex];
    firstRow[randomIndex] = secondRow[randomIndex];
    secondRow[randomIndex] = temp
  }
  


  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg   ">

        <h2 className="text-2xl md:text-4xl text-white font-bold leading-tight mb-4" > Empowering Brands, Elevating Visions </h2>

      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard  {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:11s]">
        {secondRow.map((review) => (
          <ReviewCard  {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
      
     
    </div>
  );
}
