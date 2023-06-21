import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function ListData() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
<Stack rowGap={3} mt ={4}>
<Button sx={{width:"100%",backgroundColor:"black"}} variant='contained'>Show phone number</Button>
   <Button sx={{width:"100%"}} startIcon={<ForumIcon />} variant='outlined'>Chat</Button>
   <Stack sx={{marginTop:"50px",boxShadow:" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",padding:"0.5rem",borderRadius:"10px"}}>
<h2>Location</h2>
<Stack direction={"row"} mt={1}>
 <LocationOnIcon/> <p>Dharampura, Lahore</p>
</Stack>
   </Stack>
</Stack>

      <Divider variant="inset" component="li" />
   
    </List>
  );
}