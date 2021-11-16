import React, { useState } from "react";
import "./ViewNotes.scss";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { IconButton, Paper } from "@material-ui/core";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { getArchiveNote } from "../../services/service";
export default function Archive() {
  const [archiveArr, setArchiveArr] = useState([]);

  getArchiveNote()
    .then((response) => {
      setArchiveArr({
        archiveArr: response.data,
      });
    })
    .catch((err) => {
      console.warn(err);
    });

  return (
    <div className="parentDiv">
      {archiveArr.map((note, index) => {
        if (note?.isArchived === false) {
          return (
            <Paper className="noteDiv" elevation={5}>
              <div key={index}>
                <p className="textTitle">{note.title}</p>
                <p className="textDesc">{note.description}</p>
              </div>
              <h5>achive note</h5>
              <h6>achive note paper</h6>
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
        }
      })}
    </div>
  );
}
