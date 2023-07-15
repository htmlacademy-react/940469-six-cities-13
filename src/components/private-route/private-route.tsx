import { Navigate } from 'react-router-dom';

import { Status, Authorization } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  status: Status;
};

function PrivateRoute({ children, status }: PrivateRouteProps): JSX.Element {
  return status === Status.Auth ? (
    children
  ) : (
    <Navigate to={Authorization.Login} />
  );
}

export default PrivateRoute;
