import { useState } from "react";

export default function Header() {

  const [role, setRole] = useState("Admin");

  return (
    <div className="w-full h-16 flex items-center justify-between px-6 
    bg-white border-b shadow-xl  border-gray-300">

      <div className="relative w-80">
        <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">
          search
        </span>

        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-3 py-2 rounded-lg 
          bg-gray-200 text-gray-600 border border-gray-100 
          focus:outline-none focus:border-gray-600"
        />
      </div>

      <div className="flex items-center gap-4">

   
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-100">
          <span className="text-gray-600 text-sm">Role:</span>

          <select
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            className="bg-transparent text-gray-500 outline-none"
          >
            <option className="bg-white">Admin</option>
            <option className="bg-white">Viewer</option>
          </select>
        </div>


        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700  px-4 py-2 rounded-lg">


          Add Transaction
        </button>

      </div>
    </div>
  );
}
