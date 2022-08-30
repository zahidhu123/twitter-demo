import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
