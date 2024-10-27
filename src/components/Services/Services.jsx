import React, { useRef, useEffect } from "react";
import { GiPlunger, GiHammerNails, GiPlantWatering } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import { FaBroom, FaPaintRoller } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { MdMoveToInbox } from "react-icons/md";
import { FaTools } from "react-icons/fa"; // Import arrow icons

const ServicesData = [
  {
    id: 1,
    title: "Home Cleaning",
    link: "#",
    icon: <FaBroom />,
  },
  {
    id: 2,
    title: "Landscaping",
    link: "#",
    icon: <GiPlantWatering />,
  },
  {
    id: 3,
    title: "Plumbing",
    link: "#",
    icon: <GiPlunger />,
  },
  {
    id: 4,
    title: "Electrical",
    link: "#",
    icon: <MdElectricalServices />,
  },
  {
    id: 5,
    title: "Home Repairs",
    link: "#",
    icon: <GiHammerNails />,
  },
  {
    id: 6,
    title: "Painting",
    link: "#",
    icon: <FaPaintRoller />,
  },
  {
    id: 7,
    title: "Pest Control",
    link: "#",
    icon: <AiOutlineSafety />,
  },
  {
    id: 8,
    title: "Moving & Storage",
    link: "#",
    icon: <MdMoveToInbox />,
  },
  {
    id: 9,
    title: "Handyman Services",
    link: "#",
    icon: <FaTools />,
  },
];

const Services = () => {
  const scrollRef = useRef(null);
  
  const scrollAmount = 2; // Increased amount to scroll each time for faster effect
  const scrollSpeed = 20; // Decreased speed of the scrolling effect for faster transition

  useEffect(() => {
      const scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
            scrollRef.current.scrollLeft = 0; // Reset to the start
          }
        }
      }, scrollSpeed); // Change slides every defined interval

      return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <section style={{ backgroundColor: "white" }}>
      <div className="container pb-28 pt-24 relative"> {/* Increased bottom padding */}
        <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
        <div className="flex items-center">
          {/* Service Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-hidden gap-4"
            style={{ whiteSpace: "nowrap" }}
          >
            {/* Duplicate the services for continuous scrolling */}
            {[...ServicesData, ...ServicesData].map((service) => (
              <div
                key={service.id}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl min-w-[200px]"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes fadeInAnimation {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes moveAnimation {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-10px);
          }
        }

        .animate-move:hover {
          animation-name: moveAnimation;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
      `}</style>
      
    </section>
  );
};

export default Services;