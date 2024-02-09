import Homepage from "./homepage";
import './App.css';
import { Routes, Route, Navigate, Router } from "react-router-dom";
import { useEffect, useState } from "react";
import Member from "./pages/Admin pages/member";
import Admin from "./pages/Admin pages/admin";
import MapPage from "./pages/Admin pages/MapPage";
import VerificationsPage from "./pages/Admin pages/VerificationsPage";
// import Header from "./pages/Admin pages/Header";
// import Navigation from "./pages/Admin pages/Navigation";
// //import SidePanel from "./pages/Admin pages/SidePanel";
import BasicInfoForm from "./pages/basicform";
import Login from "./pages/login";
import Agencymain from "./pages/Agency Pages/agencymain";
import AgencyProfilemain from "./pages/Agency Pages/AgencyActivity/AgencyProfile/AgencyProfileMain";
import AgencyInventoryMain from "./pages/Agency Pages/AgencyActivity/AgencyInventory/AgencyInventoryMain";
import AgencyDatabaseMain from "./pages/Agency Pages/AgencyActivity/AgencyDatabase/Agencydb/AgencyDatabaseMain";
import AgencyRecordMain from "./pages/Agency Pages/AgencyActivity/AgencyDatabase/AgencyRecord/AgencyRecordMain";
import ShelterShiftingMain from "./pages/Agency Pages/AgencyActivity/AgencyDatabase/ShelterShifting/ShelterShiftingMain";
import AgencyMessageMain from "./pages/Agency Pages/AgencyMessage/AgencyMessageMain"
import SearchMain from "./pages/Admin pages/govAlert/SearchMain";
import Feedpage from "./pages/feedpage";
import AgencyDirectory from "./pages/Admin pages/AgencyDirectory";
import NotificationG from "./pages/Admin pages/notificationG";
import Centre from "./pages/Admin pages/Centre";
import MyForm from "./pages/Awareness/MyForm";
import Earthquake from "./pages/Awareness/earthquake";
import UserPlatform from "./pages/Awareness/UserPlatform";
import Quiz from "./pages/Awareness/Quiz";
import UserCertificate from "./pages/Awareness/UserCertificate";
import FormAwness from "./pages/Awareness/FormAwness";
import BookingSlots from "./pages/Awareness/BookingSlots";
import MissingFormmain from "./pages/Agency Pages/AgencyActivity/MissingForm/MissingFormMain";
import VictimsPage from "./pages/Admin pages/VictimsPage";


function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Routes>

        <Route
          exact
          path="/"
          element={user ? <Navigate to="/" /> : <Homepage />}
        />
        <Route
          exact
          path="/1236547811"
          element={<Member />}
        />
        <Route
          exact
          path="/BasicInfoForm"
          element={<BasicInfoForm />}
        />
        <Route
          exact
          path="/Login"
          element={<Login />}
        />
        <Route
          exact
          path="/admin"
          element={<Admin user={user} />}
        />
        {/* <Route
          exact
          path="/MapPage"
          element={<MapPage />}
        /> */}
        <Route
          exact
          path="/VerificationsPage"
          element={<VerificationsPage />}
        />
        <Route
          exact
          path="/Agencymain"
          element={user ? <Navigate to="/" /> : <Agencymain />}
        />
        <Route
          exact
          path="/AgencyDatabaseMain"
          element={<AgencyDatabaseMain />}
        />
        <Route
          exact
          path="/ShelterShiftingMain"
          element={<ShelterShiftingMain />}
        />
        <Route
          exact
          path="/AgencyRecordMain"
          element={<AgencyRecordMain />}
        />

        <Route
          exact
          path="/AgencyProfileMain"
          element={<AgencyProfilemain />}
        />
        <Route
          exact
          path="/AgencyInventoryMain"
          element={<AgencyInventoryMain />}
        />
        <Route
          exact
          path="/AgencyMessageMain"
          element={<AgencyMessageMain />}
        />
        <Route
          exact
          path="/SearchMain"
          element={<SearchMain />}
        />
        <Route
          exact
          path="/Feedpage"
          element={<Feedpage />}
        />
        <Route
          exact
          path="/AgencyDirectory"
          element={<AgencyDirectory />}
        />
        <Route
          exact
          path="/NotificationG"
          element={<NotificationG />}
        />
         <Route
          exact
          path="/Centre"
          element={<Centre />}
        />
        <Route
          exact
          path="/UserPlatform"
          element={<UserPlatform />}
        />
         <Route
          exact
          path="/Awareness"
          element={<MyForm />}
          // element={<FormAwness />}
        />
         <Route
          exact
          path="/Earthquake"
          element={<Earthquake />}
        />
         <Route
          exact
          path="/Quiz"
          element={<Quiz />}
        />
           <Route
          exact
          path="/UserCertificate"
          element={<UserCertificate />}
        />
         <Route
          exact
          path="/BookingSlots"
          element={<BookingSlots />}
        />
        <Route
          exact
          path="/MissingFormMain"
          element={<MissingFormmain />}
        />
        <Route
          exact
          path="/VictimsPage"
          element={<VictimsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
