import React from 'react';
import CaseStudyCard from './CaseStudy';


const Parent = () => {
  const caseStudies = [
    {
      title: 'Bookstore App Designed For Children & Parents',
      duration: '4 Months',
      teamSize: 3,
      techStack: ['React', 'Node.js', 'MySQL', 'Firebase', 'Shopify', 'GraphQL'],
      description: 'An eBook app for parents to buy books, read digital stories, and watch animated videos with their children.',
    }, {
      title: 'Bookstore App Designed For Children & Parents',
      duration: '4 Months',
      teamSize: 3,
      techStack: ['React', 'Node.js', 'MySQL', 'Firebase', 'Shopify', 'GraphQL'],
      description: 'An eBook app for parents to buy books, read digital stories, and watch animated videos with their children.',
    },
    // Add more case studies as needed
  ];

  return (
    <div className="p-4 space-y-4">
      {caseStudies.map((caseStudy, index) => (
        <CaseStudyCard key={index} {...caseStudy} />
      ))}
    </div>
  );
};

export default Parent;
