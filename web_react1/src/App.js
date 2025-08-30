// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/home/HomePage';
import AboutPage from './page/about/AboutPage';
import StudentPage from './page/student/StudentPage';
import TeacherPage from './page/teacher/TeacherPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/student' element={<StudentPage />} />
        <Route path='/teacher' element={<TeacherPage />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
