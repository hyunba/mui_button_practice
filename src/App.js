import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";

function App() {
  
  // required 반드시 입력
  return (
    <div>
      <TextField label="Email Address" required name="email" autoFocus/>
      <TextField label="Password" type="password" required name="password"/>
      <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember me"/>
      <Button type="submit" fullWidth variant="contained" sx={{mt: 3}}>Sign in</Button>
    </div>
  );
}

export default App;