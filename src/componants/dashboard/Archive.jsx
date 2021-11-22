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
import { addToArchiveNotes, getArchiveNoteList } from "../../services/service";
import Header from "./Header";
import Asidebar from "./Asidebar";

export default function Archive() {
  const [archiveArr, setArchiveArr] = useState([]);
  const [isArchived, setIsArchived] = useState(true);

  // request for archive note
  const allArchiveNote = () => {
    getArchiveNoteList()
      .then((response) => {
        setArchiveArr(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    allArchiveNote();
  }, []);

  const handleUnArchive = (note) => {
    setIsArchived(!isArchived);
    const obj = {
      noteIdList: [note.id],
      isArchived: false,
    };
    addToArchiveNotes(obj)
      .then((response) => {
        console.log("after unarchived", response);
        allArchiveNote();
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div>
      <Header />
      <Asidebar />
      <h2 className="head-text text1">Archive note- </h2>
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
                <IconButton title="Remind me">
                  <AddAlertOutlinedIcon />
                </IconButton>
                <IconButton title="Draw">
                  <BrushOutlinedIcon />
                </IconButton>
                <IconButton title="Change color" sx={{ p: "10px" }}>
                  <ColorLensOutlinedIcon />
                </IconButton>
                <IconButton title="Add image" sx={{ p: "10px" }}>
                  <ImageOutlinedIcon />
                </IconButton>
                <IconButton
                  title="Archive"
                  sx={{ p: "10px" }}
                  onClick={() => handleUnArchive(note)}
                >
                  <ArchiveOutlinedIcon />
                </IconButton>
                <IconButton title="More" sx={{ p: "10px" }}>
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
