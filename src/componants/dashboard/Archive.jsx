import React, { useEffect, useState } from "react";
import "./Archive.scss";
import "./ViewNotes.scss";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { IconButton, Paper } from "@material-ui/core";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { getArchiveNoteList } from "../../services/service";
import Header from "./Header";
import Asidebar from "./Asidebar";

export default function Archive() {
  const [archiveArr, setArchiveArr] = useState([]);

  // request for archive note
  useEffect(() => {
    getArchiveNoteList()
      .then((response) => {
        console.log("getArchiveNoteList", response);
        setArchiveArr(response.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  console.log("archiveArr", archiveArr);
  return (
    <div>
      <Header/>
      <Asidebar/>
      <h2 className="text text1">Archive note- </h2>
      <div className="parentDiv">
        {archiveArr.map((note, index) => {
          return (
            <Paper
              className="noteDiv"
              elevation={5}
              key={index}
              style={{ backgroundColor: `${note.color}` }}
            >
              <div>
                <div className="textTitle">{note.title}</div>
                <div className="textDesc">{note.description}</div>
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
    </div>
  );
}
