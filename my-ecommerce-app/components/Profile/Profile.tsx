// pages/profile.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import { CalendarIcon } from 'lucide-react';

interface FormData {
  gender: 'male' | 'female';
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  dateOfBirth: string;
}

export default function EditProfile() {
  const [formData, setFormData] = useState<FormData>({
    gender: 'male',
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    dateOfBirth: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-center text-2xl font-bold mb-8 border-b pb-4">EDIT PROFILE</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Gender Selection */}
        <div className="mb-6">
          <label className="block text-lg mb-2">Gender</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className="mr-2 h-4 w-4"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className="mr-2 h-4 w-4"
              />
              <span>Female</span>
            </label>
          </div>
        </div>
        
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-lg mb-2">First Name</label>
            <input title='input'
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 focus:border-black outline-none"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Last Name</label>
            <input title='input'
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 focus:border-black outline-none"
            />
          </div>
        </div>
        
        {/* Telephone */}
        <div className="mb-6">
          <label className="block text-lg mb-2">Telephone</label>
          <input title='input'
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:border-black outline-none"
          />
        </div>
        
        {/* Email */}
        <div className="mb-6">
          <label className="block text-lg mb-2">Email</label>
          <input title='input'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:border-black outline-none"
          />
        </div>
        
        {/* Date of Birth */}
        <div className="mb-8">
          <label className="block text-lg mb-2">Date of birth(DD/MM/YYYY)</label>
          <div className="relative">
            <input title='input'
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 focus:border-black outline-none"
            />
            <CalendarIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
          </div>
        </div>
        
        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
}