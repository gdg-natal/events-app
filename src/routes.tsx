import { createBrowserRouter } from 'react-router-dom'

import Scheduling from "./pages/Scheduling/Scheduling";
import Speaker from "pages/Speaker/Speaker";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Scheduling />,
    },
    {
        path: "/speaker/:name",
        element: <Speaker />,
    },
]);

export default routes