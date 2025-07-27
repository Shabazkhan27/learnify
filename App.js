import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Courses from './pages/Courses';
import InstructorPanel from './pages/InstructorPanel';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Courses</Link> |{' '}
        <Link to="/instructor">Instructor Panel</Link> |{' '}
        <Link to="/signup">SignUp</Link> |{' '}
        <Link to="/login">Login</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/instructor" element={<InstructorPanel />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
