import { Navigate, Outlet, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/auth";


export default function PrivateRoute (props: RouteProps): JSX.Element {
    const { user } = useAuth();
    return !!user 
        ? <Outlet />
        : <Navigate to='/'/>   
}
