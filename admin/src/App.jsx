import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Ad from "./pages";

// Actions ------
import { action as loginAction } from "./pages/auth/Login";

const router = createBrowserRouter([
  { path: "/login", element: <Ad.Login />, action: loginAction },
  { path: "/forgot-password", element: <Ad.ForgotPassword /> },
  {
    path: "/",
    element: <Ad.Layout />,
    children: [{ index: true, element: <Ad.Dashboard /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
