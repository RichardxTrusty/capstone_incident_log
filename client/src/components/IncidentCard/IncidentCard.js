import React from "react";
import "./IncidentCard.scss";
import { Link } from "react-router-dom";
import DeleteIncident from "../DeleteIncident/DeleteIncident";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronIcon from "../../assets/icons/chevron_right-24px.svg";

function IncidentCard({
  number_of_affected_users,
  event_begin_date,
  name,
  phone,
  email,
  id,
  fetchData,
}) {
  return (
    <div className="incidentcard">
      <div className="incidentcard__info">
        <div className="incidentcard__location">
          <h4 className="incidentcard__copy incidentcard__title">WAREHOUSE</h4>
          <div className="incidentcard__name-container">
            {/* Link to Incident Details Component */}
            <Link to={`/IncidentDetails/${id}`}>
              <h3 className="incidentcard__city">{id}</h3>
            </Link>
            <img src={ChevronIcon}></img>
          </div>
          {/* <h4 className="incidentcard__copy incidentcard__title">ADDRESS</h4> */}
          <h4 className="incidentcard__copy incidentcard__address">
            {number_of_affected_users}
          </h4>
          <h4 className="incidentcard__copy">{event_begin_date}</h4>
        </div>
        <div className="incidentcard__contact">
          <h4 className="incidentcard__copy incidentcard__title">
            CONTACT NAME
          </h4>
          <h4 className="incidentcard__copy">{name}</h4>
          <h4 className="incidentcard__copy incidentcard__title">
            CONTACT INFORMATION
          </h4>
          <div className="incidentcard__contact-info">
            <h4 className="incidentcard__copy">{phone}</h4>
            <h4 className="incidentcard__copy">{email}</h4>
          </div>
        </div>
      </div>
      <div className="incidentcard__icons">
        <DeleteIncident
          incidentid={id}
          fetchData={fetchData}
          icon={<img src={DeleteIcon}></img>}
        />
        <Link to={`/EditIncident/${id}`}>
          <img src={EditIcon}></img>
        </Link>
      </div>
      {/* tablet and desktop */}
      <div className="incidentcard__info--tablet-desktop">
        <div className="incidentcard__name-container">
          <Link to={`/IncidentDetails/${id}`}>
            <h3 className="incidentcard__city">{id}</h3>
          </Link>
          <img src={ChevronIcon}></img>
        </div>
        <h4 className="incidentcard__copy incidentcard__address">
          {number_of_affected_users}
        </h4>
        <h4 className="incidentcard__copy incidentcard__address">
          {event_begin_date}
        </h4>
        <h4 className="incidentcard__copy incidentcard__name">{name}</h4>
        <div className="incidentcard__contact-info">
          <h4 className="incidentcard__copy">{phone}</h4>
          <h4 className="incidentcard__copy">{email}</h4>
        </div>
        <div className="incidentcard__icons--tablet-desktop">
          <DeleteIncident
            incidentid={id}
            fetchData={fetchData}
            icon={<img src={DeleteIcon}></img>}
          />
          <Link to={`/EditIncident/${id}`}>
            <img src={EditIcon}></img>
          </Link>
        </div>
      </div>
    </div>
    //  </Link>
  );
}

export default IncidentCard;
