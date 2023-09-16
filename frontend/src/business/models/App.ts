import { Page } from "../../configuration/navigation";

type PageKeys = keyof typeof Page;

export interface AppState {
  isLoading: boolean;
  currentPage: (typeof Page)[PageKeys];
}
