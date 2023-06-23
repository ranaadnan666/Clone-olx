import {  Stack,Box, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import React from 'react'
import Avatar from '@mui/material/Avatar';
import EditIcon from "@mui/icons-material/Edit";
import WarningIcon from '@mui/icons-material/Warning';
import TextField from '@mui/material/TextField';
import ListSubheader from '@mui/material/ListSubheader';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Profile = () => {




  return (
 <Stack sx={{width:"75%"}} mx={"auto"} p={4}>
    <h2>Edit profile</h2>
    <Divider/>
    <h4>Profile Photo</h4>
    <Stack direction={"row"} columnGap={8} mt={4} alignItems={"center"} p={1}>
    <Avatar sx={{width:"100px",height:"100px"}} alt="Remy Sharp" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    <Stack  justifyContent="flex-end">
                  <Box
          
                    color="primary"
                    disabled={false}
                    sx={{
                      background: "black",
                      color: "black",
                 justifyContent:"center",
                      width: "70px",
                      height:"40px",
                      display:"flex",
                      alignItems:"center",
                      borderRadius:"10px",
                      "&:hover": {
                       cursor: "pointer"
                      },
                
                    }}
                    aria-label="edit"
                    component="label"
                  >
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                    //   onChange={handleProfileImage}
                    />
                    <EditIcon sx={{color:"white"}
                    } />
                  </Box>
<Stack direction={"row"} alignItems={"center"} mt={2}><WarningIcon/><span style={{fontSize:"13px"}}>JPG, JPEG, PNG Min: 400px, Max: 1024px</span></Stack>
                </Stack>
    </Stack>
    <Divider/>
<Stack width={"30%"}  mt={3} rowGap={2} p={1}>
 <Stack >
 <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
   
    </Box>

</Stack>

  <p>Date Of Birth</p>
<Stack width={"100%"} justifyContent={"space-between"} direction={"row"} columnGap={1}>
<FormControl sx={{ width:"150px" }}>
        <InputLabel htmlFor="grouped-select">DD</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{  width:"150px" }}>
        <InputLabel htmlFor="grouped-select">MM</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ width:"150px" }}>
        <InputLabel htmlFor="grouped-select">YYYY</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
</Stack>
  <p>Gender</p>
<Stack width={"100%"}>
<FormControl >
        <InputLabel htmlFor="grouped-select">select</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
</Stack>
<p>Message</p>
<Stack>
<textarea style={{height:"200px",width:"100%",padding:"10px",resize:"none"}} placeholder='write message'/>
</Stack>

</Stack>
<Divider/>
<Stack width={"30%"}  mt={3} rowGap={2} p={1}>
  <p>Contact information</p>

  <Stack >
 <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="phone Number" variant="outlined" />
   
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
      <TextField id="outlined-basic" label="Email" variant="outlined" />
   
    </Box>

</Stack>
</Stack>
<Stack width={"100%"} direction={"row"} justifyContent={"space-between"} p={1} mt={2}>
<Button variant='outlined'>Discard</Button>
<Button variant='contained'>Save changes</Button>
</Stack>
 </Stack>
  )
}

export default Profile