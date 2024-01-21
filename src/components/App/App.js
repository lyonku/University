import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "components/pages/Login";
import Main from "components/pages/Main";
import Shedule from "components/pages/Shedule";
import Library from "components/pages/Library";
import Profile from "components/pages/Profile";
import Settings from "components/pages/Settings";
import PrivateRoutes from "utils/PrivateRoutes";
import Homepage from "components/pages/Homepage/";
import LibraryBookPage from "components/pages/LibraryBookPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Homepage />} />
          <Route path="Shedule" element={<Shedule />} />
          <Route path="Library" element={<Library />} />
          <Route path="Library/*" element={<LibraryBookPage />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
