import { createBrowserRouter } from 'react-router-dom'

import Scheduling from "./pages/Scheduling/Scheduling";
import Speaker from "pages/Speaker/Speaker";
import Certificates from 'pages/Certificates/Certificates'
import Certificate from 'pages/Certificates/Certificate/Certificate'
import ValidateCertificate from 'pages/Certificates/ValidateCertificate/ValidateCertificate';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Scheduling />,
    },
    {
        path: "/speaker/:name",
        element: <Speaker />,
    },
    {
        path: "/certificates",
        element: <Certificates />,
    },
    {
        path: "/certificate/:hash",
        element: <Certificate />,
    },
    {
        path: "/validate-certificate/:hash",
        element: <ValidateCertificate />
    },
]);

export default routes