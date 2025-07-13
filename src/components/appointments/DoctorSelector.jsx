import React from "react";
import doctors from "../../data/doctors.json";

const DoctorSelector = ({ value, onChange }) => (
  
  <div>
    <label className="block mb-1 text-sm text-gray-700">Doctor</label>
    
    <select name="doctor" value={value} onChange={onChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition" >
      <option value="">Select Doctor</option>
      {doctors.map((d) => (
        <option key={d} value={d}>
          {d}
        </option>
      ))}
    </select>
  </div>
);

export default DoctorSelector;
