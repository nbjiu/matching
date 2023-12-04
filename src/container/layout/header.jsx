import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
    const [showChildMenu, setShowChildMenu] = useState(null);

    const topMenus = [
        {
            seq: "1",
            text: "회원 관리",
            link: "/member",
        },
        {
            seq: "2",
            text: "이용자 관리",
            link: "/manage/admin",
            childMenu: [
                {
                    text: "관리지",
                    link: "/manage/admin",
                },
                {
                    text: "상담 매니저",
                    link: "/manage/counsel",
                },
                {
                    text: "지원 매니저",
                    link: "/manage/support",
                },
                {
                    text: "매칭 매니저",
                    link: "/manage/matching",
                },
                {
                    text: "외부 매니저",
                    link: "/manage/outside",
                },
            ],
        },
        {
            seq: "3",
            text: "사내 게시판",
            link: "/board",
            childMenu: [
                {
                    text: "공지사항",
                    link: "/board/notice",
                },
                {
                    text: "방문상담",
                    link: "/board/visit",
                },
                {
                    text: "전화상담",
                    link: "/board/call",
                },
            ],
        },
        {
            seq: "4",
            text: "매출 정보",
            link: "sale",
            childMenu: [
                {
                    text: "매출 내역",
                    link: "/sale/history",
                },
                {
                    text: "일별 통계",
                    link: "/sale/day",
                },
                {
                    text: "월별 통계",
                    link: "/sale/month",
                },
                {
                    text: "년도별 통계",
                    link: "/sale/year",
                },
            ],
        },
    ];

    return (
        <header className="head">
            <div className="head_inn">
                <Link className="logo" to="/">
                    LOGO
                </Link>
                <nav>
                    {topMenus.map((menu, i) => (
                        <div
                            key={i}
                            className="menu-wrapper"
                            onMouseEnter={() => setShowChildMenu(true)}
                            onMouseLeave={() => setShowChildMenu(null)}
                        >
                            <Link to={menu.link}>{menu.text}</Link>
                            {showChildMenu === true && menu.childMenu && (
                                <div className="child-menu">
                                    {menu.childMenu.map((child, j) => (
                                        <Link key={j} to={child.link}>
                                            {child.text}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
}
