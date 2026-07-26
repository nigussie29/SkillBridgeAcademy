import { Routes, Route } from "react-router-dom";
import Portfolio from './pages/Portfolio.jsx';

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Mathematics from "./pages/library/Mathematics";
import MathematicsSchool from "./pages/schools/Mathematics";

import LinearAlgebraModule from "./pages/library/college/LinearAlgebraModule";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Resources from "./pages/Resources.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Auth from "./pages/Auth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Admin from "./pages/Admin.jsx";
import LessonPage from "./pages/LessonPage.jsx";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import LessonEnginePage from "./pages/LessonEnginePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import LinearAlgebraCoursePage from "./pages/LinearAlgebraCoursePage.jsx";
import MasteryPage from "./pages/MasteryPage.jsx";
import InstructorPage from "./pages/InstructorPage.jsx";
import CreateCoursePage from "./pages/CreateCoursePage.jsx";
import CourseBuilderPage from "./pages/CourseBuilderPage.jsx";
import ModuleBuilderPage from "./pages/ModuleBuilderPage.jsx";
import LessonBuilderPage from "./pages/LessonBuilderPage.jsx";
import AssessmentBuilderPage from "./pages/AssessmentBuilderPage.jsx";
import ResearchBuilderPage from "./pages/ResearchBuilderPage.jsx";
import PortfolioBuilderPage from "./pages/PortfolioBuilderPage.jsx";
import PublishCoursePage from "./pages/PublishCoursePage.jsx";
import TestSupabase from "./pages/TestSupabase";
import { Navigate } from "react-router-dom";
import LibraryHome from "./pages/library/LibraryHome.jsx";
import LinearAlgebraLesson from "./pages/library/college/LinearAlgebraLesson";
import LinearAlgebra from "./pages/library/college/LinearAlgebra";
import LinearAlgebraLessonsTest from "./pages/library/college/LinearAlgebraLessonsTest";
import MainNavbar from "./components/navigation/MainNavbar";
import HighSchoolMathematics from "./pages/library/highschool/HighSchoolMathematics";
import AlgebraOne from "./pages/library/highschool/AlgebraOne";
import Algebra1CoursePage from "./pages/Algebra1CoursePage.jsx";
import AlgebraOneModule from "./pages/library/highschool/AlgebraOneModule.jsx";
import AlgebraOneLesson from "./pages/library/highschool/AlgebraOneLesson.jsx";
import ComputerScience from "./pages/library/ComputerScience.jsx";
import DataAI from "./pages/library/DataAI.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/lessons/:lessonSlug" element={<LessonPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/lesson-engine" element={<LessonEnginePage />} />
          <Route
  path="/lesson-engine/:lessonSlug"
  element={<LessonEnginePage />}
/>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
  path="/schools/mathematics"
  element={<MathematicsSchool />}
/>
<Route
  path="/library/computer-science"
  element={<ComputerScience />}
/>

<Route
  path="/library/data-ai"
  element={<DataAI />}
/>
          
<Route
  path="/library/college/linear-algebra/module/:moduleNumber"
  element={<LinearAlgebraModule />}
/>
  <Route
  path="/dashboard"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <Dashboard />
    </ProtectedRoute>
  }
/>
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
  path="/courses/linear-algebra-foundations"
  element={<LinearAlgebraCoursePage />}
/>
<Route
  path="/courses/advanced-algebra-1"
  element={<Algebra1CoursePage />}
/>


          <Route 
          path="/projects/:id"
           element={<ProjectDetail />
        } 
        
        />
        
        <Route 
        path="/mastery" 
        element={<MasteryPage />}
         />
    <Route
  path="/instructor"
  element={
    <ProtectedRoute allowedRoles={["admin", "instructor"]}>
      <InstructorPage />
    </ProtectedRoute>
  }
/>    

<Route
  path="/instructor/create-course"
  element={<CreateCoursePage />}
/>

<Route
  path="/instructor/courses"
  element={<CourseBuilderPage />}
/>

<Route
  path="/instructor/modules"
  element={<ModuleBuilderPage />}
/>

<Route
  path="/instructor/lessons"
  element={<LessonBuilderPage />}
/>

<Route
  path="/instructor/assessments"
  element={<AssessmentBuilderPage />}
/>

<Route
  path="/instructor/research"
  element={<ResearchBuilderPage />}
/>
<Route
  path="/library/college/linear-algebra"
  element={<LinearAlgebra />}
/>

<Route
  path="/instructor/portfolio"
  element={<PortfolioBuilderPage />}
/>

<Route
  path="/instructor/publish"
  element={<PublishCoursePage />}
/>
<Route
  path="/test-supabase"
  element={<TestSupabase />}
/>
<Route 
path="/library" 
element={<LibraryHome />} 
/>
<Route
  path="/library/mathematics"
  element={<Mathematics />}
/>
  
<Route
  path="/test/linear-algebra-lessons"
  element={<LinearAlgebraLessonsTest />}
/>
<Route
  path="/library/college/linear-algebra/module/:moduleNumber/lesson/:lessonSlug"
  element={<LinearAlgebraLesson />}
/>
<Route
  path="/library/mathematics/high-school"
  element={<HighSchoolMathematics />}
/>
<Route
  path="/library/high-school/algebra-1"
  element={<AlgebraOne />}
/>
<Route
  path="/library/high-school/algebra-1/module/:moduleNumber"
  element={<AlgebraOneModule />}
/>
<Route
  path="/library/high-school/algebra-1/module/:moduleNumber/lesson/:lessonSlug"
  element={<AlgebraOneLesson />}
/>
   </Routes>
      </main>

      <Footer />
    </div>
  );
}