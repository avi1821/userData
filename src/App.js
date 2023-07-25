import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxcaDCoWdRPr6sBD2TbsV8XyCuQwkeDdS7PRJqFfuiwnfs0lsBsJcWdyLM3iGTLGC2x/exec";

const App = () => {
  /**
   * State variables
   */
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  /**
   * Functions
   */
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setMobileNumber(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || mobileNumber === "") {
      window.alert("please fill the details");
    } else {
      const date = new Date();

      const dateOnly =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      const DataCallUrl = `${SHEET_URL}?name=${name}&mobile_number=${mobileNumber}&t_create=${dateOnly}`;

      fetch(DataCallUrl, {
        method: "POST",
      })
        // .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setName("");
          setMobileNumber("");
          window.alert("Succesfully Sumbimted");
        })
        .catch((error) => {
          window.alert("Sorry for Error");
          console.log(error);
        });
    }
  };

  return (
    <div className="signUpContainer">
      <div className="signUpMainContainer">
        <div className="signUpHeader">
          <h1>Contact</h1>
        </div>

        <form className="signUpForm">
          <div className="signUpFormItem">
            <label className="signUpFormLabel">Name</label>
            <input
              onChange={handleName}
              className="signUpFormInput"
              value={name}
              type="text"
            />
          </div>

          <div className="signUpFormItem">
            <label className="signUpFormLabel">Mobile</label>
            <input
              onChange={handlePhone}
              className="signUpFormInput"
              value={mobileNumber}
              type="tel"
            />
          </div>

          <div className="signUpFormItem">
            <button
              onClick={handleSubmit}
              className="signUpSubmit"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
