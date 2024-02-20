import "./App.css";
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Techniques from "./pages/techniques/Techniques";
import Tools from "./pages/tools/Tools";
import Platforms from "./pages/platforms/Platforms";
import LanguagesAndFrameworks from "./pages/languagesandframeworks/LanguagesAndFrameworks";

const pages = [
  { path: "/", component: HomePage },
  { path: "/techniques", component: Techniques },
  { path: "/tools", component: Tools },
  { path: "/platforms", component: Platforms },
  {
    path: "/languagesandframeworks",
    component: LanguagesAndFrameworks,
  },
];

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <Router>
        <Routes>
          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<page.component />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <div className="footer">
        © {currentYear} Sentioza LLC. All rights reserved.
      </div>
    </Fragment>
  );
}

export default App;
