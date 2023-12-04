import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function MainBoard() {
    const dataTest = [
        {
            seq: "1",
            subject: "제목",
            createDate: "2023-06-06",
        },
        {
            seq: "1",
            subject: "제목",
            createDate: "2023-06-06",
        },
    ];
    return (
        <div className="table_wrap flex-fill">
            <div className="main_table-tit">
                <h3>공지사항</h3>
                <Link to="/">
                    더 보기
                    <FaArrowRight />
                </Link>
            </div>
            <table class="table text-center mt-2 table-bordered table-hover">
                <thead>
                    <tr className="table-active">
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">등록일</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {dataTest.map((member) => (
                        <tr className="cursor-pointer">
                            <td>{member.seq}</td>
                            <td>{member.subject}</td>
                            <td>{member.createDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
