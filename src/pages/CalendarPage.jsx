import React from "react";
import Calendar from "../components/Calendar";
import DayView from "../components/DayView";
import AppointmentForm from "../components/AppointmentForm";
import useIsMobile from "../hooks/UseIsMobile";
import { useCalendarContext } from "../context/useCalendarContext";

const CalendarPage = () => {
  const {appointments, setSelectedDate, showForm, setShowForm, setAppointments, } = useCalendarContext();

  const isMobile = useIsMobile();

  const handleSaveAppointment = (appointment) => {
    const updated = [...appointments, appointment];
    setAppointments(updated);
    setShowForm(false);
  };

  return (
     <>
     
    <div className="px-8 py-8 min-h-screen overflow-auto">
      <h4 className="text-2xl font-semibold text-center my-5">
        Welcome to Your <span className="text-blue-700">Appointment Desk</span>
      </h4>

      {isMobile ? (
        <DayView />
      ) : (
        <Calendar onDateClick={(date) => {
            setSelectedDate(date);
            setShowForm(true);
          }}
        />
      )}

      {appointments?.length === 0 && (
        <p className="text-sm text-red-500 font-semibold text-center my-5">
          No appointments yet!
        </p>
      )}

      {showForm && (
        <AppointmentForm onSave={handleSaveAppointment}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>

    <footer className="my-5  text-center font-medium">
        <span className="text-black " style={{fontSize:"14px"}}>&copy; 2025 ClinicFlow. All rights reserved.</span>
      </footer>

     </>
  );
};

export default CalendarPage;






