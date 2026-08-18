import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { AlertContext } from "../../Context/AlertContext";

export default function ShowAlert({ message = "good", type }) {
  const [open, setOpen] = React.useState(true);
  const { setAlert } = React.useContext(AlertContext);

  return (
    <div className="w-90 top-0 left-1/2 -translate-x-1/2 absolute z-100">
      <Box>
        <Collapse in={open}>
          <Alert
            severity={
              type === "green" ? "success" : type === "red" ? "error" : ""
            }
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                  setAlert({ type: "", message: "" });
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>
    </div>
  );
}
