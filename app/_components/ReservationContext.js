"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
const initialState = { to: undefined, from: undefined };
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => {
    setRange(initialState);
  };
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}
function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside the provider");
  return context;
}
export { ReservationProvider, useReservation };
