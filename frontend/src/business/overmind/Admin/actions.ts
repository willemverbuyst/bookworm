/* eslint-disable no-param-reassign */
import { pipe } from "overmind";
import * as o from "./operators";

export const showAdminPage = pipe(o.setAdminPage(), o.getAdminData());
