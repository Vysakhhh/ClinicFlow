import React from "react";


const TimeSelector = ({ hour, minute, onChange }) => {

  const generateHours = () => {
  const hours = [];
  for (let i = 0; i < 12; i++) {
    const hour = i < 10 ? "0" + i : "" + i;
    hours.push(hour);
  }
  return hours;
};

const generateMinutes = () => {
  const minutes = [];
  for (let i = 0; i < 12; i++) {
    const min = i * 5;
    const minute = min < 10 ? "0" + min : "" + min;
    minutes.push(minute);
  }
  return minutes;
};

  const hours = generateHours();
  const minutes = generateMinutes();

  return (
   <>
   
    <div>
      <label className="block mb-1 text-sm text-gray-700">Time</label>
      
      <div className="flex space-x-2">
        <select name="hour" value={hour} onChange={onChange}  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition w-24">
          <option value="">Hour</option>
          {hours.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>

        <select name="minute" value={minute} onChange={onChange} className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition" >

          <option value="">Minute</option>
          {minutes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
    </div>
   
   </>
  );
};

export default TimeSelector;
