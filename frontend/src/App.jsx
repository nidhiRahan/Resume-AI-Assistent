import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/UploadResume";
import AnalyzeResume from "./pages/AnalyzeResume";
import AnalysisResult from "./pages/AnalysisResult";
import History from "./pages/History";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

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
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                         <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                         <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                 <Route
                    path="/upload"
                    element={
                        <ProtectedRoute>
                            <UploadResume />
                        </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/analyze"
                    element={
                        <ProtectedRoute>
                            <AnalyzeResume />
                        </ProtectedRoute>
                    }
                    />

                    <Route
                        path="/history"
                        element={
                        <ProtectedRoute>
                                <History />
                            </ProtectedRoute>
                        }
                    />

                        <Route
                        path="/result"
                        element={
                            <ProtectedRoute>
                                    <AnalysisResult />
                                </ProtectedRoute>
                        }
                        />
            </Routes>

<ToastContainer
    position="top-right"
    autoClose={3000}
    theme="colored"
/>
        </BrowserRouter>

    );

}

export default App;