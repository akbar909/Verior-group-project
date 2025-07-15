// import React from 'react';
// import Signature from '../assets/Signature'
// import Shape from '../assets/Shape'
// const About = () => {
//   return (
//     <div className="min-h-screen bg-[#0D0D0D] text-white px-6 py-16 md:px-24">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">A little bit about me</h1>
//         <p className="text-gray-400 text-lg mb-12">Who I am and what I do.</p>
// <div className="relative mb-15">
//   <hr className="border-t border-gray-500 border-opacity-25" />
// </div>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Left Section */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-sm text-gray-500 tracking-widest mb-2">WHO I AM</h3>
//               <p className="text-lg">
//                 I'm <span className="font-semibold">Ehab</span> (Pronounced "Ee-hab") a multi-disciplinary front-end engineer and UI/UX designer based in Rabat, Morocco 🇲🇦.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-sm text-gray-500 tracking-widest mb-2">WHAT I DO</h3>
//               <p className="text-lg">
//                 With two years of invaluable experience in my role at Harmony Technology — a tech company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-sm text-gray-500 tracking-widest mb-2">WHAT I DID</h3>
//               <p className="text-lg">
//                 Before delving into the realm of front end engineering, I spent five years as a graphic designer. This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles.
//               </p>
//             </div>

//             {/* Footer links */}
//             <div className="text-sm text-gray-400 space-y-2">
//               <p>
//                 Feel free to reach out via <a href="mailto:ehab@example.com" className="underline">e-mail</a>, or follow me on <a href="https://twitter.com" className="underline">Twitter</a>. Want to see where I’ve worked? Check out my <a href="#" className="underline">Resume</a>, or connect with me on <a href="https://linkedin.com" className="underline">LinkedIn</a>.
//               </p>

//               <p className="pt-6 italic text-white">Let’s build something great,</p>
//               <p className="text-2xl font-signature text-white"><Signature/> </p>
//             </div>
//           </div>

//           {/* Right Section - Placeholder */}
//           <div className="flex flex-col items-center justify-start max-sm:justify-start ">
//            <Shape/>
//             <button className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition duration-300">
//               ➤ Get in touch
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from 'react';
import Signature from '../assets/Signature';
import Shape from '../assets/Shape';

const About = () => {
  return (
    <div className=" bg-[#0D0D0D] text-gray-400 px-8 py-10 md:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">A little bit about me</h1>
        <p className="text-gray-400 text-lg mb-12">Who I am and what I do.</p>

        {/* Optional: HR line */}
        <div className="relative mb-12">
          <hr className="border-t border-gray-500 border-opacity-25" />
        </div>

        <div className="grid md:grid-cols-2 gap-8  ">
          {/* Shape component: On top in small screens, right side in md+ */}
          <div className="order-1 md:order-2 flex justify-center items-start mt-0 ">
            <Shape />
          </div>

          {/* Text + Signature + Button */}
          <div className="order-2 md:order-1 space-y-8">
            {/* WHO I AM */}
            <div>
              <h3 className="text-sm text-gray-500 tracking-widest mb-2">WHO I AM</h3>
              <p className="text-lg">
                I'm <span className="font-semibold text-white">Ehab</span> (Pronounced "Ee-hab") a multi-disciplinary front-end engineer and UI/UX designer based in Rabat, Morocco 🇲🇦.
              </p>
            </div>

            {/* WHAT I DO */}
            <div>
              <h3 className="text-sm text-gray-500 tracking-widest  mb-2">WHAT I DO</h3>
              <p className="text-lg">
                With two years of invaluable experience in my role at Harmony Technology — a tech company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice.
              </p>
            </div>

            {/* WHAT I DID */}
            <div>
              <h3 className="text-sm  text-gray-500 tracking-widest mb-2">WHAT I DID</h3>
              <p className="text-lg">
                Before delving into the realm of front end engineering, I spent five years as a graphic designer. This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles.
              </p>
            </div>

            {/* Contact Links + Signature */}
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                Feel free to reach out via <a href="mailto:ehab@example.com" className="underline text-white">e-mail</a>, or follow me on <a href="https://twitter.com" className="underline text-white">Twitter</a>. Want to see where I’ve worked? Check out my <a href="#" className="underline text-white">Resume</a>, or connect with me on <a href="https://linkedin.com" className="underline text-white">LinkedIn</a>.
              </p>

              <p className="pt-6 italic text-white">Let’s build something great,</p>
              <p className="text-2xl font-signature text-white"><Signature /></p>
            </div>

            {/* Button for small screens */}
            <div>
              <button className="mt-2 px-2 py-2 border border-white rounded-md  transition duration-300">
                ➤ Get in touch
              </button>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default About;

