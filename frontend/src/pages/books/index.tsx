import { Box } from '@mui/material';
import React, { ReactElement } from 'react';
import Table from '../../components/Table';

const Books: React.FC = (): ReactElement => {
  return (
    <Box>
      <h1>Books</h1>
      <Table />
    </Box>
  );
};

export default Books;
