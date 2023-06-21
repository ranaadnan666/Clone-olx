import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import BasicMenu from './Menu';

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navItems = [

    {
        id: 1,
        title: "Mobile",
        url: "/filtered",
    },
    {
        id: 2,
        title: "Cars",
        url: "/filtered",
    },
    {
        id: 3,
        title: "Motercycle",
        url: "/filtered",
    },
    {
        id: 4,
        title: "Houses",
        url: "/filtered",
    },
    {
        id: 5,
        title: "Video-Audio",
        url: "/filtered",
    },
    {
        id: 6,
        title: "Tablets",
        url: "/filtered",
    },
    {
        id: 7,
        title: "Land & Plots",
        url: "/filtered",
    },
    
]

  return (
<Box sx={{backgroundColor:"white"}}>

    <Box sx={{ maxWidth: { xs: "100%", md:"70%" },display:"flex",alignItems:"center" }} mt={12} mx={"auto"} >
       <BasicMenu/>

      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiTab-root": {
                "&:hover": {
               color: "blue",
                },
              },
          }}
      >
       {
        navItems.map((item,i)=>{
            return(
                <NavLink style={{width:"150px",color:"black",textDecoration: 'none'}} key={i} to={item.url}> <Tab    label={item.title} /></NavLink>
            )
        })
       }
           
  
       
      </Tabs>
 
    </Box>
</Box>
  );
}