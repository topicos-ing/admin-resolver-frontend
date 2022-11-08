import ProductSearch from "../Views/ProductSearch/ProductSearch";
import NotFound from "../Views/NotFound";

const Routes = [
  { component: ProductSearch, route: "/" },
  { component: NotFound, route: "*" },
];

export default Routes;
