import ProductSearch from "../Views/ProductSearch/ProductSearch";
import Login from "../Views/Login/Login";
import NotFound from "../Views/NotFound";

const Routes = [
  { component: ProductSearch, route: "/" },
  { component: Login, route: "/login" },
  { component: NotFound, route: "*" },
];

export default Routes;
