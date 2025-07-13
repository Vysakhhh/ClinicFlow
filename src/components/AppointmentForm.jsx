import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import { useCalendarContext } from "../context/useCalendarContext";
import { v4 as uuidv4 } from "uuid";
import PatientSelector from "./appointments/PatientSelector";
import DoctorSelector from "./appointments/DoctorSelector";
import TimeSelector from "./appointments/TimeSelector";

const AppointmentForm = () => {

  const {selectedDate, showForm, setShowForm, editingAppointment, setEditingAppointment, addAppointment,
     updateAppointment } = useCalendarContext();

  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    hour: "",
    minute: "",
  });

  useEffect(() => {
    if (editingAppointment) {
      const [hour, minute] = editingAppointment.time.split(":");
      setFormData({
        patient: editingAppointment.patient,
        doctor: editingAppointment.doctor,
        hour,
        minute,
      });
    } else {
      setFormData({ patient: "", doctor: "", hour: "", minute: "" });
    }
  }, [editingAppointment]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { patient, doctor, hour, minute } = formData;
    if (!patient || !doctor || hour === "" || minute === "") {
      toast.error("Please fill all fields.");
      return;
    }

    const time = `${hour}:${minute}`;
    const appointmentData = {
      ...formData,
      time,
      date: editingAppointment ? editingAppointment.date : selectedDate,
      id: editingAppointment ? editingAppointment.id : uuidv4(),
    };

    if (editingAppointment) {
      updateAppointment(appointmentData);
      toast.success("Appointment updated!");
    } else {
      addAppointment(appointmentData);
      toast.success("Appointment saved!");
    }

    setFormData({ patient: "", doctor: "", hour: "", minute: "" });
    setEditingAppointment(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setEditingAppointment(null);
    setShowForm(false);
  };

  if (!showForm) return null;

  return (

   <>
   
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">

          {editingAppointment ? "Edit Appointment" : "Add Appointment"} <br />
          
          <span className="text-sm text-gray-500">
            {format(selectedDate, "PPP")}
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <PatientSelector value={formData.patient} onChange={handleChange} />
          <DoctorSelector value={formData.doctor} onChange={handleChange} />
          <TimeSelector
            hour={formData.hour}
            minute={formData.minute}
            onChange={handleChange}
          />

          <div className="flex justify-between items-center pt-2">
            <button
              type="button"
              onClick={handleCancel}
              className="text-sm text-red-500 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition cursor-pointer"
            >
              {editingAppointment ? "Update Appointment" : "Save Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
   
   
   </>
  );
};

export default AppointmentForm;



