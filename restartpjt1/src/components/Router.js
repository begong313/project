import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Diary from "../routes/Diary";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import TODO from "../routes/Todo";
import Navigation from "./Navigation";
import Title from "./Title";

const AppRouter = () => {
  return (
    <Router>
      <Title />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/TODO" element={<TODO />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
