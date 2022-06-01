import Detail from "~/pages/Detail";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const publicRoute = [
  {
    id: 1,
    title: "Home",
    url: "/",
    page: <HomePage />,
  },
  {
    id: 2,
    title: "Login",
    url: "/login",
    page: <LoginPage />,
  },
  {
    id: 3,
    title: "Register",
    url: "/register",
    page: <RegisterPage />,
  },
  {
    id: 4,
    title: "Detail",
    url: "/detail",
    page: <Detail />,
  },
];
export { publicRoute };
