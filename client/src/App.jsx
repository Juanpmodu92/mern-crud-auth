import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import ProfilePage from './pages/ProfilePage';
import TasksFormPage from './pages/TasksFormPage'
import HomePage from './pages/HomePage';

import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TasksContext';


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute/>} >
              <Route path="/tasks" element={<TasksPage/>} />
              <Route path="/add-tasks" element={<TasksFormPage/>} />
              <Route path="/tasks/:id" element={<TasksFormPage/>} />
              <Route path="/profile" element={<ProfilePage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App; 