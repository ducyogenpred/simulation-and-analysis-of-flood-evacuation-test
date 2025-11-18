import { createHashRouter, RouterProvider } from "react-router";
import FileManagement from "./pages/FileManagement";
import Simulation from "./pages/Simulation";

const router = createHashRouter([
  {
    path: "/",
    Component: FileManagement,
  },
  {
    path: "/simulation",
    Component: Simulation,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
