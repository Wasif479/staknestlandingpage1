// BoxComponent.js
import { RiUserFill } from 'react-icons/ri';

import React from 'react';



const BoxComponent = () => {
  return (
    <div className="relative  p-4">
    <div className="absolute top-0 left-5">
      <RiUserFill className="text-blue-500 text-4xl " />
    </div>
    <div className="border border-gray-500 h-40 w-40">
        hello
    </div>
  </div>
  );
}

export default BoxComponent;
