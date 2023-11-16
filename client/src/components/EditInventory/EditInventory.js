import React, { useEffect, useState } from "react";
import "./EditInventory.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";

const EditInventory = () => {
  const { inventoryid } = useParams();

  const [warehouseData, setWarehouseData] = useState([]);

  const [defaultData, setDefaultData] = useState([
    {
      item_name: "",
      description: "",
      category: "",
      status: "",
      quantity: "",
      impact_condition: "",
    },
  ]);

  //   pull incident information
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

  //   state to store form values
  const [inventoryData, setInventoryData] = useState({
    incident_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    impact_condition: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInventoryData({ ...inventoryData, [name]: value });
  };

  const apiURL = process.env.REACT_APP_DATA;

  //   get clicked item details for placeholders
  useEffect(() => {
    if (inventoryid) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `${apiURL}/inventories/${inventoryid}`
          );
          setDefaultData(data);
        } catch (error) {
          console.log("Error:", error);
        }
      };
      fetchData();
    }
  }, []);

  //   function to find incident id
  const handleWarehouseChange = (e) => {
    setLookUpWarehouse(e.target.value);
  };

  const [lookUpWarehouse, setLookUpWarehouse] = useState("The Jersey");

  const findWarehouse = warehouseData.find(
    (incident) => incident.impact_condition === lookUpWarehouse
  );

  //   handle stock change
  const [stock, setStock] = useState("");

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  //   handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(`${apiURL}/inventories/${inventoryid}`, {
        incident_id: findWarehouse.id,
        item_name: inventoryData.item_name,
        description: inventoryData.description,
        category: inventoryData.category,
        status: stock,
        quantity: inventoryData.quantity,
      })
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  };

  //   quantity show and hide
  const handleQuantity = () => {
    setQuantityClass("edit-inventory__quantity--hide");
  };

  const showQuantity = () => {
    setQuantityClass("edit-inventory__quantity");
  };

  const [quantityClass, setQuantityClass] = useState(
    "edit-inventory__quantity--hide"
  );

  return (
    <div className="edit-inventory">
      <div className="edit-inventory__header">
        <Link to={"/inventorylist"}>
          <img src={BackArrow}></img>
        </Link>
        <h1 className="edit-inventory__title">Edit Inventory Item</h1>
      </div>
      <div className="edit-inventory__border"></div>
      <form className="edit-inventory__form" onSubmit={handleSubmit}>
        <div className="edit-inventory__question-container">
          <div className="edit-inventory__details">
            <h2 className="edit-inventory__sub-title">Item Details</h2>
            <label>
              Item Name
              <input
                type="text"
                value={inventoryData.item_name}
                name="item_name"
                onChange={handleInputChange}
                placeholder={defaultData[0].item_name}></input>
            </label>
            <label className="edit-inventory__label">
              Description
              <textarea
                value={inventoryData.description}
                onChange={handleInputChange}
                name="description"
                placeholder={defaultData[0].description}></textarea>
            </label>
            <label className="edit-inventory__label">
              Category
              <select
                id="category"
                name="category"
                value={inventoryData.category}
                onChange={handleInputChange}
                defaultValue={defaultData[0].category}>
                <option value="accessories">Accessories</option>
                <option value="apparel">Apparel</option>
                <option value="electronics">Electronics</option>
                <option value="gear">Gear</option>
                <option value="health">Health</option>
              </select>
            </label>
          </div>
          <div className="edit-inventory__border"></div>
          <div className="edit-inventory__availability">
            <h2 className="edit-inventory__sub-title">Item Availability</h2>
            <h3>Status</h3>
            <div className="edit-inventory__stock">
              <div className="edit-inventory__instock">
                <input
                  type="radio"
                  id="instock"
                  name="stock"
                  value=" In Stock"
                  className="edit-inventory__radio"
                  onClick={showQuantity}
                  onChange={handleStockChange}
                  //   checked={defaultData[0].status === "In Stock"}
                ></input>
                <label>In Stock</label>
              </div>
              <div className="edit-inventory__outstock">
                <input
                  type="radio"
                  id="outstock"
                  name="stock"
                  value="Out of Stock"
                  className="edit-inventory__radio"
                  onClick={handleQuantity}
                  onChange={handleStockChange}
                  //   checked={defaultData[0].status === "Out of Stock"}
                ></input>
                <label>Out Of Stock</label>
              </div>
            </div>
            <label className={quantityClass}>
              Quantity
              <input
                type="number"
                value={inventoryData.quantity}
                onChange={handleInputChange}
                name="quantity"
                placeholder={defaultData[0].quantity}></input>
            </label>
            <label>
              Warehouse
              <select
                id="impact_condition"
                onChange={handleWarehouseChange}
                name="impact_condition"
                value={lookUpWarehouse}
                defaultValue="incident">
                {warehouseData.map((incident) => (
                  <option value={incident.impact_condition} key={incident.id}>
                    {incident.impact_condition}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="edit-inventory__footer">
          <button className="edit-inventory__cancel">Cancel</button>
          <button type="submit" className="edit-inventory__save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInventory;
