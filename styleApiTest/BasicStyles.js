import React, { useState } from 'react';

import { makeStyles, styled } from '@material-ui/core/styles';
// import {Button} from '@material-ui/core'

// import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FunctionBTN from './FunctionBTN'

const myFirstMaterialUIStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
  mybtn: {
    background: '#5c43eb',
    border: 0,
    borderRadius: '5px',
    fontSize: '1rem',
    padding: '1em 2.5em',
    color: '#fff'
  }
});

//creating a button with

const MyButton = styled(Button)({
  color: 'blue',
  border: '1px solid blue'
});

const myWorld = makeStyles({
  root: {
    color: '#e21d85',
    border: '1px solid #e21d85'
  }
});

const manyColor = makeStyles({
  root: {
    color: 'red',
    '& p': {
      margin: 0,
      color: 'green',
      '& span': {
        color: 'blue'
      }
    }
  }
});

let newAlert = styled(Alert)({});
let myAlertStyles = makeStyles({
  root: {
    marginTop: '1.5rem'
  }
});



//21e6c1
function BasicStyles() {
  let [al, setAl] = useState('');
  const [open, setOpen] =useState(false);

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

  const myClass = myFirstMaterialUIStyles();
  let newWorld = myWorld();
  let classs = myAlertStyles();
  let MyAlertBox1 = (
    <Alert
      style={{ marginTop: '5rem' }}
      className={classs.root}
      severity='error'>
      <AlertTitle>error</AlertTitle>
      this is an <strong>error board</strong>
    </Alert>
  );
  let MyAlertBox2 = (
    <Alert
      style={{ marginTop: '5rem' }}
      className={classs.root}
      severity='warning'>
      <AlertTitle>warning</AlertTitle>
      this is an <strong>warning board</strong>
    </Alert>
  );
  let MyAlertBox3 = (
    <Alert
      style={{ marginTop: '5rem' }}
      className={classs.root}
      severity='success'>
      <AlertTitle onClick={()=>{}}>success</AlertTitle>
      this is an <strong>success board</strong>
    </Alert>
  );


    let [Massage,setMassage]=useState(["undo","Redo","Sudo","GO go"])
    let [MyMassage,setMyMassage]=useState(["Item Deleted","Item is Back","Item Added","Item is send"])



  function TestWorks({und}){
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
        message="Item Has Deleted"
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
  return (
    <div style={{ maxWidth: '1366px', width: '86%', margin: 'auto' }}>
      <Button
        onMouseMove={() => setAl(MyAlertBox3)}
        className={(myClass.mybtn, myClass.root)}>
        MyAlertBox3
      </Button>
      <MyButton onMouseMove={() => setAl(MyAlertBox2)} variant='outlined'>
        MyAlertBox2
      </MyButton>
      <Button
        onMouseMove={() => setAl(MyAlertBox1)}
        variant='outlined'
        className={newWorld.root}>
        MyAlertBox1
      </Button>
      {al}


    <TestWorks und="Undo"/>
    Hello
    {/* <TestWorks und="Redo"/> */}
    <TestWorks und=""/>
    {Massage.map((val,index)=>{
      return(
    <FunctionBTN mymessage={MyMassage[index]} open={open} handleClose={handleClose} und={val} handleClick={handleClick} />

      )
    })}
    {/* <FunctionBTN open={open} handleClose={handleClose} und={Massage[0]} handleClick={handleClick} /> */}
    

    </div>
  );
}

export default BasicStyles;
