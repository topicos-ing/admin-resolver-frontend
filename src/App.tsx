import React from "react";
import { Route, Routes as RoutesComponent } from "react-router-dom";

import Routes from "./Utils/routes";

const App = () => {
  return (
    <RoutesComponent>
      {Routes.map(({ component: Component, route }) => (
        <Route path={route} element={<Component />} />
      ))}
    </RoutesComponent>
  );
};

export default App;
