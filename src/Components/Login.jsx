import React, { useEffect, useState } from "react";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
// Css
import "../assets/Css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <>
      <Card style={{width:'100%'}}>
        <CardContent className="login-content">
          <Typography className="login-text">Login</Typography>
          <Typography className="label-text">Email address</Typography>
          <TextField
            className="login-textfield"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <Typography className="label-text">Password</Typography>
          <TextField
            className="login-textfield"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <Link to="/reset" className="forgot-password">
            Forgot Password?
          </Link>
          <div className="center-button">
            <Button
              onClick={() => logInWithEmailAndPassword(email, password)}
              variant="contained"
              className="login-button"
            >
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Login;
