import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import img from "../../images/mpbile1.jpg"
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';
export default function AreaCard() {
  return (
    <Stack rowGap={4}>
 {
     [1,2,3,4,5,6].map((item)=>{
        return(
          <Link
          to="/detail"
          style={{
            textDecoration: "none",
          }}
        >
            <Card key={item} sx={{width:"100%"}} >
            <CardActionArea>
       <Stack direction={"row"} >
       <Box width={"30%"}>
          <CardMedia
                component="img"
                height="200"
                image={img}
                alt="picture"
              />
          </Box>
            <Box width={"70%"}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Rs 9,800
                </Typography>
                <Typography variant="body2" color="text.secondary">
                AE-1500WH-8BVDF|Casio standard watches Model|Limited Discounted sale
                </Typography>
              <Box marginTop={4}>
              <Typography>
                Social Security Workers Welfare Multi Story Flats, Lahore
                </Typography>
                <Stack direction="row" spacing={4} mt={2}>
            <Button variant="outlined" startIcon={<CallIcon />}>
              call
            </Button>
            <Button variant="contained" startIcon={<ChatIcon />}>
         chat
            </Button>
          </Stack>
              </Box>
              </CardContent>
            </Box>
       </Stack>
            </CardActionArea>
          </Card>
          </Link>
        )
     })
    }
    </Stack>
  );
}