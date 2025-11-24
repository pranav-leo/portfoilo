import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  GearIcon,
  StarIcon,
  HeartIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const Voulnteer = () => {
  const features = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: "/cell.png",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3", // spans 2 rows
    },
    {
      Icon: InputIcon,
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: "/smp.svg",
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: GlobeIcon,
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      background: "/girlscriptsoc_logo.jpeg",
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2", // regular size
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: "/sc.png",
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3", // spans 2 columns
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description: "Get notified when someone shares a file or mentions you.",
      href: "/",
      cta: "Learn more",
      background: "/aries_iitr_logo.jpeg",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4", // regular size
    },
    {
      Icon: GearIcon,
      name: "Settings",
      description: "Configure your preferences and account details.",
      href: "/",
      cta: "Learn more",
      background: "/interiit.png",
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4", // regular size
    },
    {
      Icon: StarIcon,
      name: "Favorites",
      description: "Mark files as favorites for easy access.",
      href: "/",
      cta: "Learn more",
      background: "/esummit.svg",
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-5", // spans 2 rows
    },
    {
      Icon: HeartIcon,
      name: "Loved files",
      description: "Keep track of the files you love the most.",
      href: "/",
      cta: "Learn more",
      background: "/cultrul_council.png",
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-5", // regular size
    },
  ];

  return (
    <div className="w-full px-[10vw] flex mt-32 gap-16 flex-col items-center" >  
    
    {/* <div className="text-5xl w-full text-center text-white" > Voulnteer </div> */}
      <BentoGrid className="lg:grid-rows-4 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    </div>

  );
};

export default Voulnteer;
