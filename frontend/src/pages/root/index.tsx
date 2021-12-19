import { Link } from '@mui/material';
import { ReactElement } from 'react';
// import { useActions } from '../../overmind';
import axios from 'axios';

const Root: React.FC = (): ReactElement => {
  // const { fetchAllBooks } = useActions();

  const fetchAllBooks = async () => {
    console.log('testing');
    try {
      const response = await axios.get(`http://0.0.0.0:8000`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Home</h1>
      <Link href="/login">Go to login page</Link>
      <button onClick={() => fetchAllBooks()}>books</button>
    </>
  );
};

export default Root;
