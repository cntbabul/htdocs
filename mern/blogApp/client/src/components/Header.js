import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { authActions } from "../redux/Store";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  //global state
<<<<<<< HEAD
  const isLogin = useSelector((state) => state.isLogin);
  // isLogin = isLogin || localStorage.getItem("token");
=======
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("token");
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logged out Successfuly");
      navigate("/login");
      localStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">Blog App</Typography>

          {isLogin && (
            <Box display={"flex"} marginLeft={"auto"} marginRight={"auto"}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab LinkComponent={Link} to={"/blogs"} label="All Blogs" />

                <Tab LinkComponent={Link} to={"/my-blogs"} label="My Blogs" />
                <Tab
                  LinkComponent={Link}
                  to={"/create-blog"}
                  label="Create Blog"
                />
              </Tabs>
            </Box>
          )}
          <Box display={"flex"} marginLeft={"auto"}>
            {isLogin && (
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            )}

            {!isLogin && (
              <>
                <Button color="inherit" LinkComponent={Link} to={"/login"}>
                  Login
                </Button>
                <Button color="inherit" LinkComponent={Link} to={"/register"}>
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
