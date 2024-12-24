import { BookMarked, ClipboardList, Home, Sheet } from "lucide-react";

export const navItem = [
  {
    title: "Home",
    icon: Home,
    link: "/dashboard",
  },
  {
    title: "Courses",
    icon: ClipboardList,
    link: "/dashboard/courses",
  },
  {
    title: "Results",
    icon: BookMarked,
    link: "/dashboard/results",
  },
  {
    title: "TimeTable",
    icon: Sheet,
    link: "/dashboard/timetable",
  },
];
