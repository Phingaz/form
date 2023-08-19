import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import { Final } from "./component/Steps/Final";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
    { path: "/", element: <PageOne /> },
    { path: "/plan", element: <PageTwo /> },
    { path: "/addons", element: <PageThree /> },
    { path: "/summary", element: <PageFour /> },
    { path: "/final", element: <Final /> },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
