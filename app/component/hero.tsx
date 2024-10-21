import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
interface HeroProps {
  theme: string;
}
export default function Hero({ theme }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/hero (1).jpg",
    "/hero (2).jpg",
    "/hero (3).jpg",
    "/hero (4).jpg",
  ];

  const developers = [
    { name: "CRED", logo: "/CRED.png", lightLogo: "/CRED-light.png" },
    {
      name: "Hassan Allam",
      logo: "/Hassan Allam.png",
      lightLogo: "/Hassan Allam-light.png",
    },
    {
      name: "IL CAZAR",
      logo: "/IL CAZAR.png",
      lightLogo: "/IL CAZAR-light.png",
    },
    { name: "LMD", logo: "/LMD.png", lightLogo: "/LMD-light.png" },
    { name: "ORA", logo: "/ORA.png", lightLogo: "/ORA-light.png" },
    { name: "CRED", logo: "/CRED.png", lightLogo: "/CRED-light.png" },
    {
      name: "Hassan Allam",
      logo: "/Hassan Allam.png",
      lightLogo: "/Hassan Allam-light.png",
    },
    {
      name: "IL CAZAR",
      logo: "/IL CAZAR.png",
      lightLogo: "/IL CAZAR-light.png",
    },
    { name: "LMD", logo: "/LMD.png", lightLogo: "/LMD-light.png" },
    { name: "ORA", logo: "/ORA.png", lightLogo: "/ORA-light.png" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
  const headwords = ["Home", "Dream", "Luxury", "Future"];
  const descriptwords = `Explore luxury properties that suit your every need. Whether you're looking for your first home, a vacation retreat, or an investment opportunity, we’re here to assist. Count on us for advanced technology, quality service, and personalized care.`;
  return (
    <section
      id="home"
      className=" dark:bg-slate-800 bg-slate-100 py-28 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white ">
            Where The Road Leads You
            <FlipWords words={headwords} />
          </h1>

          <TextGenerateEffect words={descriptwords} />

          <motion.button
            onClick={() =>
              document
                .getElementById("contact us")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-slate-800 dark:bg-slate-300 text-slate-300 dark:text-slate-800 px-20 py-7 rounded-full font-semibold mt-10 relative overflow-hidden group"
            whileHover="hover"
          >
            <motion.div
              initial={{ x: "100%", opacity: 1 }}
              variants={{
                hover: {
                  x: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                },
              }}
            />
            <motion.span
              className="absolute inset-0 w-full h-full flex items-center justify-center"
              initial={{ x: 0 }}
              variants={{
                hover: {
                  x: "-100%",
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              Explore Now
            </motion.span>
            <motion.span
              className="absolute inset-0 w-full h-full flex items-center justify-center text-black dark:text-white text-2xl"
              initial={{ x: "100%" }}
              variants={{
                hover: {
                  x: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              🔍
            </motion.span>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="md:w-1/2 relative"
        >
          <Image
            src={slides[currentSlide]}
            alt="Property"
            width={600}
            height={400}
            className="rounded-lg shadow-lg transition-opacity duration-500"
          />
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="text-gray-800 dark:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
          >
            <ChevronRight className="text-gray-800 dark:text-white" />
          </button>
          <div className="absolute bottom-4 left-1/2  transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide
                    ? "bg-indigo-600"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 overflow-hidden">
        <h3 className="text-center text-gray-600 dark:text-gray-300 mb-4">
          Trusted by 100+ companies across Egypt!
        </h3>
        <motion.div
          className="flex gap-5 pt-3"
          animate={{
            x: [0, -100 * developers.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...developers, ...developers].map((developer, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[100px] mx-4 gap-10"
            >
              <Image
                src={theme === "dark" ? developer.lightLogo : developer.logo}
                alt={developer.name}
                width={100}
                height={50}
                className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-none  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </section>
  );
}
