import { Link } from "react-router-dom";
import LibraryIcon from "components/common/Images/library-icon";
import ArrowImg from "components/common/Images/arrow-img";

const HomepagelBlock = ({ link, data }) => {
  return (
    <Link to={link} className="HomepageBlock">
      <div className="HomepageBlock__header">
        <div className="HomepageBlock__wrap">
          <div className="HomepageBlock__img">
            <LibraryIcon color={"#ffffff"} />
          </div>
          <div className="HomepageBlock__info">
            <div className="HomepageBlock__title">{data.name}</div>
            <div className="HomepageBlock__text">{data.desc}</div>
          </div>
        </div>
        <div className="HomepageBlock__btn">
          <ArrowImg />
        </div>
      </div>
    </Link>
  );
};

export default HomepagelBlock;
