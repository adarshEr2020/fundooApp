import React, { Component } from "react";
import { Box,List, ListItem,IconButton} from "@material-ui/core";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
export default class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
    };
  }



  render() {
    return (
      <div >
        <Box maxWidth="md">
          <List>
            <ListItem>
              <IconButton/>
              <LightbulbOutlinedIcon/>
              Notes
            </ListItem>
            <ListItem>
              <IconButton />
              <NotificationsNoneOutlinedIcon />
              Remainders
            </ListItem>
            <ListItem>
              <IconButton />
              <LabelOutlinedIcon />
              Inspiration
            </ListItem>

            <ListItem>
              <IconButton />
              <LabelOutlinedIcon />
              Personal
            </ListItem>

            <ListItem>
              <IconButton />
              <LabelOutlinedIcon />
              Work
            </ListItem>

            <ListItem>
              <IconButton />
              <CreateOutlinedIcon />
              Edit lables
            </ListItem>

            <ListItem>
              <IconButton />
              <ArchiveOutlinedIcon />
              Archive
            </ListItem>

            <ListItem>
              <IconButton />
              <DeleteOutlinedIcon />
              Bin
            </ListItem>
          </List>
        </Box>
      </div>
    );
  }
}
