import { SearchIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  FormControl,
  IconButton,
  Input,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { getEntries } from "../../../business/functions";
import { SortDirection } from "../../../business/models/State";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Pagination } from "./Pagination";

function ActionButton({
  id,
  actionButton,
}: {
  id: string;
  actionButton: ({ id }: { id: string }) => JSX.Element;
}) {
  const TableActionButton = actionButton;

  return <TableActionButton id={id} />;
}

type Props = {
  actionButtons?: (({ id }: { id: string }) => JSX.Element)[] | null;
  state: keyof typeof stateSectionsWithTable;
};

export function TableOverview({ actionButtons = [], state }: Props) {
  const {
    isLoading,
    overview,
    ui: {
      table: { title, columns, sort, noDataMessage },
    },
  } = useAppState()[state];
  const { setSort, setShowInput, setColumnQueryString } = useActions()[state];

  const loadingStyles = isLoading
    ? {
        backgroundColor: "#f3f3f3",
        color: "#ddd",
        border: "2px solid #fff",
      }
    : {};

  if (!overview.length) {
    return <p>{noDataMessage}</p>;
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">{title}</TableCaption>
        <Thead>
          <Tr>
            {Object.values(columns)
              .filter((c) => c.display)
              .map((column) => (
                <Th
                  key={String(column.field)}
                  isNumeric={column.isNumeric}
                  style={loadingStyles}
                >
                  <>
                    {String(column.field).replace(/_/g, " ")}
                    <Spacer />
                    <IconButton
                      aria-label={`${String(column.field)} ascending`}
                      variant="unstyled"
                      icon={
                        <TriangleDownIcon
                          color={
                            sort.property === column.field &&
                            sort.sortDirection === SortDirection.ASCENDING
                              ? "grey.700"
                              : "gray.400"
                          }
                        />
                      }
                      onClick={() =>
                        setSort({
                          property: column.field,
                          sortDirection: SortDirection.ASCENDING,
                        })
                      }
                      size="sm"
                    />
                    <IconButton
                      aria-label={`${String(column.field)} descending`}
                      variant="unstyled"
                      icon={
                        <TriangleUpIcon
                          color={
                            sort.property === column.field &&
                            sort.sortDirection === SortDirection.DESCENDING
                              ? "grey.700"
                              : "gray.400"
                          }
                        />
                      }
                      onClick={() =>
                        setSort({
                          property: column.field,
                          sortDirection: SortDirection.DESCENDING,
                        })
                      }
                      size="sm"
                    />
                    <IconButton
                      aria-label={`${String(column.field)} search`}
                      variant="unstyled"
                      icon={<SearchIcon color="gray.400" />}
                      onClick={() => setShowInput({ field: column.field })}
                      size="sm"
                    />
                  </>
                  {column.showInput ? (
                    <FormControl>
                      <Input
                        id="search"
                        placeholder="search"
                        value={column.queryString}
                        onChange={(e) =>
                          setColumnQueryString({
                            field: column.field,
                            queryString: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                  ) : null}
                </Th>
              ))}
            {actionButtons?.length ? <Th /> : null}
          </Tr>
        </Thead>
        <Tbody>
          {overview.map((row) => (
            <Tr key={row.id}>
              {getEntries(columns)
                .filter(([, v]) => v.display)
                .map(([k, v]) => (
                  <Td
                    key={`${row.id}-${String(k)}`}
                    isNumeric={v.isNumeric}
                    style={loadingStyles}
                  >
                    {row[k] == null ? "---" : String(row[k])}
                  </Td>
                ))}
              {actionButtons?.length ? (
                <Td isNumeric style={loadingStyles}>
                  {actionButtons.map((button, i) => (
                    <ActionButton
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${row.id}-${i}`}
                      id={row.id}
                      actionButton={button}
                    />
                  ))}
                </Td>
              ) : null}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Pagination state={state} />
    </TableContainer>
  );
}
