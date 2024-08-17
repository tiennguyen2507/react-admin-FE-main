import {
  Table as TableWrapper,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';
import { ReactNode } from 'react';

type TableProps = {
  rows: any[];
  columns: { key: string; label: string }[];
  renderRow?: Record<string, (value: any) => ReactNode>;
};

export const Table: React.FC<TableProps> = ({
  rows,
  columns,
  renderRow = {},
}) => {
  return (
    <TableWrapper aria-label="Table content">
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((row: any, index: number) => (
          <TableRow key={index}>
            {(columnKey) => (
              <TableCell>
                {(renderRow[columnKey] && renderRow[columnKey](row)) ||
                  getKeyValue(row, columnKey)}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};
