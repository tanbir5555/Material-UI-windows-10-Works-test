import React from 'react';
import clsx from 'clsx';
// import FirebaseTest from './firebaseTest'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  // Grid,
  Radio,
  // RadioGroup,
  Button,
  Checkbox
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './sign.css';
//styles

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color='default'
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

//styles

function Sign() {
  return (
    <div
      style={{
        maxWidth: '1366px',
        margin: 'auto 0',
        display: 'flex',
        justifyContent: 'center'
      }}
      className=''>
      <FormControl className='TheForm'>
        <div
          style={{ fontSize: '1.8rem', fontWeight: 400, textAlign: 'center' }}
          className=''>
          {' '}
          Sign Up{' '}
        </div>
        <TextField
          style={{ marginTop: 0 }}
          className='inputOFsignUp'
          id='name'
          label='Name'
          type='text'
          variant='outlined'
          //   value={}
          //   onChange={}
        />
        <TextField
          className='inputOFsignUp'
          type='text'
          id='userName'
          label='Username'
          variant='outlined'
          //   value={}
          //   onChange={}
        />
        <TextField
          className='inputOFsignUp'
          id='email'
          label='example@gmail.com'
          type='email'
          variant='outlined'
          //   value={}
          //   onChange={}
        />

        <TextField
          className='inputOFsignUp'
          id='password'
          label='pass******'
          type='password'
          variant='outlined'
          //   value={}
          //   onChange={}
        />
        {/* gender */}

        <div className='inputOFsignUp'>
          <FormLabel component='legend'>Gender</FormLabel>

          <FormControlLabel
            name='gender'
            value='female'
            control={<StyledRadio />}
            label='Female'
          />
          <FormControlLabel
            name='gender'
            value='male'
            control={<StyledRadio />}
            label='Male'
          />
          <FormControlLabel
            name='gender'
            value='other'
            control={<StyledRadio />}
            label='Other'
          />
          <FormControlLabel
            value='disabled'
            disabled
            control={<StyledRadio />}
            label='(Disabled option)'
          />
        </div>

        <FormControlLabel
          className='inputOFsignUp'
          control={
            <Checkbox
              color='primary'
              //   checked={state.checkedA}
              //   onChange={handleChange}
              name='checkedA'
            />
          }
          label='Accept all the terms and Conditions'
        />

        <Button
          className='inputOFsignUp'
          type='submit'
          size='large'
          variant='contained'
          color='primary'>
          Submit
        </Button>
      </FormControl>
      {/* <FirebaseTest/> */}
    </div>
  );
}

export default Sign;
