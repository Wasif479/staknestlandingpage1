// Enable desktop notifications for Gmail.
//    OK  No, thanks
// Conversations
// 0.12 GB of 15 GB used
// Terms · Privacy · Programme Policies
// Last account activity: 5 minutes ago
// Details
// Step 2: Create the Card Component
// Create a new file for our card component, let's call it SlidingCard.js.

// *****************************************

import Image from 'next/image';
import React, { useState } from 'react';

const SlidingCard = ({ frontContent, backContent }) => {
  const [
isHovered, setIsHovered] = useState(false);

return (
<div
className="relative overflow-hidden group w-full  "
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
onClick={() => setIsHovered(!isHovered)}
 // for mobile users
>
{/* Base content */}
<div className='ml-8 mb-5'>
    <div className="transition-all   w-full h-[260px]  duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-full">
    <Image src={'/frontcard2.png'} alt=' ' width={400} height={100}/>
    
{frontContent}
</div>
</div>



  {/* Overlay content which slides up on hover */}
  <div
    className={`absolute top-0 left-0 w-full h-full ml-8 transition-all duration-300 ease-in-out transform ${
      isHovered ? 'translate-y-0' : 'translate-y-full'
    }`}
  >
    <Image src={'/backcard2.png'} alt='' width={400}  height={100} quality={100}/>
    {backContent}
  </div>
</div>
);
};

export default SlidingCard;


// ****************************************************
// php
// Copy code
// *****************************************************






// Explanation : 

// The SlidingCard component uses the useState hook to keep track of the hover state.
// When the mouse enters or leaves the card area, the hover state is updated accordingly.
// The onClick handler is also added to toggle the hover state for touch devices like mobile phones.
// The front content is always visible, and when hovered, it slides up to reveal the back content.
// Tailwind CSS classes are used for styling and transitions.
// This code will give you the sliding card effect where the top layer slides up on hover or click, revealing the content underneath.