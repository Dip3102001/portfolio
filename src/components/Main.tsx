import React from 'react';

const MainContent:React.FC = () => {
  return (
    <div className="card bg-base-100 shadow-xl w-full md:w-3/5 lg:w-2/5 p-6">
      <div className="card-body">
        <h1 className="card-title text-3xl font-bold">Welcome to My Responsive Page</h1>
        <p className="mt-4 text-lg">
          This content is centered and takes 60% width on larger screens, but expands to full width on smaller devices.
        </p>
      </div>
    </div>
  );
};

export default MainContent;