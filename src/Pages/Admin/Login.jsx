import React, { useEffect, useState } from "react";
import { TextField,Card, CardContent, Typography, Button } from "@mui/material";
// Css
import '../../assets/Css/login.css'
import { Link, useNavigate } from "react-router-dom";
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
        <CardContent className="login-content">
          <Typography className="login-text">Login</Typography>
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
