import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, NavLink } from "react-router-dom";
import { Button,Menu,Stack, Typography } from "@mui/material";
import { useScrollTrigger } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from "@mui/icons-material/Settings";
import DialogUser from "../Dialog/Dialog";
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 300;

function Header(props) {

  const settings = [
    {
        id: 1,
  
        icon:<AccountCircleIcon/>,
        title: "Profile",
        url: "/profile",
    },
{
      id: 4,
      icon:<SettingsIcon/>,
      title: "Settings",
      url: "/setting",
    },
  
  
  ]

  const trigger = useScrollTrigger({
    threshold: 200, // Change this threshold as needed
  });

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };



  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
  <Box sx={{backgroundColor:"white",height:"100vh"}}>
  <Box
        
        // variant="h5"
        sx={{ py: 2,background:'white'}}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
         <Typography sx={{
            fontSize:'24px',
            color:'#1e1e27',
            fontWeight:700,
            textTransform:"uppercase"
        }}>
           Online<span style={{
                color: "#fe4c50"
             }}> Store</span>
        </Typography>
        </Link>
      </Box>
      <Divider />

<Stack rowGap={4} mt={3}>
    <Stack   direction={"column"} rowGap={4} alignItems={"center"} width={"100%"} sx={{padding:"0 1rem"}}>
   <Stack
            // sx={{ alignItems: "center" ,flexGrow: 2}}
          >
       
       <Box sx={{width:"270px"}} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pakistan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Pakistan"
          onChange={handleChange}
        >
          <MenuItem value={10}>Isb</MenuItem>
          <MenuItem value={20}>Lahore</MenuItem>
          <MenuItem value={30}>Multan</MenuItem>
        </Select>
      </FormControl>
    </Box>
           
          </Stack>
  <Stack width={"100%"} >
  <input className="search-nav" style={{padding:"18px",borderRadius:"5px"}} type="text" name="search" placeholder="Search.."/>
  </Stack>
   </Stack>
       <Stack direction={"row"} justifyContent={"space-between"} width={"90%"} mx={"auto"}>
         
<Button sx={{width:"45%"}}  variant="outlined">Login</Button>
<Button sx={{width:"45%"}}  variant="contained">Sell</Button>
       </Stack>
</Stack>
  </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
<>

<Box >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#F7F8F8", color: "black", padding: "20px 0px",    position: "fixed",
        top: "0",
        left:"0",
        zIndex: "9",
        transition: "all 0.3s",
        transform: trigger ? "translateY(-100%)" : "none", }}
      >
             <Stack sx={{width:{md:'85%',xs:'100%',lg:"70%"},mx: "auto"}} direction={"row"} p={1}>
<Box width={{xs:"100%",md:"70%",lg:"50%",xl:"30%"}} sx={{display:"flex",justifyContent:"space-between"}}>
<Box sx={{display:"flex",alignItems:"center",fontSize:"30PX",fontWeight:"600",color:"#3A77FF"}}>
    OlX
  </Box>
  <Box sx={{display:"flex",alignItems:"center",gap:"20px"}} >
<Box sx={{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"#ECEDED",display:"flex",justifyContent:"center",alignItems:"center"}}>
<DirectionsCarIcon/>
</Box>
    MOTORS
  </Box>
  <Box sx={{display:"flex",alignItems:"center",gap:"20px"}} >
