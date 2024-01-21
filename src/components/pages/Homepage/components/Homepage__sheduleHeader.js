import ScheduleIcon from "components/common/Images/schedule-icon";
import ArrowImg from "components/common/Images/arrow-img";
import { useNavigate } from "react-router-dom";

const HomepageSheduleHeader = ({ currentShedule, error }) => {
  const navigate = useNavigate();
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timezone: "UTC",
  };

  return (
    <div className="HomepageBlock__header">
      <div className="HomepageBlock__wrap">
        <div className="HomepageBlock__img">
          <ScheduleIcon color={"#ffffff"} />
        </div>
        <div className="HomepageBlock__info">
          <div className="HomepageBlock__title">Мое расписание</div>
          <div className="HomepageBlock__text">
            {currentShedule?.date?.toLocaleString("ru", options)}
          </div>
        </div>
      </div>
      {!error && (
        <div
          className="HomepageBlock__btn"
          onClick={() => {
            navigate("/Shedule");
          }}
        >
          {window.innerWidth < 600 ? "Календарь" : "Полное расписание"}
          <ArrowImg color={"#ffffff"} />
        </div>
      )}
    </div>
  );
};

export default HomepageSheduleHeader;
