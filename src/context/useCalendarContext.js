import { useContext } from 'react';
import { CalendarContext } from './CalendarContext'; 

export const useCalendarContext = () => useContext(CalendarContext);    