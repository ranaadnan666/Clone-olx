import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function DialogUser(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant={props.title ==="Login" ? "outlined": "contained"} onClick={handleClickOpen}>
      {props.title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{marginTop:"20px"}}>

       <Typography width={"20%"} mx={"auto"} sx={{
            fontSize:'30px',
            color:'#1e1e27',
            fontWeight:800,
            textTransform:"uppercase",
    
        }}>
      <span style={{
                color: "black"
             }}> OLX</span>
        </Typography>
   <Typography mt={2}  width={"60%"} mx={"auto"} sx={{
            fontSize:'18px',
           textAlign:"center",
            fontWeight:600,}}>
   WELCOME TO OLX
The trusted community of buyers and sellers.
   </Typography>
     
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Stack  spacing={2} width={"60%"} mx={"auto"} mt={2}>
      <Button variant="outlined" startIcon={<GoogleIcon />}>
      Continue with Google
      </Button>
      <Button variant="outlined" startIcon={<FacebookIcon />}>
    Continue with Facebook
      </Button>
      <Button variant="outlined" startIcon={<EmailIcon />}>
      Continue with Email
      </Button>
      <Button variant="outlined" startIcon={<LocalPhoneIcon />}>
      Continue with Phone
      </Button>
 
    </Stack>

          </DialogContentText>
         
        </DialogContent>
        <Typography mt={4} sx={{textAlign:"center"}}  width={"60%"} mx={"auto"}>By continuing, you are accepting
OLX Terms of use and Privacy Policy</Typography>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}