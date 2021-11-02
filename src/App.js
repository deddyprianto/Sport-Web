import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Data from "./components/Home/Data";
import Navbar from "./components/Layout/Navbar";

const Cari = lazy(() => import("./components/Home/Cari"));
const Location = lazy(() => import("./components/Location"));

// bc219ef74c3adef5fb79e356e59a3748

const App = () => {
  return (
    <Suspense
      fallback={<h1 className="text-gray-700 text-center">Loading...</h1>}
    >
      <Router>
        <div className="grid grid-cols-13 md:grid-cols-14">
          <Navbar />
          <Switch>
            <Route path="/location">
              <Location />
            </Route>
            <Route path="/">
              <Cari />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
