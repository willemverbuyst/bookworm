import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/books';
import Root from './pages/root';
import PageNotFound from './pages/pageNotFound';
import AppBar from './components/AppBar';
import { ReactElement } from 'react';

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/books" element={<Books />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
