import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const InputSection = ({ inputValue, handleValue, saveData }) => {
  return (
    <div className="input">
      <TextField
        id="outlined-basic"
        name='name'
        value={inputValue}
        onChange={handleValue}
        label="Enter Your Task"
        variant="outlined"
      />
      <Button id="btn" variant="contained" onClick={saveData} style={{ background: "green" }}>
        <AddIcon style={{ color: "#fff" }} />
      </Button>
    </div>
  );
}

export default InputSection;
