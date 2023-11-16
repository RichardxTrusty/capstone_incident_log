import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./WarehouseDetails.scss";
import WarehouseCard from "../WarehouseCard/WarehouseCard";
import ArrowBack from "../../assets/images/arrow_back-24px.svg";
import axios from "axios";

export function WarehouseDetails({}) {
  const { id } = useParams();
  const [warehouseData, setWarehouseData] = useState([]);

  const apiURL = process.env.REACT_APP_DATA;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiURL}/incidents/${id}`);
        console.log(data);
        setWarehouseData(...data);
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
          <Link to="/WarehouseList">
            <img
              className="incidents__img"
              src={ArrowBack}
              alt="back button"
            />
          </Link>
          <h1 className="incidents__nav--title">
            {warehouseData.number_of_affected_users}
          </h1>
        </div>

        {/* Edit Button Section  */}

        <form className="incidents__forms">
          <Link to={`/EditWarehouse/${id}`}>
            <button className="incidents__button">
              <h3>Edit</h3>
            </button>
          </Link>
        </form>
      </div>

      {/* Warehouse Details Section */}
      <div className="incident">
        <div className="warehouseInformation incidentsection">
          <div className="warehouseBlock">
            <h4 className="">WAREHOUSE ADDRESS:</h4>
            {warehouseData.event_begin_date}
            <br />
            {warehouseData.number_of_affected_users},{" "}
            {warehouseData.management_group}
          </div>
          <div className="warehouseInformation warehouseBorder">
            <div className="warehouseBlock">
              <h4 className="">CONTACT NAME:</h4>
              {warehouseData.reporter_name} <br />
              {warehouseData.reporter_position}
            </div>
            <div className="warehouseBlock">
              <h4 className="">CONTACT INFORMATION:</h4>
              {warehouseData.reporter_phone} <br />{" "}
              {warehouseData.reporter_email}
            </div>
          </div>
        </div>
      </div>

      <div className="incidents__sections">
        <h4>Inventory Item</h4>
        <h4>Category</h4>
        <h4>Status</h4>
        <h4>Qauntity</h4>
        <h4>ACTIONS</h4>
      </div>
      {/* Inventory List to be displayed: */}
    </div>
  );
}
