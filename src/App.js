
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/Signup';
import Singin from './components/Singin';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <h1 className='text-center text-3xl font-bold'>react firebase</h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Singin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
