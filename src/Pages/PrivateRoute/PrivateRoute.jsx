import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" />
   
};

export default PrivateRoute;
PrivateRoute.propType = {
    children: PropTypes.node 
}