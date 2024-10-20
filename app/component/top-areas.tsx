"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const areas = [
  {
    name: "Modern Urban Living",
    image: "/city (2).jpg",
    title: "New Cairo",
    description:
      "Spreading across 85,000 acres, New Cairo is a modern city with stylish residential areas and thriving business centers, making it a popular place for people looking for a fresh lifestyle.",
    properties: [
      "American University in Cairo (AUC) ",
      "International School of Choueifat",
      "Cairo Festival City Mall (CFC)",
      "German University in Cairo (GUC)",
      "Al Ahly Sporting Club",
      "Point 90 Mall",
    ],
    amenities: [
      "Hassan Allam",
      "IL Cazar",
      "Palm Hills",
      "Ora",
      "Misr Italia",
      "Hyde Park",
    ],
  },
  {
    name: "Sustainable Future",
    image: "/city (1).jpg",
    title: "Mostakbal City",
    description:
      "A forward-looking development covering 11,000 acres, Mostakbal City is built with sustainability in focus. It’s set to become a key spot for both residents and investors, offering a perfect balance of green living and modern conveniences.",
    properties: [
      "Mostakbal City’s Boulevard",
      "Mazar in Mostakbal City",
      "Sports academy",
      "El Robiky Road",
      "Amal axis",
      "Suez Road",
    ],
    amenities: [
      "Hassan Allam",
      "Misr Italia",
      "Reportage",
      "Tatweer Misr",
      "HDP",
    ],
  },
  {
    name: " Egypt's New Hub",
    image: "/city (3).jpg",
    title: "New Administrative Capital",
    description:
      "Designed to be Egypt’s new center for government and business, this vast city covers 170,000 acres. With its wide variety of modern facilities and lively communities, it’s quickly becoming one of the best places to live in Egypt.",
    properties: [
      "Central Park with an area of 8 km",
      "Expo City New Capital",
      "Al Masa Hotel New Capital",
      "Al-Fattah Al-Aleem Mosque",
      "Knowledge City",
      "Middle Ring Road",
    ],
    amenities: [
      "City Edge Developments ",
      "Nile Developments ",
      "Better Home",
      "Mountain View",
      "Capital Group Properties ",
    ],
  },
  {
    name: "Coastal Retreat",
    image: "/city (4).jpg",
    title: "Ain Sokhna ",
    description:
      "A favorite getaway for those looking to relax by the sea, thanks to its resorts and beautiful surroundings. Located along the coast on 17,000 acres.",
    properties: ["Cairo- Sokhna Road", "Zaafarana Road", "Cairo- Suez Road."],
    amenities: [
      "Tatweer Misr ",
      "MAVEN Developments ",
      "Misr Italia Properties ",
    ],
  },
  {
    name: "Luxury Lagoon Living ",
    image: "/city (5).jpg",
    title: "El-Gouna",
    description:
      "Famous for its luxury and charm, El Gouna is a lagoon-filled town by the Red Sea. It offers a lively lifestyle with big events, lovely beaches, and the “Life as it should be” experience.",
    properties: [
      "Just 25 km from Hurghada ",
      "Only a 4-hour flight from Europe’s major capitals",
      "In close proximity to Hurghada International Airport",
    ],
    amenities: ["Orascom Development ", "El Gouna Projects by Orascom "],
  },
  {
    name: "Mediterranean Paradise",
    image: "/city (6).jpg",
    title: "North Coast",
    description:
      "Stretching over 500 square kilometers from Alexandria to Marsa Matrouh, the North Coast is a summer hotspot, known for its clear waters and exclusive resorts, making it the perfect vacation spot.",
    properties: [
      "30 minutes away from Alexandria",
      "3 hours away from Cairo",
      "Alexandria - Marsa Matrouh Desert Road",
      "Fouka Road",
      "Dabaa Road",
    ],
    amenities: [
      "Emaar Misr ",
      "Palm Hills Developments",
      "City Edge Developments ",
      "Tatweer Misr ",
    ],
  },
  {
    name: "Suburban Serenity",
    image: "/city (7).jpeg",
    title: "Sheikh Zayed",
    description:
      "A quiet suburban area, Shaikh Zayed is known for its green parks, peaceful neighborhoods, and a strong sense of community.",
    properties: [
      "Mall of Arabia",
      "Hyper One",
      "Americana Plaza Mall",
      "Walk of Cairo (WOC)",
      "Galleria40",
    ],
    amenities: ["Sodic ", "Palm Hills Developments ", "Emaar Misr"],
  },
  {
    name: "Balanced City Life",
    image: "/city (8).jpg",
    title: "6th of October",
    description:
      "Covering 119,200 acres, 6th of October City is a growing area that mixes residential, commercial, and industrial spaces, providing a balanced environment for both families and businesses.",
    properties: [
      "Misr University for Science and Technology (MUST)",
      "October University of Modern Sciences and Arts (MSA)",
      "New Giza University (NGU)",
      "Smart Village ",
      "Mall of Egypt ",
      "Dream Park ",
    ],
    amenities: ["Palm Hills", "Sodic ", "Arab Holding ", "Hassan Allam"],
  },
];

