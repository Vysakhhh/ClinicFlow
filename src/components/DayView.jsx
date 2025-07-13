import React, { useEffect } from "react";
import { format } from "date-fns";
import { useCalendarContext } from "../context/useCalendarContext";
import useIsMobile from "../hooks/UseIsMobile";
import toast from "react-hot-toast"


const DayView = () => {
  const { selectedDate: day, setSelectedDate, appointments, setShowForm, setEditingAppointment, deleteAppointment} = useCalendarContext();

  const isMobile = useIsMobile();


    useEffect(() => {
    if (isMobile && !day) {
      setSelectedDate(new Date());
    }
  }, [isMobile, day, setSelectedDate]);

  const dayAppointments = appointments.filter(
    (a) =>
      format(new Date(a.date), "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
  );

  const handleEdit = (app) => {
    setEditingAppointment(app);
    setShowForm(true);
  };

   const handleDelete = (id) => {
    deleteAppointment(id);
    toast.success("Appointment deleted!");
  };


  return (

     <>
     <div className="p-4 bg-amber-200 rounded-xl shadow-md">
      <input
        type="date"
        value={format(day, "yyyy-MM-dd")}
        onChange={(e) => setSelectedDate(new Date(e.target.value))} 
         className="mb-4 p-2 border rounded"/>

      <h2 className="text-lg font-semibold mb-2 text-blue-600">
        {format(day, "EEEE, d MMMM yyyy")}
      </h2>

      {dayAppointments.length === 0 ? (
        <p className="text-gray-800">No appointments</p>
      ) : (
        dayAppointments.map((app, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center text-sm mb-2 bg-white p-2 rounded shadow-sm"
          >
            <div>
              <span className="font-medium">{app.patient}</span> - {app.time}
            </div>

            <div className="flex items-center space-x-2">
              <button onClick={() => handleEdit(app)} title="Edit">
                <i className="fa-solid fa-pen-to-square text-black hover:text-blue-600 text-xs cursor-pointer"></i>
              </button>
              <button onClick={() => handleDelete(app.id)} title="Delete">
                <i className="fa-solid fa-trash text-red-500 hover:text-red-700 text-xs cursor-pointer"></i>
              </button>
            </div>
          </div>
        ))
      )}

      <button onClick={() => {
          setEditingAppointment(null);
          setShowForm(true);}}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" >
        + Add Appointment
      </button>
      
    </div>
     
     </>
  );
};

export default DayView;




