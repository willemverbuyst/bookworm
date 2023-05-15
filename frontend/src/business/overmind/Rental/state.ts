import { derived } from "overmind";
import { NODE_ENV } from "../../../config";
import { logInfo } from "../../../utils";
import { genericSearch, genericSort, WEEKDAYS } from "../../functions";
import { RentalState, SortDirection } from "../../models";

export const state: RentalState = {
  getAllApi: null,
  isLoading: false,
  overview: derived(
    ({
      getAllApi,
      ui: {
        table: { columns, searchKeys, queryString, sort },
      },
    }: RentalState) => {
      let startTime = 0;
      if (NODE_ENV === "development") startTime = Date.now();

      if (!getAllApi?.data.length) {
        return [];
      }
      const data = getAllApi.data
        .map((i) => ({
          id: i.id,
          "rental date": i.rental_date,
          "return date": i.return_date,
          title: i.title,
          author: i.author,
        }))
        .filter((a) => genericSearch(a, searchKeys, queryString, false))
        .sort((a, b) =>
          genericSort(a, b, {
            property: sort.property,
            sortDirection: sort.sortDirection,
          })
        )
        .filter((i) =>
          Object.values(columns)
            .filter((c) => c.display)
            .every((c) => genericSearch(i, [c.field], c.queryString, false))
        );

      if (NODE_ENV === "development" && startTime) {
        logInfo(startTime, "derived fn: overview rentals");
      }

      return data;
    }
  ),
  statsDay: derived(({ statsDayApi }: RentalState) => {
    let startTime = 0;
    if (NODE_ENV === "development") startTime = Date.now();

    if (!statsDayApi?.data.length) {
      return [];
    }
    const data = [...statsDayApi.data].map((d) => ({
      rentals: d.number_of_rentals,
      returns: d.number_of_returns,
      day: WEEKDAYS[d.day_of_the_week - 1],
      fullMark: Math.ceil(
        Math.max(...statsDayApi.data.map((i) => i.number_of_rentals)) * 1.1
      ),
    }));

    if (NODE_ENV === "development" && startTime) {
      logInfo(startTime, "derived fn: overview rentals stats day");
    }

    return data;
  }),
  statsDayApi: null,
  statsDuration: derived(({ statsDurationApi }: RentalState) => {
    let startTime = 0;
    if (NODE_ENV === "development") startTime = Date.now();

    if (!statsDurationApi?.data.length) {
      return [];
    }
    const data = [...statsDurationApi.data].map((d) => ({
      durationLabel: `${d.duration}d`,
      duration: d.duration,
      number: Number(d.total_rentals),
    }));

    if (NODE_ENV === "development" && startTime) {
      logInfo(startTime, "derived fn: overview rentals stats duration");
    }

    return data;
  }),
  statsDurationApi: null,
  ui: {
    table: {
      columns: {
        id: {
          display: false,
          field: "id",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        title: {
          display: true,
          field: "title",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        author: {
          display: true,
          field: "author",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        "rental date": {
          display: true,
          field: "rental date",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        "return date": {
          display: true,
          field: "return date",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
      },
      filter: { returned: "not_returned" },
      sort: { property: "title", sortDirection: SortDirection.ASCENDING },
      limit: 20,
      noDataMessage: "no rentals",
      page: 1,
      queryString: "",
      pagination: derived((table: RentalState["ui"]["table"]) => {
        return !table.queryString;
      }),
      searchKeys: ["title", "author"],
      showAll: false,
      title: "overview of rentals",
    },
  },
};
