import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "../style/contact_form.css";
import { Box } from "@mui/material";

export default function ContactForm() {
  const [sent, setSent] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState({
    full_name: "",
    age: "",
    email: "",
    type: "",
    telegram_number: "",
  });
  function validate() {
    console.log("dsds");
    let err = {},
      t = true;
    if (!user.full_name) {
      t = false;
      err = { ...err, full_name: true };
    }
    if (!user.age) {
      t = false;
      err = { ...err, age: true };
    }
    if (!user.email) {
      t = false;
      err = { ...err, email: true };
    }
    if (!user.type) {
      t = false;
      err = { ...err, type: true };
    }
    if (!user.telegram_number) {
      t = false;
      err = { ...err, telegram_number: true };
    }
    if (t) {
      send_email();
    }
    setError(err);
  }

  const handleChange = (event) => {
    setUser({ ...user, type: event.target.value });
  };

  async function send_email() {
    console.log("axios");
    const url =
      "https://sheets.googleapis.com/v4/spreadsheets/1bbRMZ1HceRAbXxml0Lb15vHeozO97gZMSNx-4sfBVLA/values/append";
    const data = {
      ...user,
    };

    await axios
      .post(url, data, {
        headers: {
          Authorization: "Bearer AIzaSyDx-Yt1yNodqU9kjhhrG-Q7flAO5fUrsQc",
          "Content-Type":'text/plain'
        },
      })
      .then((res) => {
        console.log(res);
        setSent(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="contact">
      <div className="line">
        <img
          src="./image/logo.png"
          className="py-1"
          style={{ width: "200px" }}
          alt=""
        />
        <div className="">
          <div className="d-flex mx-2">
            <a
              href="https://t.me/AbbosGaybullayev"
              style={{ fontSize: "25px", padding: "0 8px" }}
            >
              <BsTelegram />
            </a>
            <a
              href="https://instagram.com/study_bridge_consulting?igshid=ZGUzMzM3NWJiOQ=="
              style={{ color: "red", fontSize: "25px" }}
            >
              {console.log(user)}
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          style={{
            backgroundColor: "rgba(255,255,255, .9)",
            width: "90%",
            margin: "100px auto 10px auto",
            borderRadius: "15px",
            padding: "15px 0",
          }}
        >
          {sent ? (
            <div className="w-75 mx-auto">
              <h1 className="text-center">Registration</h1>
              <Box>
                <div className="mt-3">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Full name"
                    variant="outlined"
                    error={error?.full_name}
                    value={user.full_name}
                    onChange={(e) =>
                      setUser({ ...user, full_name: e.target.value })
                    }
                  />
                </div>
                <div className="mt-3">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    error={error?.age}
                    value={user.age}
                    onChange={(e) => setUser({ ...user, age: e.target.value })}
                  />
                </div>
                <div className="mt-3">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    error={error?.email}
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div className="mt-3">
                  <FormControl fullWidth className="w-100">
                    <InputLabel id="demo-simple-select-label">
                      Choose
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={user.type}
                      error={error?.type}
                      label="Choose"
                      onChange={handleChange}
                    >
                      <MenuItem value={"bacherlor"}>Bachelor</MenuItem>
                      <MenuItem value={"master"}>Master's</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="mt-3">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Telegram number"
                    variant="outlined"
                    error={error?.telegram_number}
                    onChange={(e) =>
                      setUser({ ...user, telegram_number: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mt-3">
                  <Button
                    variant="contained"
                    onClick={() => validate()}
                    size="large"
                    color="success"
                  >
                    Send
                  </Button>
                </div>
              </Box>
            </div>
          ) : (
            <div className="w-75 mx-auto">
              <h3 className="text-center">Thank you for registration! </h3>
              <p>
                Europe is waiting for you. <br />
                Good luck in whatever you endeavor!
              </p>
              <p className="smile">😉</p>
            </div>
          )}
        </div>
      </div>
      <div className="footer-line">
        <a href="https://baltic.study/en/">
          In cooperation with Baltic Center consulting{" "}
          <img src="./image/baltic.png" alt="baltic" />
        </a>
      </div>
    </div>
  );
}
