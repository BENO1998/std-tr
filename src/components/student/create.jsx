import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import {
  TextField,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  MenuItem,
  InputLabel,
  Select,
  Button,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";

export default function StudentUsers() {
  const navigate = useNavigate();
  //--------------------------------------------------------------//
  //POST Method
  //
  let formValue = {
    name: "",
    age: "",
    email: "",
    phonenumber: "",
    address: "",
    joindate: "",
    gender: "",
    course: "",
    error: {
      name: "",
      age: "",
      email: "",
      phonenumber: "",
      address: "",
      joindate: "",
      gender: "",
      course: "",
    },
  };
  //usestate for POST METHOD
  const [post, setPost] = useState(formValue);
  //FUNCTION for POST Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errKeys = Object.keys(post).filter((key) => {
      if (post[key] === "" && key !== "id" && key !== "error") {
        return key;
      }
    });
    if (errKeys.length >= 1) {
      alert("Please fill all Data");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(post.email)) {
      window.alert("Please Enter a Valid Email Address");
    } else {
      const response = await axios.post(
        "https://62ff2d03a85c52ee48420f24.mockapi.io/Data",
        {
          name: post.name,
          age: post.age,
          email: post.email,
          phonenumber: post.phonenumber,
          address: post.address,
          joindate: post.joindate,
          gender: post.gender,
          course: post.course,
        }
      );
      console.log(response.data);
      //setGet([...get, response.data]);
      setPost(formValue);
      navigate("/student");
    }
  };
  const handleChange = (e) => {
    let error = { ...post.error };
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} is Required`;
    } else {
      error[e.target.name] = "";
    }
    setPost({ ...post, [e.target.name]: e.target.value, error });
  };
  return (
    <>
      <div id="page-top">
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          <Sidebar />
          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}
              {/* <Navbar /> */}
              {/* <!-- End of Topbar -->*/}
              <div className="  bg-info ">
                <nav className="navbar navbar-dark bg-dark  text-center">
                  <div className="container">
                    <h5 className="navbar-text fw-bold justify-content-center align-content-center ">
                      STUDENT & TEACHER MANAGEMENT
                    </h5>
                  </div>
                </nav>
                <div className="d-flex m-5 pb-5">
                  <div
                    className="product col-md-6 col-lg-6 offset-md-3"
                    style={{
                      justifyContent: "center",
                      padding: "30px",
                      backgroundColor: "white",
                      paddingLeft: "62px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        fontSize: "30px",
                        color: "black",
                        fontWeight: "bolder",
                        textAlign: "center",
                      }}
                    >
                      Add Student
                    </Typography>
                    <Box
                      component="form"
                      sx={{ padding: "20px !important" }}
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      <TextField
                        fullWidth
                        sx={{ padding: "7px !important" }}
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                        name="name"
                        value={post.name}
                        onChange={(e) => handleChange(e)}
                      />
                      <br />
                      <span style={{ color: "red" }}>{post.error.name}</span>
                      <br />
                      <TextField
                        fullWidth
                        sx={{ padding: "7px !important" }}
                        id="standard-basic"
                        label="Age"
                        variant="standard"
                        type="number"
                        name="age"
                        value={post.age}
                        onChange={(e) => handleChange(e)}
                      />
                      <br />
                      <span style={{ color: "red" }}>{post.error.age}</span>
                      <br />
                      <TextField
                        fullWidth
                        sx={{ padding: "7px !important" }}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        name="email"
                        value={post.email}
                        onChange={(e) => handleChange(e)}
                      />
                      <br />
                      <span style={{ color: "red" }}>{post.error.email}</span>
                      <br />
                      <TextField
                        fullWidth
                        sx={{ padding: "7px !important" }}
                        id="standard-basic"
                        label="Phone Number"
                        variant="standard"
                        type="number"
                        name="phonenumber"
                        value={post.phonenumber}
                        onChange={(e) => handleChange(e)}
                      />
                      <br />
                      <span style={{ color: "red" }}>
                        {post.error.phonenumber}
                      </span>
                      <br />
                      <TextField
                        fullWidth
                        sx={{ padding: "7px !important" }}
                        id="standard-basic"
                        label="Address"
                        variant="standard"
                        name="address"
                        value={post.address}
                        onChange={(e) => handleChange(e)}
                      />
                      <br />
                      <span style={{ color: "red" }}>{post.error.address}</span>
                      <br />
                      <TextField
                        fullWidth
                        sx={{ padding: "7px !important" }}
                        id="standard-basic"
                        label="Joining data"
                        variant="standard"
                        type="number"
                        name="joindate"
                        value={post.joindate}
                        onChange={(e) => handleChange(e)}
                      />
                      <br />
                      <span style={{ color: "red" }}>
                        {post.error.joindate}
                      </span>
                      <br />
                      <FormControl sx={{ padding: "10px !important" }}>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Gender
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="gender"
                          value={post.gender}
                          onChange={(e) => handleChange(e)}
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                        </RadioGroup>
                      </FormControl>
                      <br />
                      <FormControl fullWidth sx={{ padding: "7px !important" }}>
                        <InputLabel id="demo-simple-select-label">
                          Courses
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="course"
                          name="course"
                          value={post.course}
                          onChange={(e) => handleChange(e)}
                        >
                          <MenuItem value="REACT">REACT</MenuItem>
                          <MenuItem value="DSA">DSA</MenuItem>
                          <MenuItem value="CSS">CSS</MenuItem>
                        </Select>
                      </FormControl>
                      <br />
                      <Button
                        className="p-1 mt-2  w-100"
                        variant="contained"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
