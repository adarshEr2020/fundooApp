import React, { Component } from "react";
import "./header.scss";
import { IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshSharpIcon from "@mui/icons-material/RefreshSharp";
import ViewStreamSharpIcon from "@mui/icons-material/ViewStreamSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="left-head">
            <div className="hmbrger-icon">
              <MenuIcon />
            </div>
            <div>
            <IconButton>
              <img
                src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png"
                height="45px"
                alt="keep-note-img"
              />
            </IconButton>
            </div>

            <span>Fundoo</span>
          </div>
          <div className="search-bar">
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
              <TextField type="search" color="default" placeholder="Search" />
            </IconButton>
          </div>
          <div className="right-head">
            <div className="refresh">
              <IconButton>
                <RefreshSharpIcon />
              </IconButton>
            </div>
            <div className="list-view">
              <IconButton>
                <ViewStreamSharpIcon />
              </IconButton>
            </div>
            <div className="setting">
              <IconButton>
                <SettingsOutlinedIcon />
              </IconButton>
            </div>
            <div className="apps">
              <IconButton>
                <AppsOutlinedIcon />
              </IconButton>
            </div>
            <div className="profile">
              <IconButton>
                <AccountCircleRoundedIcon />
              </IconButton>
            </div>
          </div>
        </header>
        <div>
          <div className="aside-sec"></div>
        </div>
      </div>
    );
  }
}
