import { pipe } from "overmind";

import * as o from "./operators";

export const getPayments = pipe(o.shouldFetchPayments(), o.fetchPayments());
