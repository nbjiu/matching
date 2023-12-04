import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import URL from "./api/urls";
import Header from "./container/layout/header";
import Main from "./container/main/main";
import Member from "./container/pages/member/member";
import Manage from "./container/pages/manage";
import Board from "./container/pages/board";
import Sale from "./container/pages/sale";
import ManageCounsel from "./container/pages/sale/counsel";
import ManageSupport from "./container/pages/sale/support";
import ManageMatching from "./container/pages/sale/matching";
import ManageOutside from "./container/pages/sale/outside";
import ManageAdmin from "./container/pages/sale/admin";

function App() {
    return (
        <div className="root-wrap">
            <BrowserRouter>
                <Header />
                <div className="content_inn">
                    <Routes>
                        <Route path="/" element={<Main />} />

                        {/* member */}
                        <Route path="/member" element={<Member />} />

                        {/* manage */}
                        <Route path="/manage" element={<Manage />} />
                        <Route
                            path={URL.MANAGE_ADMIN}
                            element={<ManageAdmin />}
                        />
                        <Route
                            path={URL.MANAGE_COUNSEL}
                            element={<ManageCounsel />}
                        />
                        <Route
                            path={URL.MANAGE_SUPPORT}
                            element={<ManageSupport />}
                        />
                        <Route
                            path={URL.MANAGE_MATCHING}
                            element={<ManageMatching />}
                        />
                        <Route
                            path={URL.MANAGE_OUTSIDE}
                            element={<ManageOutside />}
                        />

                        {/* Board */}
                        <Route path="/board" element={<Board />} />

                        {/* Sale */}
                        <Route path="/sale" element={<Sale />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
