import { Link } from "react-router-dom";
import { useState } from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Container,
} from "@mui/material";
import "../assets/Css/header.css";
import finalMenu from "../assets/img/final_menu.svg";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="fixed" className="app-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  color: "#7638fb",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "20px",
                }}
              >
                Saif
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <img
                src={finalMenu}
                alt="newMenu"
                onClick={handleOpenNavMenu}
                style={{ width: "50px", height: "50px" }}
              />

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                  "& .MuiPaper-root": {
                    background: "#1f293b !important",
                    border: "1px solid white",
                    color: "white",
                  },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/link"
                    className="project"
                    style={{ color: "white" }}
                  >
                    Projects
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/about"
                    className="project"
                    style={{ color: "white" }}
                  >
                    About
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  color: "#fe9a02",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "20px",
                }}
              >
                Saif
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to="/link" className="project2">
                  Projects
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to="/about" className="project2">
                  About
                </Link>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" className="avatar">
                    <PermIdentityOutlinedIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: "50px",
                  "& .MuiPaper-root": {
                    background: "#1f293b !important",
                    border: "1px solid white",
                    color: "white",
                  },
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
