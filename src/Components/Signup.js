import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form } from "react-router-dom";

function Signup() {
  //   const [data, setData] = useState({
  //     userName: "",
  //     userDate: "",
  //     userID: "",
  //   });
  // }
  const submitHandler = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const userDate = e.target.userDate.value;
    const userID = e.target.userID.value;
    const data = { userName, userDate, userID };

    axios
      .post("http://localhost:3333/students/post", data)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log("something went wrong", e.message);
      });
  };
  // function handle(e) {
  //   const newData = { ...data };
  //   newData[e.target.id] = e.target.value;
  //   setData(newData);
  //   console.log(newData);
  // }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          // onChange={handle}
          id="userName"
          // value={data.userName}
          placeholder="userName"
          type="text"
          userName="userName"
        ></input>
        <input
          // onChange={handle}
          id="userDate"
          // value={data.userDate}
          placeholder="userDate"
          type="date"
          userDate="userDate"
        ></input>
        <input
          // onChange={handle}
          id="userID"
          // value={data.userID}
          placeholder="userID"
          type="number"
          userID="userID"
        ></input>
        <button>submit</button>
      </form>
    </>
  );
}
export default Signup;
