import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
      <Alert
          severity="error"
          color="info"
          role="button"
          onClose={handleClose}
        >
          <AlertTitle>The current word is not valid!</AlertTitle>
          Please only enter words that exist.
        </Alert>
      </Dialog>
    </div>
  );
}
