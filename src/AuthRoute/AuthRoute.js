import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectAuth, selectToken } from '../Redux/slice/authSlice';

const AuthRoute = ({ children }) => {
const auth = true;
// const auth = useSelector(selectAuth);
const location = useLocation();

  return (
    auth
      ? children
      : <Navigate to="/login" state={{ from:location}} replace />
  );
};

export default AuthRoute;