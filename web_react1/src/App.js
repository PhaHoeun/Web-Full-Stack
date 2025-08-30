// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/home/HomePage';
import AboutPage from './page/about/AboutPage';
import StudentPage from './page/student/StudentPage';
import TeacherPage from './page/teacher/TeacherPage';
import MainLayout  from './component/layout/MainLayout';
import AuthLayout from './component/layout/AuthLayout';
import LoginPage from './page/auth/LoginPage';
import RegisterPage from './page/auth/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/student' element={<StudentPage />} />
          <Route path='/teacher' element={<TeacherPage />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='*' element={<LoginPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
