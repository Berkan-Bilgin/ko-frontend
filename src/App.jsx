import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EpisodeDetailPage from "./pages/EpisodeDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import CharactersPage from "./pages/CharactersPage";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/episodes/:episodeName" element={<EpisodeDetailPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/characters" element={<CharactersPage />} />
    </Routes>
  );
};

export default App;
