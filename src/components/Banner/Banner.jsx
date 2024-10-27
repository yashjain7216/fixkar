// import React, { useState } from "react";
// import BannerPng from "../../assets/services.png"; // Default image
// import UserFriendlyImage from "../../assets/user-friendly.png"; // Image for User-Friendly Interface
// import MultiLanguageImage from "../../assets/multi-language.png"; // Image for Multi-Language Support
// import VoiceSearchImage from "../../assets/voice-search.png"; // Image for Voice and Text Search
// import RecommendationsImage from "../../assets/recommendations.png"; // Image for Personalized Recommendations
// import { GrUserExpert } from "react-icons/gr";
// import { MdOutlineAccessTime } from "react-icons/md";
// import { FaBookReader } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Icons for accordion

// const Banner = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     if (activeIndex === index) {
//       setActiveIndex(null);
//     } else {
//       setActiveIndex(index);
//     }
//   };

//   const bannerImage = activeIndex === null ? BannerPng : 
//                       activeIndex === 0 ? UserFriendlyImage :
//                       activeIndex === 1 ? MultiLanguageImage :
//                       activeIndex === 2 ? VoiceSearchImage : 
//                       RecommendationsImage;

//   return (
//     <section style={{ backgroundColor: "#f4f4f4" }}> {/* Set the background color here */}
//       <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
//         {/* Banner Image */}
//         <div className="flex justify-center items-center">
//           <div className="relative w-full h-[500px]">
//             <motion.img
//               key={bannerImage}
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               src={bannerImage}
//               alt="Services Banner"
//               className="absolute inset-0 w-[600px] md:w-[500px] h-full object-contain"
//               style={{ opacity: 0.7 }}
//             />
//           </div>
//         </div>

//         {/* Banner Text */}
//         <div className="flex flex-col justify-center">
//           <div className="text-center md:text-left space-y-12">
//             <motion.h1
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="text-3xl md:text-4xl font-bold !leading-snug"
//             >
//               Your One-Stop Marketplace for Reliable Services
//             </motion.h1>

//             {/* Accordion Feature List */}
//             <div className="flex flex-col gap-6">
//               <AccordionItem
//                 index={0}
//                 title="User-Friendly Interface"
//                 content="Our platform provides an intuitive and simple interface, ensuring ease of use for everyone. Navigation is smooth, and features are accessible with minimal effort, making the process of finding and requesting services hassle-free."
//                 icon={<FaBookReader className="text-2xl" />}
//                 activeIndex={activeIndex}
//                 toggleAccordion={() => toggleAccordion(0)}
//               />

//               <AccordionItem
//                 index={1}
//                 title="Multi-Language Support"
//                 content="We support multiple languages to make the platform accessible to a wider audience. Whether you prefer English, Spanish, or any other language, you can interact with the app in your preferred language."
//                 icon={<GrUserExpert className="text-2xl" />}
//                 activeIndex={activeIndex}
//                 toggleAccordion={() => toggleAccordion(1)}
//               />

//               <AccordionItem
//                 index={2}
//                 title="Voice and Text Search"
//                 content="Our innovative search functionality allows you to find services using both voice and text. You can simply speak the service you are looking for or type it into the search bar, and our system will handle the rest."
//                 icon={<MdOutlineAccessTime className="text-2xl" />}
//                 activeIndex={activeIndex}
//                 toggleAccordion={() => toggleAccordion(2)}
//               />

//               <AccordionItem
//                 index={3}
//                 title="Personalized Recommendations"
//                 content="Based on your previous interactions and preferences, we offer personalized service recommendations tailored specifically to your needs. Our algorithm ensures that you get the most relevant and trusted suggestions."
//                 icon={<GrUserExpert className="text-2xl" />}
//                 activeIndex={activeIndex}
//                 toggleAccordion={() => toggleAccordion(3)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const AccordionItem = ({ index, title, content, icon, activeIndex, toggleAccordion }) => {
//   const isActive = index === activeIndex;

