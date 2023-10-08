import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import Subscription from "./pages/Subscription";
import Pricing from "./pages/Pricing";
import ApisUsage from "./pages/ApisUsage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/subscription-plan",
          element: <Subscription />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/api-usage",
          element: <ApisUsage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
        />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
