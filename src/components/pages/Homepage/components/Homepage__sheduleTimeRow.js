const HomepageSheduleTimeRow = ({ currentShedule, handleShedule }) => {
  return (
    <div className="HomepageSchedule__header">
      <div className="HomepageSchedule__btns">
        <div
          className={`HomepageSchedule__btn ${
            currentShedule?.name == "today" && "HomepageSchedule__btn_active"
          }`}
          onClick={() => handleShedule("today")}
        >
          Сегодня
        </div>
        <div
          className={`HomepageSchedule__btn ${
            currentShedule?.name == "tomorrow" && "HomepageSchedule__btn_active"
          }`}
          onClick={() => handleShedule("tomorrow")}
        >
          Завтра
        </div>
        <div
          className={`HomepageSchedule__btn ${
            currentShedule?.name == "dayAfterTomorrow" &&
            "HomepageSchedule__btn_active"
          }`}
          onClick={() => handleShedule("dayAfterTomorrow")}
        >
          Послезавтра
        </div>
      </div>
      <div className="HomepageSchedule__info">{currentShedule?.timeCount}</div>
    </div>
  );
};

export default HomepageSheduleTimeRow;
