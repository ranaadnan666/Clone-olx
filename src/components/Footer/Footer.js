import { Grid, Box, Stack, Divider, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

import moment from 'moment/moment';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 200) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return (
        <>

            {/* newsletter */}

            <Box sx={{ backgroundColor: '#EBEEEF', color: 'black' }} mt={5}  >
                <Grid container spacing={4} width={'98%'} mx={'auto'} mb={5} padding={"10px 0px"} >
                    {/* logo */}
                    <Grid item lg={2.4} xs={12}>
                        <Box >
                            <Link to='/' style={{
                                textDecoration: 'none',
                                color: 'white',

                            }}>

<Typography sx={{
            fontSize:'24px',
            color:'#1e1e27',
            fontWeight:700,
            textTransform:"uppercase"
        }}>
    <span style={{
                color: "#fe4c50"
             }}> Store</span>
        </Typography>
                            </Link>
                        </Box>
                    
                        <Typography  display={{ xs: 'none', md: 'block' }} mt={2}>
                            <a href="mailto:info@magzel.com" style={{color:'BLACK   ',textDecoration:'none'}}>  <MailOutlineIcon sx={{marginBottom:'-6px'}} />  info@olx.com</a>
                        </Typography>
                      
                    </Grid>

                    <Grid item lg={2.4} display={{xs:'none',md:'block'}}>
                        <h3>POPULAR CATEGORIES</h3>
                        <Stack direction={"column"} spacing={0.2} >

                            <p>cars</p>
                            <p>flats</p>
                            <p>Mobiles</p>
                            <p>Jobs</p>
                        
        

                        </Stack>
                    </Grid>
                    <Grid item lg={2.4} display={{ xs: 'none', md: 'block' }}>
                        <h3>TRENDING SEARCHES</h3>
                        <Stack direction={"column"} spacing={0.2} >
                            <p>Bikes</p>
                            <p> Watches</p>
                           
                            <p>  Books</p>
                            <p>Dogs</p>
                            

                        </Stack>
                    </Grid>
                    <Grid item lg={2.4} display={{ xs: 'none', md: 'block' }}>
                        <h3>About Us</h3>
                        <Stack direction={"column"} spacing={0.2} > 
                         
                            <p> About Dubizzle Group</p>
                            <p> OLX Blog</p>
                         
                            <p> Contact Us </p>
                            <p >OLX for Businesses</p>

                        </Stack>
                    </Grid>
                    <Grid item lg={2.4} display={{ xs: 'none', md: 'block' }}>
                        <h3>olx</h3>
                        <Stack direction={"column"} spacing={0.2} >
                            <p>Help </p>
                            <p>Sitemap</p>
                            <p>Terms of use</p>
                            <p>Privacy Policy</p>
                           
                         

                        </Stack>
                    </Grid>
                    <Grid item xs={12} width={"80%"} mx={'auto'}>
                        <Stack direction={"row"} spacing={5} alignItems={"center"} display={{xs:'flex',md:'none'}}  >
                           
                                <FacebookIcon />
                                <InstagramIcon />
                                <YouTubeIcon />
                                <LinkedInIcon />
                                <TwitterIcon />
                        </Stack>
                    </Grid>

                </Grid>


                {/* developed by: */}

                <Box width={'70%'} mx={'auto'} padding={"10px 0px"} >
                    <Divider sx={{ bgcolor: 'white' }} />
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <p>© {moment().format('YYYY')} Free Classifieds in Pakistan . © 2006-2023 OLX</p>
                        <Stack direction={"row"} spacing={5} alignItems={"center"} display={{ xs: 'none', md: 'flex' }}>
                            <Box>
                            <FacebookIcon />
                            </Box>
                            <Box>
                           <InstagramIcon/>
                            </Box>
                            <Box>
                             <YouTubeIcon />
                            </Box>
                            <Box>
                            <LinkedInIcon />
                            </Box>
                            <Box>
                         <TwitterIcon />
                            </Box>
                        </Stack>
                     </Stack>
                   
                </Box>
            </Box>
            <Box position="fixed" bottom={10} right={10} sx={{ display: showButton ? 'block' : 'none' }}>
                <IconButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="back to top">
                    <ArrowCircleUpIcon sx={{ color: '#fcd043 ',fontSize:'50px'}} />
                 
                </IconButton>
            </Box>
        </>
    )
}

export default Footer