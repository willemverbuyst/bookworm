import {
  IconButton,
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
  icon?: JSX.Element;
  ariaLabel?: string;
  isLoading?: boolean;
};

export function TableOverview<T extends Record<"id", string>>({
  rows,
  columns,
  title,
  action,
  icon,
  ariaLabel,
  isLoading = false,
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
              {action && ariaLabel ? (
                <Td isNumeric style={loadingStyles}>
                  {/* <ActionButton id={row.id} action={action} /> */}
                  <IconButton
                    data-tooltip-id="bookworm-tooltip"
                    data-tooltip-content={ariaLabel}
                    aria-label={ariaLabel}
                    onClick={
                      action ? () => action(row.id) : () => console.log(row.id)
                    }
                    icon={icon}
                  />
                </Td>
              ) : null}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
