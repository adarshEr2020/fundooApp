import React from "react";
import "./ViewNotes.scss";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { IconButton, Paper } from "@material-ui/core";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
export default function ViewNotes({ data }) {
  console.log(data);
  
  
  return (
    // <div>
    <div className="parentDiv">
      {data.map((note, index) => {
        return (
          <Paper key={index} className="noteDiv" elevation={5}>
            <div>
              <p className="textTitle">{note.title}</p>
              <p className="textDesc">{note.description}</p>
            </div>
            <div className="iconbtn">
              <IconButton>
                <AddAlertOutlinedIcon />
              </IconButton>
              <IconButton>
                <BrushOutlinedIcon />
              </IconButton>
              <IconButton sx={{ p: "10px" }}>
                <ColorLensOutlinedIcon />
              </IconButton>
              <IconButton sx={{ p: "10px" }}>
                <ImageOutlinedIcon />
              </IconButton>
              <IconButton sx={{ p: "10px" }}>
                <ArchiveOutlinedIcon />
              </IconButton>
              <IconButton sx={{ p: "10px" }}>
                <MoreVertOutlinedIcon />
              </IconButton>
            </div>
          </Paper>
        );
      })}
    </div>
    // </div>
  );
}
