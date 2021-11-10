import React, { Component } from "react";
import { takenote } from "../../services/service";
import { Container, Paper, InputBase, IconButton,Button } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

import "./Note.scss";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      open: true,
    };
  }

  
  handleChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  submitNote = (props) => {
    const { title, description } = this.state;
    const obj = { title, description };

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
          {!this.state.open? (
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
            <div>
              <InputBase
                className="inputText"
                multiline
                placeholder="Take a note"
                name="description"
                onChange={this.handleChange("description")}
                onClick={() => this.expendIt()}
                fullWidth
              />
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
