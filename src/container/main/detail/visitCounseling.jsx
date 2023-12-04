import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function VisitCounseling() {
    const dataTest = [
        {
            id: "1",
            name: "지우",
            gender: "남",
            age: "23",
            marriageYn: "초혼",
            phoneNumber: "010-1123-1123",
            consulDay: "2023-10-01",
            status: "대기",
            link: "/",
        },
    ];
    return (
        <div className="table_wrap flex-fill">
            <div className="main_table-tit">
                <h3>방문 상담</h3>
                <Link to="/">
                    더 보기
                    <FaArrowRight />
                </Link>
            </div>
            <table class="table text-center mt-2 table-bordered table-hover">
                <thead>
                    <tr className="table-active">
                        <th scope="col">번호</th>
                        <th scope="col">이름</th>
                        <th scope="col">성별</th>
                        <th scope="col">나이</th>
                        <th scope="col">초/재혼</th>
                        <th scope="col">휴대폰번호</th>
                        <th scope="col">상담일</th>
                        <th scope="col">상태</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {dataTest.map((member) => (
                        <tr className="cursor-pointer">
                            <td>{member.id}</td>
                            <td>{member.name}</td>
                            <td>{member.gender}</td>
                            <td>{member.age}</td>
                            <td>{member.marriageYn}</td>
                            <td>{member.phoneNumber}</td>
                            <td>{member.consulDay}</td>
                            <td>{member.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
