import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsContainer from "./components/NewsContainer";

const App = () => {
  return (
    <div>
      <Router>
      <Nav />
        <Routes>
          {/* Add routes here */}
          <Route path="/" element={<NewsContainer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
