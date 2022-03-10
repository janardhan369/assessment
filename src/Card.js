import React, { useState, useEffect, Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { login } from "./reducers/login.actions";
import RegistrationPage from "./components/registration/RegistrationPage";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    marginLeft: "50px",
    "& > *": {
      width: theme.spacing(45),
      height: theme.spacing(100),
    },
  },
}));

function LoginForm({ login, isLoggedIn }) {
  const classes = useStyles();

  let [Username, setUsername] = useState("");
  let [Password, setPassword] = useState("");
  let [DataStore, setDataStore] = useState([]);

  const SubmitBtn = () => {
    const DataToStore = { Username, Password };
    if (Username && Password) {
      // setDataStore((preVal) => {
      //   return [...preVal, DataToStore];
      // });
      login(Username, Password);
      setUsername("");
      setPassword("");
    } else {
      alert("fill the values");
    }
  };

  return (
    <div className={classes.root}>
      <Paper elevation={15}>
        {isLoggedIn && <div> logged </div>}
        <div className="form_container">
          <h1> Login </h1>
          <TextField
            className="input"
            id="standard-password-input"
            label="Username"
            type="text"
            autoComplete="current-password"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className="input input_2"
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button onClick={SubmitBtn} variant="contained" color="secondary">
            Submit
          </Button>
          <Button variant="contained" color="primary">
            new user?
          </Button>
        </div>
        <div className="ListContainer">
          {DataStore.map((ArrData) => {
            const { Username, Password } = ArrData;
            return (
              <>
                <div className="ListStyle">
                  <p> {Username} </p>
                  <p> {Password} </p>
                </div>
              </>
            );
          })}
        </div>
      </Paper>
    </div>
  );
}

export const mapStateToProps = (state) => ({
  isLoggedIn: state.Login.isLoggedIn,
});

export default connect(mapStateToProps, { login })(LoginForm);
