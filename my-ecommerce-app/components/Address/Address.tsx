import React from 'react'

const Address = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 relative">
      {/* Close button */}
      <button className="absolute top-2 right-2" title='cross'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Heading with lines */}
      <div className="flex items-center w-full mt-6 mb-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <h2 className="mx-4 text-xl font-bold uppercase">ADDRESS</h2>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
      
      {/* Add Address button */}
      <div className="flex justify-center mb-6">
        <button className="w-full max-w-md px-8 py-3 border-2 border-gray-950 uppercase font-medium text-sm">
          ADD ADDRESS
        </button>
      </div>
      
      {/* Address entry */}
      <div className="mb-4 relative">
        <div className="mb-1">
          <h3 className="text-base font-bold">HENGLAY</h3>
          <p className="text-sm text-gray-700">Phnom Penh, Cambodia</p>
          <p className="text-sm text-gray-700">010328281</p>
        </div>
        
        {/* Edit button - positioned to the right */}
        <button className="absolute top-0 right-0 p-2" title='editButton'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>
        
        {/* Horizontal line */}
        <div className="h-px bg-gray-300 w-full mt-2"></div>
      </div>
    </div>
  );
};

export default Address
