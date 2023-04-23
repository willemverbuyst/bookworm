import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type Props<T extends Record<"id", string>> = {
  columns: Array<{ field: keyof T; isNumeric?: boolean }>;
  title?: string;
  rows: Array<T>;
  action?: (id: string) => void;
  isLoading?: boolean;
  actionButton?: (({ id }: { id: string }) => JSX.Element) | null;
};

export function TableOverview<T extends Record<"id", string>>({
  rows,
  columns,
  title,
  action,
  isLoading = false,
  actionButton = null,
}: Props<T>) {
  const loadingStyles = isLoading
    ? {
        backgroundColor: "#f3f3f3",
        color: "#ddd",
        border: "2px solid #fff",
      }
    : {};

  const ActionButton = actionButton;

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
                {String(column.field).replace(/_/g, " ")}
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
              {ActionButton ? (
                <Td isNumeric style={loadingStyles}>
                  <ActionButton id={row.id} />
                </Td>
              ) : null}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
