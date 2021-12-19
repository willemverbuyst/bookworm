import { Link } from '@mui/material';
import { ReactElement } from 'react';

const Root: React.FC = (): ReactElement => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/login">Go to login page</Link>
    </>
  );
};

export default Root;
