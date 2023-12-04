import React, { useState } from "react";

// Sample content components for each tab
const TabContents = ({ activeTab }) => {
    const contents = [
        "본인 정보 내용",
        "경제력 및 직업 정보 내용",
        "학력 정보 내용",
        "가족사항 정보 내용",
    ];

    return <div>{contents[activeTab]}</div>;
};

export default function MemberTabs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            seq: "1",
            text: "본인",
        },
        {
            seq: "2",
            text: "경제력 및 직업",
        },
        {
            seq: "3",
            text: "학력",
        },
        {
            seq: "4",
            text: "가족사항",
        },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <ul className="nav nav-pills">
                {tabs.map((tab, index) => (
                    <li className="nav-item" key={tab.seq}>
                        <a
                            className={`nav-link ${
                                index === activeTab ? "active" : ""
                            }`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.text}
                        </a>
                    </li>
                ))}
            </ul>
            <TabContents activeTab={activeTab} />
        </div>
    );
}
