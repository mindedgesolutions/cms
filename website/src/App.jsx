import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Wb from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wb.Layout />,
    children: [
      { index: true, element: <Wb.Home /> },
      { path: "about", element: <Wb.About /> },
      { path: "services", element: <Wb.Services /> },
      { path: "contact-us", element: <Wb.ContactUs /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
