import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsList from "./components/NewsList";
import EditNews from "./components/EditNews";

function App() {
  return (
    <Router>
      <div>
        <h1>News Application</h1>
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/edit/:id" element={<EditNews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;