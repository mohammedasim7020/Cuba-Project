import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import LoginPage from "../pages/LoginPage";
import DashBoardPage from "../pages/DashBoardPage";
import BoardingScreens from "../component/nestedcomponent/BoardingScreens";
import InvitCode from "../component/nestedcomponent/InvitCode";
import PlatForms from "../component/nestedcomponent/PlatForms";
import Retailers from "../component/nestedcomponent/Retailers";
import TaskTypes from "../component/nestedcomponent/TaskTypes";
import Users from "../component/nestedcomponent/Users";
import WaitingList from "../component/nestedcomponent/WaitingList";
import Home from "../component/Home";

const RoutingPages = () => {
  return (
    <div>
      {/* <LoginPage/> */}

      <Router>
        <DashBoardPage>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<DashBoardPage />} />
            <Route path="/invitcode" element={<InvitCode />} />
            <Route path="/waitingList" element={<WaitingList />} />
            <Route path="/users" element={<Users />} />
            <Route path="/platforms" element={<PlatForms />} />
            <Route path="/boardingScreen" element={<BoardingScreens />} />
            <Route path="/taskTypes" element={<TaskTypes />} />
            <Route path="/retailers" element={<Retailers />} />
          </Routes>
        </DashBoardPage>
      </Router>
    </div>
  );
};

export default RoutingPages;
