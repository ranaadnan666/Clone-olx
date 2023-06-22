import { Stack } from "@mui/material";
import React from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {  Dress } from "./ListData";
import CheckboxList from "./CheckBoxList";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function valuetext(value) {
  return `${value}°C`;
}
const Sidebar = () => {
  const [value, setValue] = React.useState([20, 37]);

  const [age, setAge] = React.useState('');

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack >
      {/* ============== category ================= */}


      {/* ============== Location ================= */}
      <Stack sx={{ padding: "1rem" }}>
        <h3>Location</h3>
      </Stack>
      <Box sx={{width:"100%"}} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pakistan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Pakistan"
          onChange={handleChange1}
        >
     <MenuItem value={10}>Isb</MenuItem>
          <MenuItem value={20}>Lahore</MenuItem>
          <MenuItem value={30}>Multan</MenuItem>
        </Select>
      </FormControl>
    </Box>
           {/* ============== Year ================= */}

           <Stack sx={{ padding: "1rem" , }}>
        <h3>Year </h3>
     
      </Stack>
      <Box sx={{ display: 'flex', flexWrap: 'wrap',justifyContent:"space-between" }} width={"90%"} gap={"10px"}>
      {[1, 2, 3, 4].map((month) => (
        <Box key={month} sx={{ width:"40%"}}>
          <input style={{ padding: '8px', margin: '5px', width:"100px",outline:"none",border:"1px solid gray",borderRadius:"5px" }} type="number" value="1920" />
        </Box>
      ))}
    </Box>
      {/* ============== Price Range ================= */}

      <Stack sx={{ padding: "1rem" }}>
        <h3>Price Range </h3>
      </Stack>

    
      <Stack sx={{ padding: "" }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <p>0.00 EUR</p>
          <p>250.00 EUR</p>
        </Stack>

        <Box sx={{ width:{md:200,lg:280,xl:300} }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        <Stack direction={"row"} justifyContent={"flex-end"} p={2}>
          
        </Stack>
      </Stack>
      {/* ============== Fuel ================= */}
      <CheckboxList title={"Fuel"} data={Dress} />

   {/* ============== REGISTRATION CITY================= */}
   <CheckboxList title={"REGISTRATION CITY"} data={Dress} />


 {/* ============== FEATURES================= */}
 <CheckboxList title={"FEATURES"} data={Dress} />
   

     
    </Stack>
  );
};

export default Sidebar;