const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
      className
    )}
  >
    {children}
  </div>
);

const BentoGridItem = ({
  title,
  description,
  header,
  className,
  onClick,
}: {
  title: string;
  description: string;
  header: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <div
    className={cn(
      "group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl",
      className
    )}
    onClick={onClick}
  >
    {header}
    <div className="p-4">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  </div>
);

export default function TopAreas() {
  const [selectedArea, setSelectedArea] = useState<number | null>(null);
  const [openTab, setOpenTab] = useState<string | null>(null);

  const handleAreaClick = (index: number) => {
    setSelectedArea(index);
    setOpenTab(null);
  };

  const closePopup = () => {
    setSelectedArea(null);
    setOpenTab(null);
  };

  const toggleTab = (tabName: string) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  return (
    <HeroHighlight>
      <section id="projects" className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-50">
            Top Areas
          </h2>
          <BentoGrid className="max-w-7xl mx-auto">
            {areas.map((area, index) => (
              <BentoGridItem
                key={area.name}
                title={area.title}
                description={area.name}
                header={
                  <div className="relative h-48 w-full border-slate-800">
                    <Image
                      src={area.image}
                      alt={area.name}
                      fill
                      // objectFit="cover"
                      className="rounded-t-xl object-cover absolute inset-0"
                    />
                  </div>
                }
                className="cursor-pointer bg-slate-100 dark:bg-slate-900 opacity-90"
                onClick={() => handleAreaClick(index)}
              />
            ))}
          </BentoGrid>
        </div>

        <AnimatePresence>
          {selectedArea !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-950 bg-opacity-50 flex items-center justify-center z-40 pt-20"
              onClick={closePopup}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg max-w-md w-full m-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closePopup}
                  className="absolute top-2 right-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-50">
                  {areas[selectedArea].name}
                </h3>
                <h4 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">
                  {areas[selectedArea].title}
                </h4>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={areas[selectedArea].image}
                    alt={areas[selectedArea].name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {areas[selectedArea].description}
                </p>
                <div className="space-y-2 ">
                  <TapItem
                    title="Key landmarks"
                    isOpen={openTab === "properties"}
                    onClick={() => toggleTab("properties")}
                  >
                    <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 grid grid-cols-2 text-sm gap-4 ">
                      {areas[selectedArea].properties.map((property, index) => (
                        <li key={index}>{property}</li>
                      ))}
                    </ul>
                  </TapItem>
                  <TapItem
                    title="Main Developers"
                    isOpen={openTab === "amenities"}
                    onClick={() => toggleTab("amenities")}
                  >
                    <ul className="list-disc  pl-5 text-slate-600 dark:text-slate-300 grid grid-cols-3 text-sm gap-7">
                      {areas[selectedArea].amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </TapItem>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </HeroHighlight>
  );
}

function TapItem({
  title,
  children,
  isOpen,
  onClick,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full py-3 px-4 text-left text-slate-900 dark:text-slate-50 font-semibold bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
        onClick={onClick}
      >
        {title}
        <ChevronDown
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-slate-50 dark:bg-slate-800">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
