import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/UploadResume";
import AnalyzeResume from "./pages/AnalyzeResume";
import AnalysisResult from "./pages/AnalysisResult";
import History from "./pages/History";
function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/login" />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                 <Route
                    path="/upload"
                    element={<UploadResume/>}
                  />

                  <Route
                    path="/analyze"
                    element={<AnalyzeResume/>}
                    />
                    <Route
    path="/history"
    element={<History />}
/>

<Route
path="/result"
element={<AnalysisResult/>}
/>
            </Routes>

        </BrowserRouter>

    );

}

export default App;