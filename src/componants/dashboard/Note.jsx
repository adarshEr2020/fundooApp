import React, { Component } from "react";
import { takenote } from "../../services/service";
import { Container, Paper, InputBase, IconButton, Button } from "@mui/material";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./Note.scss";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      open: true,
      isArchived: false,
      color: "#fff",
    };
  }

  handleChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  haldleIsArchive = () => {
    this.setState({
      isArchived: !this.state.isArchived,
      
    });
    alert("isArchived clicked : " + this.state.isArchived);
  };
  
  submitNote = () => {
    const { title, description, isArchived, color } = this.state;
    const obj = { title, description, isArchived, color };

    console.log(obj);

    // take request
    takenote(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  expendIt = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };
  render() {
    return (
      <Container className="main-div" maxWidth="sm">
        <Paper className="note" elevation={5}>
          {!this.state.open ? (
            <div>
              <InputBase
                className="inputText"
                fullWidth
                placeholder="Title"
                name="title"
                onChange={this.handleChange("title")}
              />
            </div>
          ) : null}
          {this.state.open ? (
            <div className="main-desc-box">
              <InputBase
                className="inputText"
                multiline
                placeholder="Take a note"
                name="description"
                onChange={this.handleChange("description")}
                onClick={() => this.expendIt()}
                fullWidth
              />
              <IconButton sx={{ p: "10px" }}>
                <ArchiveOutlinedIcon/>
              </IconButton>
              <IconButton>
                <BrushOutlinedIcon />
              </IconButton>
              <IconButton sx={{ p: "10px" }}>
                <ImageOutlinedIcon />
              </IconButton>
            </div>
          ) : null}
          {!this.state.open ? (
            <div>
              <InputBase
                className="inputText"
                multiline
                placeholder="Take a note"
                name="description"
                onChange={this.handleChange("description")}
                fullWidth
              />
            </div>
          ) : null}

          {!this.state.open ? (
            <div>
              <IconButton>
                <AddAlertOutlinedIcon />
              </IconButton>
              <IconButton>
                <BrushOutlinedIcon />
              </IconButton>
              <IconButton>
                <ColorLensOutlinedIcon />
              </IconButton>
              <IconButton sx={{ p: "10px" }}>
                <ImageOutlinedIcon />
              </IconButton>
              <IconButton sx={{ p: "10px" }} onClick={this.haldleIsArchive}>
                <ArchiveOutlinedIcon />
              </IconButton>
              <IconButton sx={{ p: "10px" }}>
                <MoreVertOutlinedIcon />
              </IconButton>
              <Button className="closebtn" onClick={this.submitNote}>
                close
              </Button>
            </div>
          ) : null}
        </Paper>
      </Container>
    );
  }
}
