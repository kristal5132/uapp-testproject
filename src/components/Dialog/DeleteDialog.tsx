import React from 'react';
import {
  Dialog, DialogTitle, DialogActions, Button,
} from '@material-ui/core';

interface Dialog {
  open: boolean;
  handleDialogClose: () => void;
  handleDialogSuccess: () => void;
}
const DeleteDialog: React.FC <Dialog> = (
  { open, handleDialogClose, handleDialogSuccess },
) => (
  <>
    <Dialog open={open} onClose={handleDialogClose}>
      <DialogTitle>
        Вы уверены, что хотите удалить колонку?
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          Нет
        </Button>
        <Button onClick={handleDialogSuccess} color="primary">
          Да
        </Button>
      </DialogActions>
    </Dialog>
  </>
);

export default DeleteDialog;
