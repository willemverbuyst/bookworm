import { Box } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';
import TableWithBooks from '../../components/Table';
import { useAppState, useActions } from '../../overmind';
import { useNavigate } from 'react-router-dom';

const Books: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  const { allBooks, isLoggedIn } = useAppState();
  const { fetchAllBooks } = useActions();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  });

  useEffect(() => {
    if (!allBooks) {
      fetchAllBooks();
    }
  });

  return (
    <Box>
      <h1 className="title">Books</h1>
      {allBooks ? <TableWithBooks books={allBooks} /> : <p>No books</p>}
    </Box>
  );
};

export default Books;
