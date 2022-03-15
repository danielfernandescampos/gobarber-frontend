import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./Route";
// import Route from './Route'

export const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" 
            element={ <PrivateRoute> <Dashboard /> </PrivateRoute> } 
        /> 
    </Routes>
)