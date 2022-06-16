import { Navigate, useLocation } from 'react-router-dom';

const AuthRoute = ({ children }) => {
// const auth = useSelector((state) => state.auth)
const auth = true;
const location = useLocation();

  return (
    auth
      ? children
      : <Navigate to="/login" state={{ from:location}} replace />
  );
};

export default AuthRoute;