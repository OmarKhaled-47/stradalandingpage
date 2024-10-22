import { motion } from "framer-motion";
import { HousePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { TbHomeSearch } from "react-icons/tb";

export default function WhoAreWe() {
  const points = [
    {
      text: "Tailored Property Solutions",
      icon: (
        <TbHomeSearch className=" w-36 h-24 text-indigo-600 dark:text-indigo-400 mr-6" />
      ),
      describe:
        "We provide tailored support to help you find a property that matches your preferences and lifestyle, while offering customized strategies to maximize the value of your property investments.",
    },
    {
      text: "Expert knowledge & Market Insights",
      icon: (
        <HousePlus className="w-20 h-16 text-indigo-600 dark:text-indigo-400 mr-6" />
      ),
      describe:
        "Leverage our extensive real estate expertise to make informed decisions on your next home or investment.",
    },
  ];
  return (
    <HeroHighlight>
      <section id="about" className="py-36 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
            WHO ARE WE
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: [-20, 5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
            >
              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border dark:border-neutral-800",
                  "bg-[url(/about-1.jpg)] bg-cover",

                  "before:bg-[url(/about-gif-1.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                  "hover:bg-[url(/about-gif-1.gif)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "transition-all duration-500 relative rounded-lg overflow-hidden col-span-1 row-span-2"
                )}
              ></div>

              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-48 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border  dark:border-neutral-800",
                  "bg-[url(/about-2.jpg)] bg-cover",
                  "before:bg-[url(/about-gif-2.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                  "hover:bg-[url(/about-gif-2.gif)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "transition-all duration-500 relative rounded-lg overflow-hidden"
                )}
              ></div>

              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-44 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border dark:border-neutral-800",
                  "bg-[url(/about-3.jpg)] bg-cover",
                  "before:bg-[url(/about-gif-3.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                  "hover:bg-[url(/about-gif-3.gif)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "transition-all duration-500 relative rounded-lg overflow-hidden"
                )}
              ></div>
            </motion.div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                The Road To your New Home
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                At Strada Properties, we help you find the home that’s right for
                you. Whether you’re looking for a modern family home, a luxury
                villa, or a stylish apartment, our services are tailored to your
                specific needs.
              </p>

              <div className="space-y-4">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-lg flex items-centers"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {point.icon}

                    <div>
                      <h4 className="font-bold text-blue-600 text-lg mb-1">
                        {point.text}
                      </h4>
                      <p className="text-slate-800 dark:text-slate-100 text-sm font-light">
                        {point.describe}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeroHighlight>
  );
}
