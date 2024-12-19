import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import Onboarding from './pages/onboarding/onboarding.jsx';
import Guide from './pages/onboarding/guide.jsx';
import Daftar from './pages/auth/register.jsx';
import Login from './pages/auth/login.jsx';
import Menu from './pages/home/menu.jsx';
import Outcomes from './pages/onboarding/outcomes.jsx';
import Objective from './pages/onboarding/objective.jsx';
import Content from './pages/onboarding/content.jsx';
import CourseMenu from './pages/home/course/courseMenu.jsx';
import Introduction from './pages/home/course/introduction.jsx';
import Course from './pages/home/course/course.jsx';
import Course2 from './pages/home/course/course2.jsx';
import Course3 from './pages/home/course/course3.jsx';
import Quiz from './pages/home/quiz/quiz.jsx';
import Identity from './pages/home/quiz/identity.jsx';
import ProtectedRoute from './middleware/ProtectedRoute.jsx';
import { IdentityProvider } from './context/IdentityContext';
import Evaluation from './pages/home/quiz/evaluation.jsx';

const App = () => {
  return (
    <Router>
      <IdentityProvider>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Daftar />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/objective" element={<Objective />} />
            <Route path="/outcomes" element={<Outcomes />} />
            <Route path="/content" element={<Content />} />
            <Route path="/course-menu" element={<CourseMenu />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/course" element={<Course />} />
            <Route path="/course2" element={<Course2 />} />
            <Route path="/course3" element={<Course3 />} />
            <Route path="/identity" element={<Identity />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/evaluation" element={<Evaluation score={5} totalQuestions={7} />} />
            {/* Rute yang dilindungi */}
            <Route
              path="/quiz"
              element={
                <ProtectedRoute>
                  {/* <Quiz /> */}
                </ProtectedRoute>
              }
            />
            <Route
              path="/quiz2"
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quiz3"
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Sidebar>
      </IdentityProvider>
    </Router>
  );
};

export default App;
