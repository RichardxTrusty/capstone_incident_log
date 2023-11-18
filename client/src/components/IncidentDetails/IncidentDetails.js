import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./IncidentDetails.scss";
import IncidentCard from "../IncidentCard/IncidentCard";
import ArrowBack from "../../assets/images/arrow_back-24px.svg";
import axios from "axios";
export function IncidentDetails({}) {
  const { id } = useParams();
  const [incidentData, setIncidentData] = useState({
    impact_condition: "",
    event_begin_date: "",
    number_of_affected_users: "",
    management_group: "",
    reporter_name: "",
    reporter_position: "",
    reporter_phone: "",
    reporter_email: "",
    incidents_log: {
      // 0: { log: "", reporter: "", created_date: Date.now() },
    },
  });

  const apiURL = process.env.REACT_APP_DATA;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiURL}/incidents/${id}`);
        // console.log(data);
        setIncidentData(...data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="incidents">
      <div className="incidents__header">
        <div className="incidents__nav">
          <Link to="/IncidentList">
            <img className="incidents__img" src={ArrowBack} alt="back button" />
          </Link>
          <h1 className="incidents__nav__title">Incident {incidentData.id}</h1>
        </div>

        {/* Edit Button Section  */}

        <form className="incidents__forms">
          <Link to={`/EditIncident/${id}`}>
            <button className="incidents__button">
              <h3 className="incidents__edit">Edit</h3>
            </button>
          </Link>
        </form>
      </div>

      {/* Incident Details Section */}
      <div className="incidents">
        <div className="incidentInformation incidentsection">
          <div className="incidentBlock">
            <h3 className="">Incident Information:</h3>
            <h5>
              <strong>Event Begin Date: </strong>
              {incidentData.event_begin_date}
            </h5>
            <h5>
              <strong>Number of Affected Users: </strong>
              {incidentData.number_of_affected_users}
            </h5>
            <h5>
              <strong>Reporting Group: </strong>
              {incidentData.management_group}
            </h5>
          </div>
          <div className="incidentBlock">
            <h3 className="">Reporter Contact Information:</h3>
            <h5>
              <strong>Reported By: </strong> {incidentData.reporter_name}
            </h5>
            <h5>
              <strong>Reporter Group: </strong>
              {incidentData.reporter_position}
            </h5>
            <h5>
              <strong>Reporter Phone: </strong>
              {incidentData.reporter_phone}
            </h5>{" "}
            <h5>
              <strong>Reporter Email: </strong>
              {incidentData.reporter_email}
            </h5>
          </div>
        </div>
        <h2 className="incident_log_overview">Incident Log Overview</h2>
        <div className="incidents__description">
          {Object.values(
            !!incidentData.incidents_log ? incidentData.incidents_log : {}
          )
            .map((incident, index) => {
              return (
                <div className="">
                  <div key={index} className="incidents__timestamp">
                    {incident.created_date}
                  </div>
                  <p
                    key={index}
                    className="incidents__description__textarea"
                    // value={incident.log}
                    // onChange={handleInputChange}
                    // id="freeform"
                    // name="freeform"
                    // rows="5"
                    // cols="33"
                  >
                    {incident.log}
                  </p>
                </div>
              );
              // incident.log;
            })
            .map((x) => x)
            .reverse()}
          {/* <textarea
            className="incidents__description__textarea"
            value={Object.values(incidentData.incidents_log)
              .map((incident) => incident.log)
              .toString()}
            // onChange={handleInputChange}
            id="freeform"
            name="freeform"
            // rows="5"
            // cols="33"
          >
            Enter text here...
          </textarea> */}
        </div>
      </div>
    </div>
  );
}
