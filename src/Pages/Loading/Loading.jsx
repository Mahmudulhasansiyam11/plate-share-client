// import React from 'react';

// const Loading = () => {
//     return (
//         <div className='min-h-screen flex justify-center items-center'>
//             <span className="loading loading-bars loading-xl text-white"></span>
//         </div>
//     );
// };

// export default Loading;

import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center relative bg-[linear-gradient(135deg,#FFEDBC,#FFD3B6,#FFAAA5)] overflow-hidden">
      {/* Glowing Background Circles */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-green-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* Spinner and Text */}
      <div className="relative flex flex-col items-center">
        <div className="w-20 h-20 border-8 border-t-8 border-amber-400 border-t-green-500 rounded-full animate-spin shadow-lg"></div>

        <h2 className="mt-8 text-2xl md:text-3xl font-bold text-green-800 drop-shadow-sm">
          Loading Deliciousness... 🍛
        </h2>

        <p className="mt-2 text-gray-700 text-base md:text-lg max-w-sm">
          Please wait while we prepare something tasty for you.
        </p>
      </div>

      {/* Floating Food Emojis */}
      <div className="absolute top-10 left-10 text-4xl opacity-30 animate-bounce">🥗</div>
      <div className="absolute bottom-16 right-12 text-5xl opacity-30 animate-pulse">🍔</div>
      <div className="absolute top-1/2 left-1/4 text-4xl opacity-20 animate-spin-slow">🍱</div>
    </div>
  );
};

export default Loading;
