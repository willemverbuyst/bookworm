import { useAppState } from "../business/overmind";
import { WelcomePage } from "../UI/pages/Welcome";

export default function LandingPageRoute() {
  const appState = useAppState().app;

  return appState.currentPage === "/" ? <WelcomePage /> : null;
}
