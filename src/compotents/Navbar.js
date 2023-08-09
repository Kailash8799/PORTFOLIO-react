import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = [
  "Home",
  "About",
  "Eduction",
  "Skills",
  "Project",
  "Resume",
  "Contact",
];
const ids = [
  "home",
  "about",
  "eduction",
  "skills",
  "project",
  "resume",
  "contact",
];
const settings = [
  "Home",
  "About",
  "Eduction",
  "Skills",
  "Project",
  "Resume",
  "Contact",
];

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <AppBar
        className="mt-0"
        position="sticky"
        style={{ background: "#0d0e13" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              href="#home"
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              className="navcolor"
            >
              KAILASH
            </Typography>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#home"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              KAILASH
            </Typography>
            <Box
              position={"absolute"}
              right={10}
              sx={{ flexGrow: 1 }}
              className="md:flex hidden"
            >
              {pages.map((page, ind) => (
                <a
                  key={page}
                  href={`#${ids[ind]}`}
                  className="text-decoration-none navcolor textsin text-white"
                >
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    className="navcolor textsin"
                  >
                    {page}
                  </Button>
                </a>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }} className="md:hidden">
              <Tooltip title="Open Navbar">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
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
                {settings.map((setting, ind) => (
                  <a
                    key={setting}
                    href={`#${ids[ind]}`}
                    className="text-decoration-none navcolor textsin"
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </a>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};
export default ResponsiveAppBar;
