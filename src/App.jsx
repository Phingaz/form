import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import { Final } from "./component/Steps/Final";

const router = createBrowserRouter([
  { path: "/", element: <PageOne /> },
  { path: "/plan", element: <PageTwo /> },
  { path: "/addons", element: <PageThree /> },
  { path: "/summary", element: <PageFour /> },
  { path: "/final", element: <Final /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