<Box sx={{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"#ECEDED",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <BusinessIcon/>
  </Box>
  PROPERTY
  </Box>
</Box>
  </Stack>
        <Box
          sx={{
            width:{md:'85%',xs:'96%',lg:"70%"},
            mx: "auto",
            display: "flex",
          }}
          mt={2}
        >
            <Box sx={{display: { xs: "flex", md: "none"}}}>
            <Link to="/"
              style={{ textDecoration: "none", color: "black" }}
            >
           <Typography sx={{
            fontSize:'24px',
            color:'#1e1e27',
            fontWeight:700,
            textTransform:"uppercase"
        }}>
      Online<span style={{
                color: "#fe4c50"
             }}> Store</span>
        </Typography>
            </Link>
        
          </Box>
      <Box  sx={{display: { xs: "none", md: "flex" },justifyContent:"space-between" ,width:"100%",alignItems:"center"}}>
      <Box  >
            <Link to="/"
              style={{ textDecoration: "none", color: "black" }}
            >
           <Typography sx={{
            fontSize:'30px',
            color:'#1e1e27',
            fontWeight:800,
            textTransform:"uppercase",
    
        }}>
      <span style={{
                color: "black"
             }}> OLX</span>
        </Typography>
            </Link>
        
          </Box>
   <Stack   direction={"row"} columnGap={8} alignItems={"center"} width={"70%"} sx={{padding:"0 2rem"}}>
   <Stack
            // sx={{ alignItems: "center" ,flexGrow: 2}}
          >
       
       <Box sx={{width:"220px"}} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pakistan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Pakistan"
          onChange={handleChange}
        >
      <MenuItem value={10}>Isb</MenuItem>
          <MenuItem value={20}>Lahore</MenuItem>
          <MenuItem value={30}>Multan</MenuItem>
        </Select>
      </FormControl>
    </Box>
           
          </Stack>
  <Stack width={"80%"} >
  <input className="search-nav" style={{padding:"18px",borderRadius:"5px"}} type="text" name="search" placeholder="Search.."/>
  </Stack>
   </Stack>
       <Stack direction={"row"} columnGap={2}>
<Link style={{color:"black"}} to="/chat">   <ChatOutlinedIcon  sx={{fontSize:"38px",color:"#1565C0"}}/>  </Link>    
<DialogUser title={"Login"}/>
{/* <DialogUser title={"Sell"}/> */}



<Box sx={{ flexGrow: 0 }}>
      
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600" />
              </IconButton>
     
            <Menu
              // sx={{ mt: '45px' }}
              // id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{
                mt: "2.8rem",
                ".MuiMenu-paper": {
                  width: { xs: "60%", sm: "40%", md: "15%" },
                  borderRadius:"10px"

                },
              }}
              id="basic-menu"
         
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
      
      <Stack
                  direction="column"
                  mb={1}
                  p={1}
                  width="90%"
                  mx="auto"
                  boxShadow="0px 1px 10px silver"
                  borderRadius="10px"
                  
                  
                >
                  <Link
                    to={`/new/userprofile`}
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={handleCloseUserMenu}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      columnGap={2} 
                      
                      sx={{
                        padding: { xs: "0.5rem 0.5rem", md: "0.5rem 1rem"  },
                        width: { xs: "90%" },
                        borderRadius: "5px",
                        mx: "auto",
                        "&:hover": {
                          backgroundColor: "#F1F3F4",
                        },
                      }}
                    >
                      {/* {user?.data?.show_online ? (
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar alt="Remy Sharp" src={profilePic} />
                        </StyledBadge>
                      ) : ( */}
                        <Avatar alt="Remy Sharp" src=""/>
                      {/* )} */}
                      <p
                        style={{
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                      >
                       Rana &nbsp;Adnan
                      </p>
                    </Stack>
                    <Divider sx={{ margin: "10px 0px" }} />
                  </Link>
                </Stack>
              {settings.map((setting) => (
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                  <NavLink style={{textDecoration:"none",color:"black",width:"100%"}} to={setting.url}>
                  <Stack        direction="row"
                  alignItems="center"
                  columnGap={2}
           
                  sx={{
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    width: "90%",
                    borderRadius: "5px",
                    mx: "auto",
                    "&:hover": {
                      backgroundColor: "#F1F3F4",
                    },
                  }} textAlign="center">
                    {setting.icon}
                    {setting.title}
                    </Stack>
                 
                  </NavLink>
                </MenuItem>
              ))}
                {
          
                  <Stack        direction="row"
                  alignItems="center"
                  columnGap={2}
             
                  sx={{
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    width: "80%",
                    fontWeight:"550",
                    borderRadius: "5px",
                    mx: "auto",
                    "&:hover": {
                      backgroundColor: "#F1F3F4",
                    },
                  }} textAlign="center">
                    <span><LogoutIcon/></span>
                   LogOut
                    </Stack>
                }
            </Menu>
          </Box>




       </Stack>
      </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: "auto",
              display: { md: "none" },
              border: "1px solid #353538",
              borderRadius: "9px",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" mt={2}>
        <Toolbar />
      </Box>
    </Box>
</>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;