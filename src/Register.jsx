import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();   

  const handleSubmit = (e) => {
    e.preventDefault();             
    navigate("/home");  // Navigate after form submission
  }

  return (
    <div className="min-h-screen w-full bg-no-repeat bg-center bg-cover flex items-center justify-center">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-sm mx-4 py-10">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

          <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium">First Name</label>
            <input 
              type="text" 
              placeholder="Enter First Name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium">Last Name</label>
            <input 
              type="text" 
              placeholder="Enter Last Name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium">Mobile No</label>
            <input 
              type="text"
              placeholder="Enter Mobile Number"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium">Voter ID Number</label>
            <input 
              type="text" 
              placeholder="Enter Voter ID Number"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <button
            type="submit"
            className="w-full h-10 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register;
