//public routes
import Home from "../Pages/Home";
import Table from "../Pages/Table";
import Login from "../Pages/Login";
import DefaultLayout from "../components/Layouts/DefauLayout";
const publicRoutes = [
  {
    path: "/",
    component: Login,
    layout: DefaultLayout,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/table",
    component: Table,
  },
];

export { publicRoutes };
