import React, { useState } from "react";
import { changesColorNotes, updateNotes } from "../../services/service";
import ColorPopper from "./ColorPopper";
import "./ViewNotes.scss";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { IconButton, Paper, Button } from "@material-ui/core";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { InputBase } from "@mui/material";

export default function ViewNotes({ data, handleArchive }) {
  // console.log("response data inside viewnote", data);
  const [color, setColor] = useState("");
  const [note, setNote] = useState({
    title: "",
    description: "",
    id: "",
  });

  const [open, setOpen] = useState(false);

  const handleOpen = (title, description, id) => {
    setOpen(true);
    setNote({
      ...note,
      title: title,
      description: description,
      id: id,
    });
  };
  const handleClose = () => setOpen(false);

  // handle note color
  const handleNoteColor = (color1, id) => {
    console.log("id", id);
    setColor(color1);
    // console.log(color);
    const obj = {
      noteIdList: [id],
      color: color,
    };
    changesColorNotes(obj)
      .then((response) => {
        console.log("change color", response);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  // change input
  const handleChange = (input) => (event) => {
    setNote({
      ...note,
      [input]: event.target.value,
    });
    console.log("update note", note);
  };

  // update note
  const submitUpdateNote = (id) => {
    // console.log(id);
    const obj = {
      noteId: id,
      title: note.title,
      description: note.description,
    };
    console.log("submit note", obj);
    updateNotes(obj)
      .then((response) => {
        console.log(response);
        setOpen(false);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 140,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 1,
  };

  return (
    <div className="parentDiv">
      {/* view note */}
      {data.map((note, index) => {
        if (note?.isArchived === false) {
          return (
            <Paper
              key={index}
              className="noteDiv"
              elevation={5}
              style={{ backgroundColor: `${note.color}` }}
            >
              <div
                onClick={() =>
                  handleOpen(note.title, note.description, note.id)
                }
              >
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
                  <ColorPopper
                    handleNoteColor={handleNoteColor}
                    noteId={note.id}
                  />
                </IconButton>
                <IconButton sx={{ p: "10px" }}>
                  <ImageOutlinedIcon />
                </IconButton>
                <IconButton sx={{ p: "10px" }}>
                  <ArchiveOutlinedIcon onClick={() => handleArchive(note)} />
                </IconButton>
                <IconButton sx={{ p: "10px" }}>
                  <MoreVertOutlinedIcon />
                </IconButton>
              </div>
            </Paper>
          );
        }
      })}

      {/* note popup modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <InputBase
              className="inputText"
              id="modal-modal-title"
              variant="h6"
              component="h2"
              name="title"
              value={note.title}
              onChange={handleChange("title")}
              placeholder={note.title}
              fullWidth
            >
              {note.title}
            </InputBase>
          </div>
          <div>
            <InputBase
              className="inputText"
              id="modal-modal-description"
              sx={{ mt: 2 }}
              name="description"
              value={note.description}
              onChange={handleChange("description")}
              // placeholder={note.description}
              multiline
              fullWidth
            >
              {note.description}
            </InputBase>
          </div>
          <div className="iconDiv">
            <IconButton>
              <AddAlertOutlinedIcon />
            </IconButton>
            <IconButton>
              <BrushOutlinedIcon />
            </IconButton>
            <IconButton>
              <ColorPopper />
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
            <Button
              className="closebtn"
              onClick={() => submitUpdateNote(note.id)}
            >
              close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
