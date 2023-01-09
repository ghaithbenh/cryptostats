import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import LoginForm from "./components/Auth/Login-form/Login-Form.component";
import SignupForm from "./components/Auth/Signup-form/SignupForm.component";
import { HomePage } from "./pages/Home.page";
import ProtectedRoutes from "./Routes/protected-routes.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <HomePage />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
