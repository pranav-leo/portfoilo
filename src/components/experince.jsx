import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Skills } from "./skills";

const reviews = [
  {
    name: "Eight Club",
   
    img: "/eightclub.jpeg",
  },
  {
    name: "Eight Club",
   
    img: "/eightclub.jpeg",
  },  {
    name: "Eight Club",
   
    img: "/eightclub.jpeg",
  },  {
    name: "Eight Club",
   
    img: "/eightclub.jpeg",
  },
 
 
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
      
        <img className="w-36"  alt={name} src={img} />
        
     
    </figure>
  );
};

export function ExpMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg   ">
      <Marquee pauseOnHover className="[--duration:5s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:5s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
      
     
    </div>
  );
}
