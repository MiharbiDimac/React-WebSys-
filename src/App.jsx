import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import '/public/crescent.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src="/public/crescent.png" alt="" height="400px" />
      <h1>Log In To Your Account</h1>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 10, m:3, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 5, height:50, width: '70ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Button variant="contained">Log In</Button>
    </Box>
    </>
  )
}

export default App
