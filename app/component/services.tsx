import { FocusCards } from "@/components/ui/focus-cards";

export default function Services() {
  const cards = [
    {
      title: "Property Consultation & Listing",
      description:
        "We provide professional advice and a tailored list of properties suited to your preferences and budget.",
      src: "/service(1).jpg",
    },
    {
      title: "Property Investment Consultancy",
      description:
        "We provide reliable advice to help you make smart property investment decisions.",
      src: "/service(2).jpg",
    },
    {
      title: "Leasing",
      description:
        "We help you find and secure leasing options that match your lifestyle & requirements.",
      src: "/service(3).jpg",
    },
    {
      title: "Property Management",
      description:
        "We offer property management services to ensure your property is well-maintained and operates smoothly.",
      src: "/service(4).jpg",
    },
  ];

  return (
    <section
      id="services"
      className=" dark:bg-slate-800 bg-slate-100 relative overflow-hidden py-32 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
          OUR SERVICES
        </h2>
        <h3 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          Dedicated to delivering excellence in every step of the process
        </h3>

        <FocusCards cards={cards} />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-slate-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </section>
  );
}
