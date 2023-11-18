/* EditIncident.js */
import React, { useEffect, useState } from "react";
import "./EditIncident.scss"; // Import the SASS
import backIcon from "../../assets/images/arrow_back-24px.svg"; // Import the icon
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditIncident = () => {
  const { incidentid } = useParams();

  console.log(incidentid);
  const [incidents, setIncidents] = useState([]);
  const [defaultIncidentData, setDefaultIncidentData] = useState([
    {
      impact_condition: "",
      event_begin_date: "",
      number_of_affected_users: "",
      management_group: "",
      reporter_name: "",
      reporter_position: "",
      reporter_phone: "",
      reporter_email: "",
      incidents_log: {},
    },
  ]);

  // get incident data
  useEffect(() => {
    if (incidentid) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`${apiURL}/incidents/${incidentid}`);
          setDefaultIncidentData(data);
          setIncidentData(data[0]);
          console.log(data);
          setIncidents(Object.values(data[0].incidents_log));
        } catch (error) {
          console.log("Error:", error);
        }
      };
      fetchData();
    }
  }, []);

  // State to store form field values
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

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "incidents_log") {
      setIncidentData({
        ...incidentData,
        [name]: {
          ...incidentData[name],
          [incidents?.length]: {
            log: value,
            created_date: `${new Date().toDateString()} - ${new Date().toTimeString()}`,
          },
        },
      });
      // return;
    } else setIncidentData({ ...incidentData, [name]: value });
  };

  // api url
  const apiURL = process.env.REACT_APP_DATA;
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    console.log("SUBMIT", incidentData.incidents_log);
    e.preventDefault();
    axios
      .put(`${apiURL}/incidents/${incidentid}`, {
        impact_condition: incidentData.impact_condition,
        event_begin_date: incidentData.event_begin_date,
        number_of_affected_users: incidentData.number_of_affected_users,
        management_group: incidentData.management_group,
        reporter_name: incidentData.reporter_name,
        reporter_position: incidentData.reporter_position,
        reporter_phone: incidentData.reporter_phone,
        reporter_email: incidentData.reporter_email,
        incidents_log: JSON.stringify(incidentData.incidents_log),
      })
      .then((result) => {
        console.log(result);

        navigate(`/incidentdetails/${incidentid}`);
      })
      .catch((e) => console.log(e));
  };

  console.log(defaultIncidentData);

  return (
    <div className="edit-incident-container">
      <form onSubmit={handleSubmit}>
        <div className="edit-incident-card">
          <div className="edit-incident">
            <div className="edit-incident__header">
              <Link to={`/incidentdetails/${incidentid}`}>
                <img
                  src={backIcon}
                  alt="Back Icon"
                  className="edit-incident__back-icon"
                />
              </Link>
              <h1 className="edit-incident__title">Edit Incident </h1>
            </div>
            {/* <hr className="edit-incident__divider" /> */}
            <div className="edit-incident__items">
              <div className="edit-incident__section">
                <h2 className="edit-incident__section-title">
                  Incident Details
                </h2>
                <div className="edit-incident__form-field">
                  <label htmlFor="incidentName">Impact Condition</label>
                  <br />
                  <input
                    type="text"
                    id="impact_condition"
                    name="impact_condition"
                    value={incidentData.impact_condition}
                    onChange={handleInputChange}
                    placeholder={incidentData.impact_condition}
                  />
                </div>
                <div className="edit-incident__form-field">
                  <label htmlFor="event_begin_date">Event Begin Date</label>
                  <br />
                  <input
                    type="date"
                    id="event_begin_date"
                    name="event_begin_date"
                    value={incidentData.event_begin_date}
                    onChange={handleInputChange}
                    placeholder={incidentData.event_begin_date}
                  />
                </div>
                <div className="edit-incident__form-field">
                  <label htmlFor="number_of_affected_users">
                    Number of Affected Users
                  </label>
                  <br />
                  <input
                    type="number"
                    id="number_of_affected_users"
                    name="number_of_affected_users"
                    min={0}
                    value={incidentData.number_of_affected_users}
                    onChange={handleInputChange}
                    placeholder={incidentData.number_of_affected_users}
                  />
                </div>
                <div className="edit-incident__form-field">
                  <label htmlFor="management_group">Management Group</label>
                  <br />
                  <input
                    type="text"
                    id="management_group"
                    name="management_group"
                    value={incidentData.management_group}
                    onChange={handleInputChange}
                    placeholder={incidentData.management_group}
                  />
                </div>
              </div>
              <div className="edit-incident__section">
                <h2 className="edit-incident__section-title">
                  Reporter Details
                </h2>
                <div className="edit-incident__form-field">
                  <label htmlFor="contactName">Reporter Name</label>
                  <br />
                  <input
                    type="text"
                    id="reporter_name"
                    name="reporter_name"
                    value={incidentData.reporter_name}
                    onChange={handleInputChange}
                    placeholder={incidentData.reporter_name}
                  />
                </div>
                <div className="edit-incident__form-field">
                  <label htmlFor="position">Reporter Position</label>
                  <br />
                  <input
                    type="text"
                    id="reporter_position"
                    name="reporter_position"
                    value={incidentData.reporter_position}
                    onChange={handleInputChange}
                    placeholder={incidentData.reporter_position}
                  />
                </div>
                <div className="edit-incident__form-field">
                  <label htmlFor="phoneNumber">Reporter Phone Number</label>
                  <br />
                  <input
                    type="text"
                    id="reporter_phone"
                    name="reporter_phone"
                    value={incidentData.reporter_phone}
                    onChange={handleInputChange}
                    placeholder={incidentData.reporter_phone}
                  />
                </div>
                <div className="edit-incident__form-field">
                  <label htmlFor="email">Reporter Email</label>
                  <br />
                  <input
                    type="text"
                    id="reporter_email"
                    name="reporter_email"
                    value={incidentData.reporter_email}
                    onChange={handleInputChange}
                    placeholder={incidentData.reporter_email}
                  />
                </div>
                <div className="edit-incident__form-field  edit-incident__form-field_incident_log">
                  <label htmlFor="email">Add Incident Log</label>
                  <br />
                  <input
                    className="incidents__description__textarea"
                    // value={incidentData.incidents_log}
                    // // onChange={handleInputChange}
                    // id="freeform"
                    // name="freeform"
                    // // rows="5"
                    // // cols="33"
                    type="text"
                    id="incidents_log"
                    name="incidents_log"
                    // value={incidentData.incidents_log}
                    onChange={handleInputChange}
                    // defaultValue={incidentData.incidents_log}
                  />
                  {/* Log incidents here...
                  </textarea> */}
                  {/* <input
                    type="text"
                    id="incidents_log"
                    name="incidents_log"
                    value={incidentData.incidents_log}
                    onChange={handleInputChange}
                    placeholder={incidentData.incidents_log}
                  /> */}
                  {/* <DyanmicIncidentLogForm
                    className="incidentLog"
                    value={incidentData.incidents_log}
                    onChange={handleInputChange}></DyanmicIncidentLogForm> */}
                </div>
              </div>
            </div>
            {/* DyanmicIncidentLogForm */}
            <div className="edit-incident__button">
              {/* <button className="edit-incident__cancel-button">Cancel</button> */}

              <button
                // onClick={`/incidentdetails/${incidentid}`}
                type="submit"
                className="edit-incident__button--save">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <DyanmicIncidentLogForm
        onChange={handleInputChange}></DyanmicIncidentLogForm> */}
    </div>
  );
};
export default EditIncident;
