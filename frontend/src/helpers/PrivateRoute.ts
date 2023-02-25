import { useAppState } from "../business/overmind";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isSignedIn } = useAppState();

  return isSignedIn ? children : null;
}

export default PrivateRoute;
