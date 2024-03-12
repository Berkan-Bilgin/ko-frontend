import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EpisodeDetailPage from "./pages/EpisodeDetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/episodes/:episodeName" element={<EpisodeDetailPage />} />
    </Routes>
  );
};

export default App;
