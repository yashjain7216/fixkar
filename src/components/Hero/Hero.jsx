// import React from "react"; 
// import Navbar from "../Navbar/Navbar";
// import Blob from "../../assets/blob.svg";
// import HeroVideo from "../../assets/Landing page.webm"; // Update the path with your WebM video file name
// import { motion } from "framer-motion";
// import googlePlay from "../../assets/google-play.svg"; // Import Google Play logo
// import appleStore from "../../assets/apple-store.svg"; // Import Apple Store logo

// // FadeUp animation utility
// export const FadeUp = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       y: 50,
//     },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         duration: 0.5,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };

// const Hero = () => {
//   return (
//     <section
//       className="bg-gray-700 overflow-hidden relative" // Changed to a lighter gray background color
//       style={{
//         border: "none",
//         boxShadow: "none",
//         marginBottom: 0,
//         paddingTop: "90px", // Increased padding to fully clear the navbar
//       }}
//     >
//       {/* Fixed Navbar */}
//       <Navbar />

//       {/* Hero Content */}
//       <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative z-10"> {/* z-10 added */}
//         {/* Brand Info */}
//         <div className="flex flex-col justify-center py-14 md:py-0">
//           <div className="text-center md:text-left space-y-8 lg:max-w-[400px]">
//             <motion.h1
//               variants={FadeUp(0.6)}
//               initial="initial"
//               animate="animate"
//               className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-snug text-white" // Changed text color to white for better contrast
//             >
//               Your Local Service Hub
//             </motion.h1>
//             <motion.p
//               variants={FadeUp(0.8)}
//               initial="initial"
//               animate="animate"
//               className="text-lg md:text-xl text-primary" // Changed text color on hover
//               // Replace text-primary with your button hover class if different
//             >
//               Quickly connect with trusted providers in your area.
//             </motion.p>
//             <motion.p
//               variants={FadeUp(1)}
//               initial="initial"
//               animate="animate"
//               className="text-lg text-gray-200" // Adjusted text color for readability
//             >
//               Using voice commands or a quick click, all in your language.
//             </motion.p>
//             <motion.div
//               variants={FadeUp(1.2)}
//               initial="initial"
//               animate="animate"
//               className="flex justify-center md:justify-start"
//             >
//               {/* Replacing the Download Now button with store links */}
//               <a href="#" className="mr-4 hover:scale-105 transition-transform duration-200">
//                 <img src={appleStore} alt="Download on the Apple Store" className="h-10" />
//               </a>
//               <a href="#" className="hover:scale-105 transition-transform duration-200">
//                 <img src={googlePlay} alt="Get it on Google Play" className="h-10" />
//               </a>
//             </motion.div>
//           </div>
//         </div>

//         {/* Hero Video */}
//         <div className="flex justify-center items-center">
//           <motion.video
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
//             src={HeroVideo} // Use the WebM video file here
//             autoPlay
//             loop
//             muted
//             disablePictureInPicture // Disable picture-in-picture feature
//             controlsList="nodownload" // Prevent downloading the video
//             className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
//             style={{ border: "none", boxShadow: "none" }} // Ensure no border or shadow is present
//           />
//           <motion.img
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
//             src={Blob}
//             alt=""
//             className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react"; 
import Navbar from "../Navbar/Navbar";
import Blob from "../../assets/blob.svg";
import HeroGIF from "../../assets/Landing page.gif"; // Updated the path with your GIF file name
import { motion } from "framer-motion";
import googlePlay from "../../assets/google-play.svg"; // Import Google Play logo
import appleStore from "../../assets/apple-store.svg"; // Import Apple Store logo

// FadeUp animation utility
export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section
      className="bg-gray-700 overflow-hidden relative" // Changed to a lighter gray background color
      style={{
        border: "none",
        boxShadow: "none",
        marginBottom: 0,
        paddingTop: "90px", // Increased padding to fully clear the navbar
      }}
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative z-10"> {/* z-10 added */}
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0">
          <div className="text-center md:text-left space-y-8 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-snug text-white" // Changed text color to white for better contrast
            >
              Your Local Service Hub
            </motion.h1>
            <motion.p
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="text-lg md:text-xl text-primary" // Changed text color on hover
            >
              Quickly connect with trusted providers in your area.
            </motion.p>
            <motion.p
              variants={FadeUp(1)}
              initial="initial"
              animate="animate"
              className="text-lg text-gray-200" // Adjusted text color for readability
            >
              Using voice commands or a quick click, all in your language.
            </motion.p>
            <motion.div
              variants={FadeUp(1.2)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              {/* Replacing the Download Now button with store links */}
              <a href="#" className="mr-4 hover:scale-105 transition-transform duration-200">
                <img src={appleStore} alt="Download on the Apple Store" className="h-10" />
              </a>
              <a href="#" className="hover:scale-105 transition-transform duration-200">
                <img src={googlePlay} alt="Get it on Google Play" className="h-10" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Hero GIF */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroGIF} // Use the updated GIF file here
            alt="Hero Animation"
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
            style={{ border: "none", boxShadow: "none" }} // Ensure no border or shadow is present
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;