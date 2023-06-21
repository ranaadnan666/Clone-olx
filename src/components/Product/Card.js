import { Box, Card, CardContent,  Typography } from '@mui/material'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
function BasicCard(props) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
            <Card sx={{
                ":hover": {
                    boxShadow: 5,
                    cursor: 'pointer'
                }
            }}>
                
                <Box
                 sx={{
                    width: '200px',
                    height: '188px',
                    margin: 'auto'
                }}>
                    <img src={props.image} alt="category" style={{ width: '100%', height: 'atuo' }} />

                </Box>
                <CardContent>
               <Box sx={{display:"flex",justifyContent:"space-between",width:"100%"}}>
               <Typography sx={{ color: '#f85606', fontSize: '18px' }}>
                        Rs.{props.price}
                    </Typography>
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
               </Box>
                    <Typography sx={{
                        height: '36px',
                        lineHeight: '18px',
                        overflow: 'hidden',
                        fontSize: '14px'
                    }}>
                        {props.title}
                    </Typography>
                  
                    <Typography mt={2}>
                  {
                    props.city
                  }
                       </Typography>
                    <Typography>
                        {props.rating}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default BasicCard