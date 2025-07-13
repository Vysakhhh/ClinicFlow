import React from "react";
import patients from "../../data/patients.json";

const PatientSelector = ({ value, onChange }) => (

  <div>
    <label className="block mb-1 text-sm text-gray-700">Patient</label>
    
    <select name="patient" value={value} onChange={onChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition" >
      <option value="">Select Patient</option>
      {patients.map((p) => (
        <option key={p} value={p}>
          {p}
        </option>
      ))}
    </select>
  </div>

);

export default PatientSelector;
