import { SearchIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  IconButton,
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
import { SortDirection } from "../../../business/models/State";

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

type Props<T extends Record<"id", string>> = {
  columns: Array<{ field: keyof T; isNumeric?: boolean }>;
  title?: string;
  rows: Array<T>;
  action?: (id: string) => void;
  isLoading?: boolean;
  actionButtons?: (({ id }: { id: string }) => JSX.Element)[] | null;
  sortFunction: ({
    property,
    sortDirection,
  }: {
    property: keyof Partial<T>;
    sortDirection: keyof typeof SortDirection;
  }) => void;
  sortProperty: {
    property: keyof Partial<T>;
    sortDirection: keyof typeof SortDirection;
  };
};

export function TableOverview<T extends Record<"id", string>>({
  rows,
  columns,
  title,
  action,
  isLoading = false,
  actionButtons = [],
  sortFunction,
  sortProperty,
}: Props<T>) {
  const loadingStyles = isLoading
    ? {
        backgroundColor: "#f3f3f3",
        color: "#ddd",
        border: "2px solid #fff",
      }
    : {};

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">{title}</TableCaption>
        <Thead>
          <Tr>
            {columns.map((column) => (
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
                          sortProperty.property === column.field &&
                          sortProperty.sortDirection === SortDirection.ASCENDING
                            ? "grey.700"
                            : "gray.400"
                        }
                      />
                    }
                    onClick={() =>
                      sortFunction({
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
                          sortProperty.property === column.field &&
                          sortProperty.sortDirection ===
                            SortDirection.DESCENDING
                            ? "grey.700"
                            : "gray.400"
                        }
                      />
                    }
                    onClick={() =>
                      sortFunction({
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
                    onClick={() => console.log("test search")}
                    size="sm"
                  />
                </>
              </Th>
            ))}
            {action ? <Th /> : null}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <Tr key={row.id}>
              {columns.map((column) => (
                <Td
                  key={`${row.id}-${String(column.field)}`}
                  isNumeric={column.isNumeric}
                  style={loadingStyles}
                >
                  {row[column.field] == null
                    ? "---"
                    : String(row[column.field])}
                </Td>
              ))}
              {actionButtons?.length ? (
                <Td isNumeric style={loadingStyles}>
                  {actionButtons.map((button, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ActionButton key={i} id={row.id} actionButton={button} />
                  ))}
                </Td>
              ) : null}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
