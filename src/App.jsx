import React from 'react';
import { Route, Routes as RoutesComponent } from 'react-router-dom';

import Routes from './Utils/routes';
import Api from './Views/Api/Api';
import Home from './Views/Home';
import NotFound from './Views/NotFound';
import TextPrinter from './Views/TextPrinter';

const { HOME, NOT_FOUND, PRINTER, API } = Routes;

const App = () => {
  return (
    <RoutesComponent>
      <Route path={`${PRINTER}/:textToPrint`} element={<TextPrinter />} />
      <Route path={HOME} element={<Home />} />
      <Route path={API} element={<Api />} />
      <Route path={NOT_FOUND} element={<NotFound />} />
    </RoutesComponent>
  );
};

export default App;
