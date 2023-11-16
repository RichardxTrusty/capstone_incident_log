import React, { useState, useEffect } from "react";
import "./InventoryCard.scss";
import { Link } from "react-router-dom";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronIcon from "../../assets/icons/chevron_right-24px.svg";
import axios from "axios";
import InventoryDetails from "../InventoryDetails/InventoryDetails";

function InventoryCard({ id, item, category, status, quantity, incident }) {
  const apiURL = process.env.REACT_APP_DATA;

  useEffect(() => {
    if (incident) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`${apiURL}/incidents/${incident}`);
          console.log(data);
          setWarehouseData(data);
          setInventoryData(data);
        } catch (error) {
          console.log("Error:", error);
        }
      };
      fetchData();
    }
  }, []);

  const [warehouseData, setWarehouseData] = useState([]);

  const [inventoryData, setInventoryData] = useState([]);

  return (
    <div className="inventory-card">
      <div className="inventory-card__info">
        <div className="inventory-card__location">
          <h4 className="inventory-card__copy inventory-card__title">
            INVENTORY ITEM
          </h4>
          <div className="inventory-card__name-container">
            {/* {inventoryData.map((inventory) => ( */}
            <Link to={`/InventoryDetails/${id}`}>
              {/* <InventoryDetails
                inventoryid={inventory.id}
                itemname={inventory.item}
                icon={<img src={ChevronIcon} alt="Chevron Icon" />}
              /> */}
              {/* ))} */}
              <h3 className="inventory-card__item">{item}</h3>
              <img src={ChevronIcon} alt="Chevron Icon" />
            </Link>
          </div>
          <h4 className="inventory-card__copy inventory-card__title">
            CATEGORY
          </h4>
          <h4 className="inventory-card__copy">{category}</h4>
        </div>
        <div className="inventory-card__contact">
          <h4 className="inventory-card__copy inventory-card__title">STATUS</h4>
          <h4 className="inventory-card__copy">{status}</h4>
          <h4 className="inventory-card__copy inventory-card__title">QTY</h4>
          <h4 className="inventory-card__copy">{quantity}</h4>
          <h4 className="inventory-card__copy inventory-card__title">
            WAREHOUSE
          </h4>
          <h4 className="inventory-card__copy">
            {warehouseData[0]?.impact_condition}
          </h4>
        </div>
      </div>
      <div className="inventory-card__icons">
        <Link to={`/DeleteInventory`}>
          <img src={DeleteIcon}></img>
        </Link>
        <Link to={`/EditInventory/${id}`}>
          <img src={EditIcon}></img>
        </Link>
      </div>
      {/* tablet and desktop */}
      <div className="inventory-card__info--tablet-desktop">
        <div className="inventory-card__name-container">
          <Link to={`/InventoryDetails/${id}`}>
            <h3 className="inventory-card__city">{item}</h3>
            <img src={ChevronIcon}></img>
          </Link>
        </div>
        <h4 className="inventory-card__copy inventory-card__address">
          {category}
        </h4>
        <h4 className="inventory-card__copy inventory-card__name">{status}</h4>
        <div className="inventory-card__contact-info">
          <h4 className="inventory-card__quantity">{quantity}</h4>
          <h4 className="inventory-card__warehouse">
            {warehouseData[0]?.impact_condition}
          </h4>
        </div>
        <div className="warehousecard__icons--tablet-desktop">
          <Link to={`/DeleteInventory`}>
            <img src={DeleteIcon}></img>
          </Link>
          <Link to={`/EditInventory/${id}`}>
            <img src={EditIcon}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InventoryCard;
