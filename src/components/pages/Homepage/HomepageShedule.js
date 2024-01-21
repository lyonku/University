import React, { useState, useEffect, useRef, useMemo } from "react";
import moment from "moment";
import plural from "plural-ru";

import HomepageSheduleHeader from "./components/Homepage__sheduleHeader";
import HomepageSheduleTimeRow from "./components/Homepage__sheduleTimeRow";
import HomepageSheduleCarousel from "./components/Homepage__sheduleCarousel";

const HomepageShedule = ({ error, eventsData }) => {
  const [currentShedule, setCurrentShedule] = useState({});

  const getMass = (massName) => {
    const mass = eventsData[massName];
    if (mass) {
      const index = Object.keys(eventsData).indexOf(massName);
      return { mass, index };
    } else {
      return { mass, index: 1 };
    }
  };

  const handleShedule = (massName) => {
    const { mass, index } = getMass(massName); // здесь getMass - функция, которая возвращает расписание по названию
    let date = new Date();
    date.setDate(date.getDate() + index);

    timeCount(mass).then((time) => {
      setCurrentShedule({
        mass,
        name: massName,
        date,
        timeCount: time,
      });
    });
  };

  useEffect(() => {
    if (eventsData?.today) {
      handleShedule("today");
    }
  }, [eventsData]);

  const timeCount = async (day) => {
    if (day) {
      const subjectCount = plural(day?.length, "пара", "пары", "пар");
      const dayStart = moment(day[0].eventTime, "HH:mm");
      const dayEnd = moment(day[day.length - 1].eventTime, "HH:mm").add(
        90,
        "minutes"
      );
      const formattedTime = dayEnd.format("HH:mm");
      return `${day.length} ${subjectCount} c ${dayStart.format(
        "HH:mm"
      )} до ${formattedTime}`;
    }
    return "";
  };

  return (
    <div className="Homepage__schedule HomepageBlock">
      <HomepageSheduleHeader currentShedule={currentShedule} error={error} />
      {error ? (
        <div className="HomepageBlock__Error">{error}</div>
      ) : (
        <div className="HomepageBlock__body">
          <HomepageSheduleTimeRow
            currentShedule={currentShedule}
            handleShedule={handleShedule}
          />
          <HomepageSheduleCarousel currentShedule={currentShedule} />
        </div>
      )}
    </div>
  );
};

export default HomepageShedule;
