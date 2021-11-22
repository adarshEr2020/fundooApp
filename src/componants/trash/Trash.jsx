import React, { useEffect, useState } from "react";
import { getAllTrashNotes } from "../../services/service";
import "./Trash.scss";
import Header from "../dashboard/Header";
import Asidebar from "../dashboard/Asidebar";
import { Paper } from "@mui/material";
import { IconButton } from "@material-ui/core";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function Trash() {
  const [trashArr, setTrashArr] = useState([]);

  //   request for get all trash note

  const allTrashNotes = () => {
    getAllTrashNotes()
      .then((response) => {
        console.log("trashNots", response.data);
        setTrashArr([...trashArr,response.data.data]);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  useEffect(() => {
    allTrashNotes();
  }, []);

  return (
    <div>
      <Header />
      <Asidebar />
      <h2 className="text text1">Bin- </h2>
      <div className="parentDiv">
        {trashArr.map((note, index) => {
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
                <IconButton sx={{ p: "10px" }}>
                  <DeleteOutlinedIcon />
                </IconButton>
                <IconButton sx={{ p: "10px" }}>
                  <DeleteOutlinedIcon />
                </IconButton>
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}
