import "./App.css";
import React, { useState } from "react";
import { Calendar } from "../../components/ui/calendar";

const App = () => {
  const [date, setDate] = useState(new Date())
 
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
)
}

export default App