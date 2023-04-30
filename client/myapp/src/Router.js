
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Base from './Base';
import Login from './Login';
import FindIdPage from "./FindIdPage";
import FindPassword from "./FindPassword";
import SignUp from "./SignUp";

function Router(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Base></Base>}></Route>
                    <Route path="/app" element={<App></App>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/FindIdPage" element={<FindIdPage></FindIdPage>}></Route>
                    <Route path="/FindPassword" element={<FindPassword></FindPassword>}></Route>
                    <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
                </Routes>
            </BrowserRouter>

    )
}

export default Router;