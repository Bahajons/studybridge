import React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BsTelegram } from "react-icons/bs";
export default function ContactForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  async function send_email() {
    const url =
      "https://sheets.googleapis.com/v4/spreadsheets/1bbRMZ1HceRAbXxml0Lb15vHeozO97gZMSNx-4sfBVLA/values/append";
    const data = {
      values: [
        {
          name: "John Doe",
          email: "johndoe@gmail.com",
        },
      ],
    };

    await axios.post(url, data, {
      headers: {
        Authorization: "Bearer AIzaSyDx-Yt1yNodqU9kjhhrG-Q7flAO5fUrsQc",
      },
    });
  }

  return (
    <div
      style={{
        backgroundImage: "url(./image/bg_img.jpg)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      <div
        className="line text-right d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "rgba(255,255,255, 0.7)" }}
      >
        <img src="./image/logo.png" className="py-1" style={{ width: "250px" }} alt="" />
        <div className="">
          <div className="d-flex mx-2">
            <a href="">
              <BsTelegram />
            </a>
            <a href="">
              <BsTelegram />
            </a>
            <a href="">
              <BsTelegram />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          style={{
            backgroundColor: "rgba(255,255,255, .9)",
            width: "70%",
            margin: "40px auto 10px auto",
            borderRadius: "15px",
            padding: "15px 0",
          }}
        >
          <div className="w-75 mx-auto">
            <h1 className="text-center">Registration</h1>
            <div className="mt-3">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Full name"
                variant="outlined"
              />
            </div>
            <div className="mt-3">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Age"
                variant="outlined"
              />
            </div>
            <div className="mt-3">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
            <div className="mt-3">
              <FormControl fullWidth className="w-100">
                <InputLabel id="demo-simple-select-label">Choose</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Choose"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Bachelor</MenuItem>
                  <MenuItem value={20}>Master's</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="mt-3">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Telegram number"
                variant="outlined"
              />
            </div>
            <div className="mt-3">
              <Button variant="contained" size="large" color="success">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={() => send_email()}>Yuborish</button> */}
    </div>
  );
}
