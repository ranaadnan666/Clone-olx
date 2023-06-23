import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';    
import { Stack } from '@mui/material';

const CheckboxList=(props)=> {
  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <>
    <Stack sx={{padding:"0 2rem"}}><h2 >{props?.title}</h2></Stack>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props?.data?.map((value,i) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={i}
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </>
  );
}

export default CheckboxList