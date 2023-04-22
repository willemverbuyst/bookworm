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
};

export function TableOverview<T extends Record<"id", string>>({
  rows,
  columns,
  title,
  action,
  icon,
  ariaLabel,
}: Props<T>) {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">{title}</TableCaption>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={String(column.field)} isNumeric={column.isNumeric}>
                {String(column.field).replace(/_/g, " ")}
              </Th>
            ))}
            {action ? <Th>get details</Th> : null}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <Tr key={row.id}>
              {columns.map((column) => (
                <Td
                  key={`${row.id}-${String(column.field)}`}
                  isNumeric={column.isNumeric}
                >
                  {row[column.field] == null
                    ? "---"
                    : String(row[column.field])}
                </Td>
              ))}
              {action && ariaLabel ? (
                <Td isNumeric>
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
