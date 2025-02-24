import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<h2>HOME</h2>} />

          <Route path='*' element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
