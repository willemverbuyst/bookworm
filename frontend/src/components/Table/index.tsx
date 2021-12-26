import React, { ReactElement } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { Book } from '../../models/Book';

interface IProps {
  books: Book[];
}

const TableWithBooks: React.FC<IProps> = ({ books }: IProps): ReactElement => {
  const [pageSize, setPageSize] = React.useState(10);
  const rows: GridRowsProp = books;

  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'id', width: 450 },
    { field: 'title', headerName: 'title', width: 450 },
    { field: 'language', headerName: 'language', width: 100 },
    { field: 'author', headerName: 'author', width: 250 },
    { field: 'year', headerName: 'year', width: 150 },
    { field: 'read', headerName: 'read', width: 150 },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ height: 700, width: 1110 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
            sx={{ border: 'none' }}
            pageSize={pageSize}
            onPageSizeChange={(newPage) => setPageSize(newPage)}
            rowsPerPageOptions={[10, 15, 20, 25]}
            pagination
          />
        </div>
      </div>
    </Box>
  );
};

export default TableWithBooks;
