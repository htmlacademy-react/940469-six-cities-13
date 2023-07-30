import { Navigate } from 'react-router-dom';
import { Authorization } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  isAuth: boolean;
};

function PrivateRoute({ children, isAuth }: PrivateRouteProps): JSX.Element {
  return isAuth ? (
    children
  ) : (
    <Navigate to={Authorization.Login} />
  );
}

export default PrivateRoute;
