import React, { useState } from "react";
import "./App.scss";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
// pages component(s) import
import Header from "./components/Header/Header";
import IncidentList from "./components/IncidentList/IncidentList";
import { IncidentDetails } from "./components/IncidentDetails/IncidentDetails";
import IncidentCard from "./components/IncidentCard/IncidentCard";
import EditIncident from "./components/EditIncident/EditIncident"; // Import the EditIncident component
import Footer from "./components/Footer/Footer"; // Import the footer component
import AddIncident from "./components/AddIncident/AddIncident";
function App() {
  return (
    <section className="application">
      <Header />
      <Routes>
        <Route path={"/IncidentList"} element={<IncidentList />} />
        <Route path={"/IncidentDetails/:id"} element={<IncidentDetails />} />
        <Route path={"/EditIncident/:incidentid"} element={<EditIncident />} />
        <Route path={"/AddIncident"} element={<AddIncident />} />
      </Routes>
      {/* <Footer /> */}
    </section>
  );
}

export default App;
