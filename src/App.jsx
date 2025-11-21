import { createHashRouter, RouterProvider } from "react-router";
import FileManagement from "./pages/FileManagement";
import Simulation from "./pages/Simulation";
import { ThemeProvider } from "@/components/theme-provider";

const router = createHashRouter([
  {
    path: "/",
    Component: Simulation,
  },
  {
    path: "/simulation",
    Component: Simulation,
  },
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
