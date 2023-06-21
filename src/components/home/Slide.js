import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid, Stack } from '@mui/material';

import img1 from "../../../src/images/slide.jpg"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        id:1,
        img: img1,
    },
    {
        id: 2,
        img: img1,
    },

];

function Slides() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{background:'white'}}>
      

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((item, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Grid container width={{md:'70%',xs:'80'}} mx="auto" spacing={2}>
                                <Grid item md="12" xs={12} order={{xs:-1,md:0}} mt={2}>
                                    <Stack direction="row" spacing={2} width={{xs:'100%',md:'100%'}} height= {{ xs: "100px", md: 300 } } mx={'auto'}>
                                        <Box>
                                            <img

                                                style={{
                                                    height: "100%",
                                                    display: 'block',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={item.img}
                                                alt=""
                                            />
                                        </Box>
                                        </Stack>
                                    
                                 
                                </Grid>
                                
                           </Grid>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{
                    background: 'white',
                    justifyContent: 'center',
                    marginTop:'50px',
                    "& .MuiMobileStepper-dot:not(.MuiMobileStepper-dotActive)": {
                        backgroundColor: '#f8bcb8' // set the inactive dot color
                    },
                    
                    "& .MuiMobileStepper-dot": {
                backgroundColor: '#db5156' // set the inactive dot color
                    }
                }}
            />
        </Box>
    );
}

export default Slides;
