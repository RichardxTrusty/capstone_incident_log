import React, { useEffect, useState } from "react";
import "./IncidentList.scss";
import IncidentCard from "../IncidentCard/IncidentCard";
import axios from "axios";
import SearchIcon from "../../assets/icons/search-24px.svg";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/images/add_icon.svg";
function IncidentList({}) {
  const [incidentData, setIncidentData] = useState([]);
  console.log(process.env);
  const apiURL = process.env.REACT_APP_DATA;
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${apiURL}/incidents`);
      console.log("Set Data:", data);
      setIncidentData(data.reverse());
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const { data } = await axios.get(`${apiURL}/incidents`);
    //     setIncidentData(data);
    //   } catch (error) {
    //     console.log("Error:", error);
    //   }
    // };
    fetchData();
  }, []);

  let navigate = useNavigate();

  function goAdd() {
    navigate("/AddIncident");
  }

  return (
    <div className="incidents">
      <div className="incidents__header">
        <h1 className="incidents__title">Logged Incidents</h1>
        <form className="incidents__form">
          {/* <div className="incidents__input-container">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="incidents__input"></input>
            <img className="incidents__search-icon" src={SearchIcon}></img>
          </div> */}
          {/* <button className="incidents__add-button"> */}
          <h3 className="incidents__title" onClick={goAdd}>
            Add Incident <img className="incidents__img" src={AddIcon} />
          </h3>
          {/* </button> */}
        </form>
      </div>
      <div className="incidents__sections">
        <h2>Id</h2>
        <h2>Affected Users</h2>
        <h2>Start Date</h2>
        <h2>Reporter</h2>
        <h2>Reporter Details</h2>
        <h2>Actions</h2>
      </div>
      {incidentData.map((incident) => (
        <IncidentCard
          key={incident.id}
          number_of_affected_users={incident.number_of_affected_users}
          event_begin_date={incident.event_begin_date}
          name={incident.reporter_name}
          phone={incident.reporter_phone}
          email={incident.reporter_email}
          id={incident.id}
          fetchData={fetchData}
        />
      ))}
    </div>
  );
}

export default IncidentList;
