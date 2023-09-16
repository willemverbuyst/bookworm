import { useAppState } from "../business/overmind";
import { Page } from "../configuration/navigation";
import { WelcomePage } from "../UI/pages/Welcome/WelcomePage";

export default function LandingPageRoute() {
  const appState = useAppState().app;

  return appState.currentPage === Page.WELCOME ? <WelcomePage /> : null;
}
