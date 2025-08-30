"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react"; // npm i lucide-react


export default function Footer() {

 const [openIndex, setOpenIndex] = useState<number | null>(null);


 const sections = [

  {

   title: "Products",

   links: ["Houdini", "Houdini Engine", "Houdini Indie"],

  },

  {

   title: "Learn",

   links: ["Talks & Webinars", "Education Programs"],

  },

  {

   title: "Support",

   links: [

    "Customer Support",

    "Help Desk (FAQ)",

    "System Requirements",

    "Documentation",

    "Report a Bug - RFE",

   ],

  },

  {

   title: "Legal",

   links: [

    "Terms of Use",

    "Privacy Policy",

    "License Agreement",

    "Accessibility",

    "Responsible Disclosure",

   ],

  },

  {

   title: "Company",

   links: [

    "About SideFX",

    "Careers",

    "Press",

    "Internships",

    "Contact Info",

   ],

  },

 ];


 const toggleSection = (index: number) => {

  setOpenIndex(openIndex === index ? null : index);

 };


 return (

  <footer className="bg-[#1B1B1F] text-[#A8A8A8] px-4 sm:px-6 xl:px-12 py-16">

   <div className="max-w-7xl mx-auto">

    {/* 📱 Mobile Accordion */}

    <div className="sm:hidden">

     {sections.map((section, i) => (

      <div key={i} className="border-b border-gray-700">

       <button

        onClick={() => toggleSection(i)}

        className="w-full flex justify-between items-center py-4 text-left font-semibold text-white uppercase tracking-wide text-sm"

       >

        {section.title}

        <ChevronDown

         className={`w-5 h-5 transition-transform ${

          openIndex === i ? "rotate-180 text-[#B84A39]" : ""

         }`}

        />

       </button>

       {openIndex === i && (

        <div className="pl-4 pb-4 space-y-2 text-sm">

         {section.links.map((link, j) => (

          <a

           key={j}

           href="#"

           className="block hover:text-[#B84A39] transition-colors"

          >

           {link}

          </a>

         ))}

        </div>

       )}

      </div>

     ))}

    </div>


    {/*  Desktop Columns */}

    <div className="hidden sm:grid grid-cols-5 md:grid-cols-5 gap-8">

     {sections.map((section, i) => (

      <div key={i}>

       <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">

        {section.title}

       </h4>

       <ul className="space-y-2 text-sm">

        {section.links.map((link, j) => (

         <li key={j}>

          <a

           href="#"

           className="hover:text-[#B84A39] transition-colors"

          >

           {link}

          </a>

         </li>

        ))}

       </ul>

      </div>

     ))}

    </div>


    {/* Bottom bar */}

    <div className="mt-12 text-center text-xs text-[#666]">

     © {new Date().getFullYear()} Lensman Zest · All rights reserved.

    </div>

   </div>

  </footer>

 );

}


