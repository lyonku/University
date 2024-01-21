import "./Loader.css";

const Loader = () => {
  return (
    <div className="Loader">
      {" "}
      <svg viewBox="25 25 50 50" className="Loader__wrap">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Loader;
