import React from "react";
// import NoteDashboard from './NoteDashboard'
import "./ViewNotes.scss";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { IconButton, Paper } from "@material-ui/core";
export default function ViewNotes({ data }) {
  console.log(data);
  return (
    <div className="parentDiv">
      {data.map((note,index) => {
        return (
          <div key={index} className="noteDiv">
            <div> 
              <p className="textTitle">{note.title}</p>
              <p className="textDesc">{note.description}</p>
            </div>
            <div className="iconbtn">
            
              <IconButton>
                <CheckBoxOutlinedIcon />
              </IconButton>
              <IconButton>
                <BrushOutlinedIcon />
              </IconButton>
              <IconButton sx={{ p: "10px" }}>
                <ImageOutlinedIcon />
              </IconButton>
              <IconButton sx={{ p: "10px" }}>
                <ArchiveOutlinedIcon />
              </IconButton>
            </div>
          </div>
        );
      })}      
    </div>
  );
}
