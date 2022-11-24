import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes as RoutesComponent } from "react-router-dom";
import { RootState } from "Redux/store";

import Routes from "./Utils/routes";

const ProtectedRoute = ({
  children,
  isPrivate,
}: {
  children: JSX.Element;
  isPrivate: boolean;
}) => {
  const userLogged = !!useSelector((store: RootState) => store.auth.token);
  if (!userLogged && isPrivate) {
    return <Navigate to="/login" />;
  }
  return children;
};
const App = () => {
  return (
    <RoutesComponent>
      {Routes.map(({ component: Component, route, isPrivate }) => (
        <Route
          path={route}
          element={
            <ProtectedRoute isPrivate={!!isPrivate}>
              <Component />
            </ProtectedRoute>
          }
        />
      ))}
    </RoutesComponent>
  );
};

export default App;
