import {
    RouterProvider,
    createBrowserRouter,
    createHashRouter,
} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./screen/home";
import NotFound from "./components/notfound";
import About from "./screen/about";
import Cafes from "./screen/cafes";
import Contact from "./screen/contact";
import Shop from "./screen/shop";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentMode } from "./project_common";
import { useEffect } from "react";
import License from "./screen/license";

const router = createHashRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "cafes",
                    element: <Cafes />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "shop",
                    element: <Shop />,
                },
                {
                    path: "license",
                    element: <License />,
                },
            ],
        },
        {
            path: "/instead_of_me_cafe",
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "cafes",
                    element: <Cafes />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "shop",
                    element: <Shop />,
                },
                {
                    path: "license",
                    element: <License />,
                },
            ],
        },
    ]
    // { basename: "/instead_of_me_cafe" }
);

function App() {
    const setCurrentMode = useSetRecoilState(currentMode);

    useEffect(() => {
        if (document.documentElement.clientWidth < 500)
            setCurrentMode("mobile");
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
