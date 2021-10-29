import React, { Component } from "react";
import { takenote } from "../../services/service";
import { Container, Paper, InputBase, IconButton } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import "./Note.scss";


export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      takeNote: "",
    };
  }

  handleChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  submitNote = () => {
    // console.log(this.state);
    const { title, takeNote } = this.state;
    const obj = { title, takeNote };
    console.log(obj);
    takenote(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  render() {
    return (
      <Container className="main-div" maxWidth="sm">
        <Paper className="note" elevation={5}>
          <Box>
            <InputBase
              className="inputText"
              fullWidth
              placeholder="Title"
              name="Title"
              onChange={this.handleChange("title")}
            />
            <InputBase
              className="inputText"
              multiline
              placeholder="Take a note"
              name="takeNote"
              onChange={this.handleChange("takeNote")}
              fullWidth
            />
          </Box>
          <Box>
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
            
            <IconButton size="large" onClick={this.submitNote}>
              <AddIcon />
            </IconButton>
          </Box>
          </Paper>
      </Container>
    );
  }
}
