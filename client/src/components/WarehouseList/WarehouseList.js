import React, { useEffect, useState } from "react";
import "./WarehouseList.scss";
import WarehouseCard from "../WarehouseCard/WarehouseCard";
import axios from "axios";
import SearchIcon from "../../assets/icons/search-24px.svg";
import { useNavigate } from "react-router-dom";

function WarehouseList({}) {
  const [warehouseData, setWarehouseData] = useState([]);
  console.log(process.env);
  const apiURL = process.env.REACT_APP_DATA;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiURL}/incidents`);
        setWarehouseData(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  let navigate = useNavigate();

  function goAdd() {
    navigate("/AddWarehouse");
  }

  return (
    <div className="incidents">
      <div className="incidents__header">
        <h1 className="incidents__title">Logged Incidents</h1>
        <form className="incidents__form">
          <div className="incidents__input-container">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="incidents__input"></input>
            <img className="incidents__search-icon" src={SearchIcon}></img>
          </div>
          <button className="incidents__add-button">
            <h3 onClick={goAdd}>Report new Major Incident</h3>
          </button>
        </form>
      </div>
      <div className="incidents__sections">
        <h2>Nubmer of Affected Users</h2>
        <h2>Event Begin Date</h2>
        <h2>Reporter Name</h2>
        <h2>Reporter Information</h2>
        <h2>ACTIONS</h2>
      </div>
      {warehouseData.map((incident) => (
        <WarehouseCard
          key={incident.id}
          number_of_affected_users={incident.number_of_affected_users}
          event_begin_date={incident.event_begin_date}
          name={incident.reporter_name}
          phone={incident.reporter_phone}
          email={incident.reporter_email}
          id={incident.id}
        />
      ))}
    </div>
  );
}

export default WarehouseList;