//   return (
//     <motion.div
//       className="p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl cursor-pointer"
//     >
//       <div onClick={toggleAccordion} className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           {icon}
//           <p className="text-lg">{title}</p>
//         </div>
//         {isActive ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
//       </div>

//       <AnimatePresence>
//         {isActive && (
//           <motion.div
//             key="content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{
//               height: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
//               opacity: { duration: 0.3, ease: "easeInOut" },
//             }}
//             className="overflow-hidden mt-4 text-gray-600"
//           >
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               <p>{content}</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Banner;


import React, { useState } from "react";
import BannerPng from "../../assets/services.png"; // Default image
import UserFriendlyImage from "../../assets/user-friendly.png"; // Image for User-Friendly Interface
import MultiLanguageImage from "../../assets/multi-language.png"; // Image for Multi-Language Support
import VoiceSearchImage from "../../assets/voice-search.png"; // Image for Voice and Text Search
import RecommendationsImage from "../../assets/recommendations.png"; // Image for Personalized Recommendations
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Icons for accordion

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const bannerImage = activeIndex === null ? BannerPng : 
                      activeIndex === 0 ? UserFriendlyImage :
                      activeIndex === 1 ? MultiLanguageImage :
                      activeIndex === 2 ? VoiceSearchImage : 
                      RecommendationsImage;

  return (
    <section style={{ backgroundColor: "white" }}> {/* Set the background color to white */}
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-full h-[500px]">
            <motion.img
              key={bannerImage}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              src={bannerImage}
              alt="Services Banner"
              className="absolute inset-0 w-[600px] md:w-[500px] h-full object-contain"
              style={{ opacity: 0.7 }}
            />
          </div>
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              Your One-Stop Marketplace for Reliable Services
            </motion.h1>

            {/* Accordion Feature List */}
            <div className="flex flex-col gap-6">
              <AccordionItem
                index={0}
                title="User-Friendly Interface"
                content="Our platform provides an intuitive and simple interface, ensuring ease of use for everyone. Navigation is smooth, and features are accessible with minimal effort, making the process of finding and requesting services hassle-free."
                icon={<FaBookReader className="text-2xl" />}
                activeIndex={activeIndex}
                toggleAccordion={() => toggleAccordion(0)}
              />

              <AccordionItem
                index={1}
                title="Multi-Language Support"
                content="We support multiple languages to make the platform accessible to a wider audience. Whether you prefer English, Spanish, or any other language, you can interact with the app in your preferred language."
                icon={<GrUserExpert className="text-2xl" />}
                activeIndex={activeIndex}
                toggleAccordion={() => toggleAccordion(1)}
              />

              <AccordionItem
                index={2}
                title="Voice and Text Search"
                content="Our innovative search functionality allows you to find services using both voice and text. You can simply speak the service you are looking for or type it into the search bar, and our system will handle the rest."
                icon={<MdOutlineAccessTime className="text-2xl" />}
                activeIndex={activeIndex}
                toggleAccordion={() => toggleAccordion(2)}
              />

              <AccordionItem
                index={3}
                title="Personalized Recommendations"
                content="Based on your previous interactions and preferences, we offer personalized service recommendations tailored specifically to your needs. Our algorithm ensures that you get the most relevant and trusted suggestions."
                icon={<GrUserExpert className="text-2xl" />}
                activeIndex={activeIndex}
                toggleAccordion={() => toggleAccordion(3)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ index, title, content, icon, activeIndex, toggleAccordion }) => {
  const isActive = index === activeIndex;

  return (
    <motion.div
      className={`p-6 rounded-2xl ${isActive ? 'bg-white' : 'bg-[#f4f4f4]'} hover:bg-white duration-300 hover:shadow-2xl cursor-pointer`} // Set background color based on active state
    >
      <div onClick={toggleAccordion} className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {icon}
          <p className="text-lg">{title}</p>
        </div>
        {isActive ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
              opacity: { duration: 0.3, ease: "easeInOut" },
            }}
            className="overflow-hidden mt-4 text-gray-600"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }} // Smooth opacity transition
            >
              <p>{content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Banner;