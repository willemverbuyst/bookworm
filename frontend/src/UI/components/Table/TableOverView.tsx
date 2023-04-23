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
};

export function TableOverview<T extends Record<"id", string>>({
  rows,
  columns,
  title,
  action,
  isLoading = false,
  actionButtons = [],
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
              {actionButtons?.length ? (
                <Td isNumeric style={loadingStyles}>
                  {actionButtons.map((button) => (
                    <ActionButton id={row.id} actionButton={button} />
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
