// import React from "react";
// import { motion } from "framer-motion";
// import { FaUser, FaSearch, FaClipboardCheck, FaClock, FaStar, FaHeadset } from "react-icons/fa"; // Added FaHeadset for support

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: <FaUser className="h-20 w-20 text-blue-500" />, // Sign Up
//       title: "Sign Up",
//       description: "Register with your phone number and verify with OTP.",
//     },
//     {
//       icon: <FaSearch className="h-20 w-20 text-blue-500" />, // Browse Services
//       title: "Browse Services",
//       description: "Search or browse through our wide range of trusted service providers.",
//     },
//     {
//       icon: <FaClipboardCheck className="h-20 w-20 text-blue-500" />, // Request Service
//       title: "Request Service",
//       description: "Select a service, view details, and request directly.",
//     },
//     {
//       icon: <FaClock className="h-20 w-20 text-blue-500" />, // Track Progress
//       title: "Track Progress",
//       description: "Get real-time updates on your service request and communicate with the provider.",
//     },
//     {
//       icon: <FaStar className="h-20 w-20 text-blue-500" />, // Complete & Review
//       title: "Complete & Review",
//       description: "Once the service is completed, leave a review to help others.",
//     },
//     {
//       icon: <FaHeadset className="h-20 w-20 text-blue-500" />, // Customer Support
//       title: "Customer Support",
//       description: "Access our support team for any queries or assistance needed.",
//     },
//   ];

//   return (
//     <section className="bg-white py-14 md:py-24"> {/* Change section background to white */}
//       <div className="container mx-auto text-center space-y-12">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-4xl font-bold"
//         >
//           How It Works
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-white hover:shadow-2xl cursor-pointer" // Change card background to gray
//             >
//               <div className="flex justify-center">{step.icon}</div>
//               <h3 className="text-xl font-semibold">{step.title}</h3>
//               <p className="text-gray-600">{step.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaSearch, FaClipboardCheck, FaClock, FaStar, FaHeadset } from "react-icons/fa"; // Added FaHeadset for support

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUser className="h-20 w-20 text-blue-500" />, // Sign Up
      title: "Sign Up",
      description: "Register with your phone number and verify with OTP.",
    },
    {
      icon: <FaSearch className="h-20 w-20 text-blue-500" />, // Browse Services
      title: "Browse Services",
      description: "Search or browse through our wide range of trusted service providers.",
    },
    {
      icon: <FaClipboardCheck className="h-20 w-20 text-blue-500" />, // Request Service
      title: "Request Service",
      description: "Select a service, view details, and request directly.",
    },
    {
      icon: <FaClock className="h-20 w-20 text-blue-500" />, // Track Progress
      title: "Track Progress",
      description: "Get real-time updates on your service request and communicate with the provider.",
    },
    {
      icon: <FaStar className="h-20 w-20 text-blue-500" />, // Complete & Review
      title: "Complete & Review",
      description: "Once the service is completed, leave a review to help others.",
    },
    {
      icon: <FaHeadset className="h-20 w-20 text-blue-500" />, // Customer Support
      title: "Customer Support",
      description: "Access our support team for any queries or assistance needed.",
    },
  ];

  return (
    <section className="bg-gray-200 py-14 md:py-24"> {/* Change section background to light gray */}
      <div className="container mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="space-y-4 p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:bg-gray-100 hover:shadow-xl cursor-pointer" // Card background set to white and hover effect added
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;