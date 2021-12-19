import { Button } from '@mui/material';
import { ReactElement } from 'react';
import { useActions } from '../../overmind';
import { useNavigate } from 'react-router-dom';

const Root: React.FC = (): ReactElement => {
  const { fetchAllBooks } = useActions();
  const navigate = useNavigate();

  const gotoLogin = () => navigate('/login');

  return (
    <>
      <h1>Home</h1>
      <Button onClick={gotoLogin}>Go to login page</Button>
      <button onClick={() => fetchAllBooks()}>books</button>
    </>
  );
};

export default Root;
