  import React from 'react';
  import '../App.css';
  import AssignmentIcon from '@mui/icons-material/Assignment';
  import Button from '@mui/material/Button';
  import { Link } from 'react-router-dom';

  const Header = () => {
    return (
      <div className="heading">
        <div className="wrapper">
          <AssignmentIcon style={{ color: 'green' }} />
          <h5>TaskMate</h5>
          <div className="buttons">
            <Link to="/Login">
              <Button variant="outlined" color="inherit" style={{ color: 'green' }} > Log In </Button>
            </Link>
            <Link to="/Signup">
              <Button variant="contained" color="inherit" style={{ backgroundColor: 'green', color: 'white' }}> Sign Up </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default Header;
