import React from "react";
import { MainApi } from "api/main/main";
import Main from "./main";

const MainConfig = {
    routes: [
        {
            path: "/",
            element: <Main />,
        },
    ],
    API: MainApi,
};

export default MainConfig;
