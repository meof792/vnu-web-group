//public routes
import Home from "../Pages/Home";
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
];

export { publicRoutes };
