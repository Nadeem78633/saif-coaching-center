import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import { auth, logInWithEmailAndPassword } from "../../firebase.js";
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
      <Card>
        <CardContent>
          <Typography>Login</Typography>
          <Typography>Email address</Typography>
          <TextField
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <Typography>Password</Typography>
          <TextField
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <Link to="/reset">Forgot Password?</Link>

          <Button
            onClick={() => logInWithEmailAndPassword(email, password)}
            variant="contained"
          >
            LOGIN
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Login;
