import ProductSearch from "../Views/ProductSearch/ProductSearch";
import Login from "../Views/Login/Login";
import NotFound from "../Views/NotFound";

const Routes: {
  component: () => JSX.Element;
  route: string;
  isPrivate?: boolean;
}[] = [
  { component: ProductSearch, route: "/", isPrivate: true },
  { component: Login, route: "/login" },
  { component: NotFound, route: "*" },
];

export default Routes;
