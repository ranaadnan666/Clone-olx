import React from 'react'
import {  Stack,Box, Button, TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
const Settings = () => {
  return (
    <Stack sx={{width:"75%",border:"1px solid gray",borderRadius:"10px"}} mx={"auto"} p={4}>
        <Stack width={"100%"}  mt={3} rowGap={2} p={1} sx={{border:"1px solid gray"}}>
        <p>My ads settings</p>
<Divider/> 
<Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
<h4>Show my phone number in ads </h4>
<FormControlLabel required control={<Switch />} label="Required" />
</Stack>
        </Stack>
<Stack width={"100%"}  mt={3} rowGap={2} p={1} sx={{border:"1px solid gray"}}>
  <p>Create password</p>
<Divider/>

  <Stack >
 <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="New password" variant="outlined" />
   
    </Box>

</Stack>
<Stack >
 <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Confirm password" variant="outlined" />
   
    </Box>

</Stack>
<Button sx={{width:"200px"}} variant='contained'>Change Password</Button>
</Stack>
    </Stack>
  )
}

export default Settings