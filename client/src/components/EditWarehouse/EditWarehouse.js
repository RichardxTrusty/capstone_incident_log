/* EditWarehouse.js */
import React, { useEffect, useState } from "react";
import "./EditWarehouse.scss"; // Import the SASS
import backIcon from "../../assets/images/arrow_back-24px.svg"; // Import the icon
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EditWarehouse = () => {
  const { warehouseid } = useParams();

  console.log(warehouseid);

  const [defaultWarehouseData, setDefaultWarehouseData] = useState([
    {
      impact_condition: "",
      event_begin_date: "",
      number_of_affected_users: "",
      management_group: "",
      reporter_name: "",
      reporter_position: "",
      reporter_phone: "",
      reporter_email: "",
    },
  ]);

  // get incident data
  useEffect(() => {
    if (warehouseid) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `${apiURL}/incidents/${warehouseid}`
          );
          setDefaultWarehouseData(data);
          console.log(data);
        } catch (error) {
          console.log("Error:", error);
        }
      };
      fetchData();
    }
  }, []);

  // State to store form field values
  const [warehouseData, setWarehouseData] = useState({
    impact_condition: "",
    event_begin_date: "",
    number_of_affected_users: "",
    management_group: "",
    reporter_name: "",
    reporter_position: "",
    reporter_phone: "",
    reporter_email: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWarehouseData({ ...warehouseData, [name]: value });
  };

  // api url
  const apiURL = process.env.REACT_APP_DATA;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(`${apiURL}/incidents/${warehouseid}`, {
        impact_condition: warehouseData.impact_condition,
        event_begin_date: warehouseData.event_begin_date,
        number_of_affected_users: warehouseData.number_of_affected_users,
        management_group: warehouseData.management_group,
        reporter_name: warehouseData.reporter_name,
        reporter_position: warehouseData.reporter_position,
        reporter_phone: warehouseData.reporter_phone,
        reporter_email: warehouseData.reporter_email,
      })
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  };

  console.log(defaultWarehouseData);

  return (
    <div className="edit-incident-container">
      <form onSubmit={handleSubmit}>
        <div className="edit-incident-card">
          <div className="edit-incident">
            <div className="edit-warehouse__header">
              <Link to={`/warehouselist`}>
                <img
                  src={backIcon}
                  alt="Back Icon"
                  className="edit-warehouse__back-icon"
                />
              </Link>
              <h1 className="edit-warehouse__title">Edit Warehouse</h1>
            </div>
            <hr className="edit-warehouse__divider" />
            <div className="edit-warehouse__items">
              <div className="edit-warehouse__section">
                <h2 className="edit-warehouse__section-title">
                  Warehouse Details
                </h2>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="warehouseName">Warehouse Name</label>
                  <br />
                  <input
                    type="text"
                    id="impact_condition"
                    name="impact_condition"
                    value={warehouseData.impact_condition}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].impact_condition}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="event_begin_date">Street Address</label>
                  <br />
                  <input
                    type="text"
                    id="event_begin_date"
                    name="event_begin_date"
                    value={warehouseData.event_begin_date}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].event_begin_date}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="number_of_affected_users">City</label>
                  <br />
                  <input
                    type="text"
                    id="number_of_affected_users"
                    name="number_of_affected_users"
                    value={warehouseData.number_of_affected_users}
                    onChange={handleInputChange}
                    placeholder={
                      defaultWarehouseData[0].number_of_affected_users
                    }
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="management_group">Country</label>
                  <br />
                  <input
                    type="text"
                    id="management_group"
                    name="management_group"
                    value={warehouseData.management_group}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].management_group}
                  />
                </div>
              </div>
              <hr className="edit-warehouse__divider edit-warehouse__divider-second" />
              <div className="edit-warehouse__section">
                <h2 className="edit-warehouse__section-title">
                  Contact Details
                </h2>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="contactName">Contact Name</label>
                  <br />
                  <input
                    type="text"
                    id="reporter_name"
                    name="reporter_name"
                    value={warehouseData.reporter_name}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].reporter_name}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="position">Position</label>
                  <br />
                  <input
                    type="text"
                    id="reporter_position"
                    name="reporter_position"
                    value={warehouseData.reporter_position}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].reporter_position}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    id="reporter_phone"
                    name="reporter_phone"
                    value={warehouseData.reporter_phone}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].reporter_phone}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="text"
                    id="reporter_email"
                    name="reporter_email"
                    value={warehouseData.reporter_email}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].reporter_email}
                  />
                </div>
              </div>
            </div>
            <div className="edit-warehouse__buttons">
              <button className="edit-warehouse__cancel-button">Cancel</button>
              <button type="submit" className="edit-warehouse__save-button">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditWarehouse;
