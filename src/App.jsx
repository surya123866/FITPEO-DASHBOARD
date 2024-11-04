import { Routes, Route } from "react-router-dom";
import NotFound from "./components/Not-Found";
import MyContext from "./components/ThemeContext";
import { useContext } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { SkeletonTheme } from "react-loading-skeleton";
import Dashboard from "./Pages/Dashboard";
import Footer from "./components/footer";
// import Settings from "./pages/settings";
// import Notifications from "./pages/Trainings";
// import Messages from "./pages/Messages";
// import Orders from "./pages/Profile";
// import Activity from "./pages/activity";
// import Profile from "./pages/profile";
// import Finance from "./pages/finance";
// import Deliveries from "./pages/deliveries";

function App() {
  const { isDarkMode } = useContext(MyContext);
  return (
    <SkeletonTheme
      baseColor={isDarkMode ? "#ffffff" : "#202028"}
      highlightColor={isDarkMode ? "#f1eff8" : "#4e5282"}
    >
      <div
        className={`flex w-full ${
          isDarkMode ? "bg-[#f1eff8]" : "bg-[#141416]"
        }`}
      >
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex-grow p-1 lg:p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Uncomment and add your routes */}
              {/* <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/deliveries" element={<Deliveries />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </SkeletonTheme>
  );
}

export default App;
