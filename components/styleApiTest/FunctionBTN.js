
import React from 'react'
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function FunctionBTN({open,handleClose,handleClick,und,mymessage}) {
    return (
        <div>
        <Button onClick={handleClick}>Open simple snackbar</Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={mymessage}
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                {und}
              </Button>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
      )
}

export default FunctionBTN
