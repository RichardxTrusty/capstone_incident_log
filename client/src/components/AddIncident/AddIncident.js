import React, { useState } from "react";
import "./AddIncident.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AddIncident() {
  // incident name
  const [incidentName, setIncidentName] = useState("");

  const handleIncidentName = (e) => {
    setIncidentName(e.target.value);
  };

  const [event_begin_date, setAddress] = useState("");

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const [number_of_affected_users, setCity] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };
  // management_group
  const [management_group, setCountry] = useState("");

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  // contact name
  const [contactName, setContactName] = useState("");

  const handleContactName = (e) => {
    setContactName(e.target.value);
  };
  // position
  const [position, setPosition] = useState("");

  const handlePosition = (e) => {
    setPosition(e.target.value);
  };
  // phone
  const [phone, setPhone] = useState("");

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  // email
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //   all inputs
  const inputs = [
    incidentName,
    event_begin_date,
    number_of_affected_users,
    management_group,
    contactName,
    position,
    phone,
    email,
  ];

  //   error
  const [inputClass, setinputClass] = useState("add-incident__noerror");

  const [emailError, setEmailError] = useState("add-incident__noerror");

  const [phoneError, setPhoneError] = useState("add-incident__noerror");

  // regex
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  // api url
  const apiURL = process.env.REACT_APP_DATA;
  let navigate = useNavigate();
  //   handle submit

  const handleSubmit = (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
      if (!input.value) {
        setinputClass("add-incident__error");
        return false;
      }
    });
    if (!emailRegex.test(email)) {
      setEmailError("add-incident__error");
      console.log("Email format incorrect");
    } else if (isNaN(phone.replaceAll(" ", ""))) {
      setPhoneError("add-incident__error");
      console.log("Phone number format incorrect");
    } else {
      console.log("form is good");
      setinputClass("add-incident__noerror");
      setEmailError("add-incident__noerror");
      setPhoneError("add-incident__noerror");
      axios
        .post(`${apiURL}/incidents`, {
          impact_condition: incidentName,
          event_begin_date: event_begin_date,
          number_of_affected_users: number_of_affected_users,
          management_group: management_group,
          reporter_name: contactName,
          reporter_position: position,
          reporter_phone: phone.replaceAll(" ", ""),
          reporter_email: email,
          incidents_log: JSON.stringify({}),
        })
        .then((result) => {
          console.log(result);
          // let navigate = useNavigate();
          navigate("/incidentlist");
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div className="add-incident">
      <div className="add-incident__header">
        <Link to={"/incidentlist"}>
          <img src={BackArrow}></img>
        </Link>
        <h1 className="add-incident__title">Report New Incident</h1>
      </div>
      <form className="add-incident__form" onSubmit={handleSubmit}>
        <div className="add-incident__details">
          <h2>Incident Description</h2>

          <label>
            Impact Condition
            <input
              value={incidentName}
              onChange={handleIncidentName}
              type="text"
              placeholder="Impact Condition"
              id="incidentname"
              className={inputClass}></input>
          </label>
          <label>
            Event Begin Date
            <input
              value={event_begin_date}
              onChange={handleAddress}
              type="date"
              placeholder="Event Begin Date"
              className={inputClass}></input>
          </label>
          <label>
            Number of Affected Users
            <input
              value={number_of_affected_users}
              onChange={handleCity}
              type="number"
              min={0}
              placeholder="0"
              className={inputClass}></input>
          </label>
          <label>
            Management Group
            <input
              value={management_group}
              onChange={handleCountry}
              type="text"
              placeholder="Management Group"
              className={inputClass}></input>
          </label>
        </div>
        <div className="add-incident__border"></div>
        <div className="add-incident__contact-details">
          <h2>Reporter Details</h2>

          <label>Reporter Name</label>
          <input
            value={contactName}
            onChange={handleContactName}
            type="text"
            placeholder="Reporter Name"
            className={inputClass}></input>
          <label>Reporter Position</label>
          <input
            value={position}
            onChange={handlePosition}
            type="text"
            placeholder="Position"
            className={inputClass}></input>
          <label>Reprter Phone Number</label>
          <input
            value={phone}
            onChange={handlePhone}
            type="text"
            placeholder="Reporter Phone number"
            className={phoneError}></input>
          <label>Reporter Email</label>
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Email"
            className={emailError}></input>
          <div className="add-incident__footer">
            <button type="submit" className="add-incident__add-btn">
              Add New Incident
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddIncident;
