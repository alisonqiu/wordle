import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Alert
          severity="error"
          color="error"
          role="button"
          onClose={handleClose}
          closeText="There's no letter to delete!"
        >
          <AlertTitle>There's no letter to delete!</AlertTitle>
          Try entering some letters first.
        </Alert>
      </Dialog>
    </div>
  );
}
