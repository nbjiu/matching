import React from "react";
// import { BoardApi } from "api/board/board";
import NoticeList from "./notice/list";
import NoticeDetail from "./notice/detail";
import NoticeCreate from "./notice/create";

const BoardConfig = {
    routes: [
        {
            path: "/",
            element: <NoticeList />,
        },
        {
            path: "/",
            element: <NoticeDetail />,
        },
        {
            path: "/",
            element: <NoticeCreate />,
        },
    ],
    // API: BoardApi,
};

export default BoardConfig;
