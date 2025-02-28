// components/AddressModal.js
import { useState } from 'react';
import { Pencil, X } from 'lucide-react';

const AddressModal = ({ isOpen, onClose, savedAddresses = [] }) => {
  // If no addresses are provided, use a default example
  const [addresses, setAddresses] = useState(savedAddresses.length > 0 ? savedAddresses : [
    {
      id: 1,
      name: 'HENGLAY',
      location: 'Phnom Penh, Cambodia',
      phone: '010328281'
    }
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col p-6 z-50">
      {/* Header with title and close button */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1"></div> {/* Empty div for centering */}
        <h2 className="text-xl font-bold text-center flex-1">ADDRESS</h2>
        <div className="flex-1 flex justify-end">
          <button 
            onClick={onClose}
            className="p-1"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Add Address Button */}
      <div className="mt-4 mb-8">
        <button 
          className="w-full border-2 border-black py-3 font-semibold hover:bg-gray-100 transition duration-200"
        >
          ADD ADDRESS
        </button>
      </div>

      {/* Saved Addresses */}
      <div className="flex-1">
        {addresses.map((address) => (
          <div key={address.id} className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">{address.name}</h3>
                <p className="text-gray-800">{address.location}</p>
                <p className="text-gray-800">{address.phone}</p>
              </div>
              <button className="p-1" title='cross'>
                <Pencil size={18} />
              </button>
            </div>
            <div className="mt-3 border-b border-gray-300 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressModal;