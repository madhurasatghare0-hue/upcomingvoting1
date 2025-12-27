import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();   

  const handleSubmit = (e) => {
    e.preventDefault();             
    navigate("/home");              
  };

  return (
    <div className="min-h-screen w-full bg-no-repeat bg-center bg-cover flex items-center justify-center">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-sm mx-4 py-10">
       
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>

          <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium">Name</label>
            <input type="text" 
              placeholder="Enter Name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400" />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium">Mobile No</label>
            <input 
             type="text"
             placeholder="Enter Mobile Number"
             className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400" />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium">Voter ID Number</label>
            <input type="text"
            placeholder="Voter ID Number"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400" />
          </div>

          <button
            type="submit"
            className="w-full h-10 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Submit
          </button>

          

        <p className="text-center text-sm mt-4">
        Don't have an account?
        <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline ml-1">
            Register
        </span>
        </p>
        </form>
        
       
      </div>
    </div>
  )
}

export default Login

