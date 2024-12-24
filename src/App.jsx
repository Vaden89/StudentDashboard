import { Route, Routes } from "react-router";
import "./index.css";
import { AuthPage } from "./pages/Auth";
import { SideBar } from "./components/SideBar";
import { DashboardPage } from "./pages/Dashboard";
import { CoursesPage } from "./pages/Courses";
import { ResultsPage } from "./pages/Results";
import { TimeTablePage } from "./pages/TimeTable";

function App() {
  return (
    <>
      {/* External Routes/Pages */}
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>

      {/* Protected Routes also known as the internal pages */}
      <Routes>
        <Route path="dashboard" element={<SideBar />}>
          <Route index element={<DashboardPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="timetable" element={<TimeTablePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
