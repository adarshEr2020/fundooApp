import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import "./ColorPopper.scss";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { IconButton } from "@mui/material";

export default function ColorPopper(props) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  // distructring props to handleNoteColor
  const { handleNoteColor ,noteId} = props;

  const colors = [
    "#FFFFFF",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    // "#ff9800",
    "#ff5722",
  ];

  return (
    <div>
      <IconButton aria-describedby={id} type="button" onClick={handleClick}>
        <ColorLensOutlinedIcon />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                bgcolor: "background.paper",
                height: "120px",
                width: "130px",
                display: "flex",
                flexWrap: "wrap",
              }}
              className="box-color-main"
            >
              {colors.map((color) => (
                <div key={color}>
                  <Box
                    className="box-color"
                    sx={{ width: "30px", height: "30px" }}
                    style={{ backgroundColor: `${color}` }}
                    onClick={() => handleNoteColor(color,noteId)}
                  />
                </div>
              ))}
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
