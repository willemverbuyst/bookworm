import { Box } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';
import TableWithBooks from '../../components/Table';
import { useAppState } from '../../overmind';
import { useNavigate } from 'react-router-dom';

const Books: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  const { allBooks, isLoggedIn } = useAppState();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  });

  return (
    <Box>
      <h1>Books</h1>
      {allBooks ? <TableWithBooks books={allBooks} /> : <p>No books</p>}
    </Box>
  );
};

export default Books;
