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
          color="error"
          role="button"
          onClose={handleClose}
        >
          <AlertTitle>You can't enter more than 5 letters!</AlertTitle>
          Please enter or delete the letters.
        </Alert>
      </Dialog>
    </div>
  );
}
