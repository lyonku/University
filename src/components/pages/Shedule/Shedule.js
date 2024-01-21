import React, { useState, useEffect } from "react";
import "./Shedule.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import allLocales from "@fullcalendar/core/locales-all";

const Shedule = ({}) => {
  const handleEventClick = (clickInfo) => {
    console.log(clickInfo);
  };

  return (
    <div className="Shedule">
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth",
        }}
        locales={allLocales}
        locale={"ru"}
        weekends={true}
        events={[
          {
            allDay: false,
            end: "2023-04-19T9:30:00+03:00",
            start: "2023-04-19T10:30:00+03:00",
            title: "Основы криптографии",
          },
          {
            allDay: false,
            end: "2023-04-19T10:50:00+03:00",
            start: "2023-04-19T11:30:00+03:00",
            title: "Математика",
          },
        ]}
        displayEventEnd={true}
        eventDisplay={"list-item"}
        dayMaxEvents={true}
        eventClick={handleEventClick}
        eventAdd={function () {
          console.log("add");
        }}
      />
    </div>
  );
};

export default Shedule;
