import { createHashRouter, RouterProvider } from "react-router";
import FileManagement from "./pages/FileManagement";
import Simulation from "./pages/Simulation";
import { ThemeProvider } from "@/components/theme-provider";

const router = createHashRouter([
  {
    path: "/",
    Component: FileManagement,
  },
  {
    path: "/FileManagement",
    Component: FileManagement,
  },
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
