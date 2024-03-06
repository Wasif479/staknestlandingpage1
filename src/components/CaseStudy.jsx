// Here's a simplified version of what this might look like:

// CaseStudyCard Component: This component will display the case study information. We'll use Tailwind CSS for styling.

// Parent Component: This will house the CaseStudyCard components and manage their state, such as which card is currently being hovered over.



// ******CaseStudyCard Component (CaseStudyCard.js)*********


import React from 'react';

const CaseStudyCard = ({ title, duration, teamSize, techStack, description }) => {
  return (
    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Thumbnail and title */}
      <div className="aspect-w-16 aspect-h-9">
        <img src="/path/to/thumbnail" alt="Thumbnail" className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {/* Badges */}
        <div className="flex space-x-2 my-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Mobile App Development</span>
          <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Team of {teamSize}</span>
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">4 Months</span>
        </div>
        <p className="text-sm text-gray-700">{description}</p>
        {/* Tech Stack */}
        <ul className="flex flex-wrap items-center mt-4">
          {techStack.map((tech, index) => (
            <li key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyCard;

// ******************************************************************************************************

//Parent Component (App.js)

// ******************************************************

// import React from 'react';
// import CaseStudyCard from './CaseStudyCard';

// const App = () => {
//   const caseStudies = [
//     {
//       title: 'Bookstore App Designed For Children & Parents',
//       duration: '4 Months',
//       teamSize: 3,
//       techStack: ['React', 'Node.js', 'MySQL', 'Firebase', 'Shopify', 'GraphQL'],
//       description: 'An eBook app for parents to buy books, read digital stories, and watch animated videos with their children.',
//     },
//     // Add more case studies as needed
//   ];

//   return (
//     <div className="p-4 space-y-4">
//       {caseStudies.map((caseStudy, index) => (
//         <CaseStudyCard key={index} {...caseStudy} />
//       ))}
//     </div>
//   );
// };

// export default App;

// *******************************************************************************

// Explanation
// CaseStudyCard Component: This component accepts props like title, duration, teamSize, techStack, and description, making it reusable for different case studies. It uses Tailwind CSS classes for styling.

// Parent Component (App.js): This component renders a list of CaseStudyCard components. It holds an array of case studies, each with its own set of properties that are passed down to each CaseStudyCard.

// Tailwind CSS: Utilizes utility classes for styling, making it easy to apply responsive design, hover effects, and more.

// This setup should give you a good starting point. You can expand upon it by adding more features or refining the UI according to your needs.





