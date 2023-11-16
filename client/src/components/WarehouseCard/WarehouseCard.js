import React from "react";
import "./WarehouseCard.scss";
import { Link } from "react-router-dom";
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronIcon from "../../assets/icons/chevron_right-24px.svg";

function WarehouseCard({
  number_of_affected_users,
  event_begin_date,
  name,
  phone,
  email,
  id,
}) {
  return (
    <div className="warehousecard">
      <div className="warehousecard__info">
        <div className="warehousecard__location">
          <h4 className="warehousecard__copy warehousecard__title">
            WAREHOUSE
          </h4>
          <div className="warehousecard__name-container">
            {/* Link to Warehouse Details Component */}
            <Link to={`/WarehouseDetails/${id}`}>
              <h3 className="warehousecard__city">
                {number_of_affected_users}
              </h3>
            </Link>
            <img src={ChevronIcon}></img>
          </div>
          {/* <h4 className="warehousecard__copy warehousecard__title">ADDRESS</h4> */}
          <h4 className="warehousecard__copy">{event_begin_date}</h4>
        </div>
        <div className="warehousecard__contact">
          <h4 className="warehousecard__copy warehousecard__title">
            CONTACT NAME
          </h4>
          <h4 className="warehousecard__copy">{name}</h4>
          <h4 className="warehousecard__copy warehousecard__title">
            CONTACT INFORMATION
          </h4>
          <div className="warehousecard__contact-info">
            <h4 className="warehousecard__copy">{phone}</h4>
            <h4 className="warehousecard__copy">{email}</h4>
          </div>
        </div>
      </div>
      <div className="warehousecard__icons">
        <DeleteWarehouse
          warehouseid={id}
          warehousename={number_of_affected_users}
          icon={<img src={DeleteIcon}></img>}
        />
        <Link to={`/EditWarehouse/${id}`}>
          <img src={EditIcon}></img>
        </Link>
      </div>
      {/* tablet and desktop */}
      <div className="warehousecard__info--tablet-desktop">
        <div className="warehousecard__name-container">
          <Link to={`/WarehouseDetails/${id}`}>
            <h3 className="warehousecard__city">{number_of_affected_users}</h3>
          </Link>
          <img src={ChevronIcon}></img>
        </div>
        <h4 className="warehousecard__copy warehousecard__address">
          {event_begin_date}
        </h4>
        <h4 className="warehousecard__copy warehousecard__name">{name}</h4>
        <div className="warehousecard__contact-info">
          <h4 className="warehousecard__copy">{phone}</h4>
          <h4 className="warehousecard__copy">{email}</h4>
        </div>
        <div className="warehousecard__icons--tablet-desktop">
          <DeleteWarehouse
            warehouseid={id}
            warehousename={number_of_affected_users}
            icon={<img src={DeleteIcon}></img>}
          />
          <Link to={`/EditWarehouse/${id}`}>
            <img src={EditIcon}></img>
          </Link>
        </div>
      </div>
    </div>
    //  </Link>
  );
}

export default WarehouseCard;
