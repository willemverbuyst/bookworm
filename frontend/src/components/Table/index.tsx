import React, { ReactElement } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useAppState } from '../../overmind';

const Table: React.FC = (): ReactElement => {
  const { allBooks } = useAppState();

  const rows: GridRowsProp = allBooks;

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'title', width: 450 },
    { field: 'author', headerName: 'author', width: 250 },
    { field: 'year', headerName: 'year', width: 150 },
    { field: 'read', headerName: 'read', width: 150 },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ height: 350, width: 1005 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
            sx={{ border: 'none' }}
          />
        </div>
      </div>
    </Box>
  );
};

export default Table;
