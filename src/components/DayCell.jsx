import React from "react";
import { format, isSameMonth } from "date-fns";
import { useCalendarContext } from "../context/useCalendarContext";
import toast from "react-hot-toast"

const DayCell = ({ date }) => {
  const { appointments, setSelectedDate, setShowForm, setEditingAppointment, deleteAppointment } = useCalendarContext();

  if (!date || isNaN(new Date(date))) {
    return <div className="h-24 bg-gray-100"></div>;
  }

  const handleClick = () => {
    setSelectedDate(date);
    setShowForm(true);
  };

  const handleEdit = (e, app) => {
    e.stopPropagation();
    setEditingAppointment(app);
    setShowForm(true);
  };

 const handleDelete = (e, id) => {
  e.stopPropagation();
  deleteAppointment(id);
  toast.success("Appointment deleted!");
};

  const dayAppointments = appointments.filter(
    (app) =>
      format(new Date(app.date), "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
  );

  return (
    <div onClick={handleClick}
      className={`border h-24 p-1 text-sm cursor-pointer overflow-hidden ${!isSameMonth(date, new Date()) ? "bg-gray-200 text-gray-400" : "bg-amber-50"}`} >

      <div className="font-semibold">{format(date, "d")}</div>

      <div className="mt-1 h-[70%] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
        {dayAppointments.map((app, idx) => (

          <div key={idx} className="relative bg-indigo-100 rounded p-1 text-xs font-semibold group">
            <div className="truncate text-gray-700">

              {app.patient} - {app.time}

            </div>

            <p className="text-red-500 text-xs">Booked</p>
            
            <span className="text-blue-600 text-[10px] block">
              {app.doctor} 🩺
            </span>

            <div className="absolute top-1 right-1 flex flex-col space-y-1 justify-between items-center">

              <button onClick={(e) => handleEdit(e, app)}>
                <i className="fa-solid fa-pen-to-square text-black hover:text-blue-600 text-xs hidden group-hover:block md:block cursor-pointer">
               </i>
              </button>
              <button
                onClick={(e) => handleDelete(e, app.id)}>
             <i className="fa-solid fa-trash text-red-500 hover:text-red-700 text-xs hidden group-hover:block md:block cursor-pointer"></i>
              </button>
            </div>
          </div>

        ))}

      </div>
    </div>
  );
};

export default DayCell;
