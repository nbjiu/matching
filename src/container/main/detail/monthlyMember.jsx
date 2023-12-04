import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function MonthlyMember() {
    const dataTest = [
        {
            id: "1",
            level: "정회원",
            name: "지우",
            gender: "남",
            age: "23",
        },
        {
            id: "2",
            level: "정회원",
            name: "김",
            gender: "여",
            age: "23",
        },
    ];
    return (
        <div className="table_wrap flex-fill">
            <div className="main_table-tit">
                <h3>월 정회원</h3>
                <Link to="/">
                    더 보기
                    <FaArrowRight />
                </Link>
            </div>
            <table class="table text-center mt-2 table-bordered table-hover">
                <thead>
                    <tr className="table-active">
                        <th scope="col">번호</th>
                        <th scope="col">레벨</th>
                        <th scope="col">이름</th>
                        <th scope="col">성별</th>
                        <th scope="col">나이</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {dataTest.map((member) => (
                        <tr className="cursor-pointer">
                            <td>{member.id}</td>
                            <td>{member.level}</td>
                            <td>{member.name}</td>
                            <td>{member.gender}</td>
                            <td>{member.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
