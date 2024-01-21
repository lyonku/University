import React, { useState, useEffect, useRef } from "react";
import "./Homepage.css";
import HomepageHeader from "./components/Homepage__header";
import HomepageBlock from "./components/Homepage__block";
import HomepageShedule from "./HomepageShedule";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const { userData, userGetStatus, eventsData, error } = useSelector(
    (state) => state.user
  );

  return (
    <div className="Homepage">
      <HomepageHeader user={userData} userGetStatus={userGetStatus} />
      <div className="Homepage__body">
        <HomepageShedule error={error} eventsData={eventsData} />
        <div className="HomepageBlocks_small">
          <HomepageBlock
            link="Zachetka"
            data={{ name: "Зачетка", desc: "До зачетов еще 4 месяца" }}
          />
          <HomepageBlock
            link="Library"
            data={{ name: "Библиотека", desc: "Учебные материалы" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
