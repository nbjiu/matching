import React from "react";
import MonthlyMember from "./detail/monthlyMember";
import SpecialMember from "./detail/specialMember";
import VisitCounseling from "./detail/visitCounseling";
import CallCounseling from "./detail/callCounseling";
import MainBoard from "./detail/mainBoard";

import "./style.css";
export default function Main() {
    return (
        <div className="main_inn container-fluid">
            <div className="content_inn">
                <section>
                    <article className="d-flex gap-5">
                        <MonthlyMember />
                        <SpecialMember />
                    </article>
                </section>
                <section className="mt-4">
                    <article>
                        <VisitCounseling />
                    </article>
                </section>
                <section className="mt-4">
                    <article>
                        <CallCounseling />
                    </article>
                </section>
                <section className=" mt-4">
                    <article className="d-flex gap-5">
                        <MainBoard />
                    </article>
                </section>
            </div>
        </div>
    );
}
