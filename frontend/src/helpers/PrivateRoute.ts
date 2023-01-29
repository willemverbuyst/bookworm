import { useAppState } from '../business/overmind'

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	const { isLoggedIn } = useAppState()

	return isLoggedIn ? children : null
}

export default PrivateRoute
