import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import bg from '../Images/Createstudio/landingpage/bg.png';
import Grid1 from '../Images/Createstudio/landingpage/Grid1.png';

const Fstcntnr = () => {
  return <>
      <Grid container >
          <Grid style={{padding:'3%'}} xs={6}>
            <Typography variant='h1' style={{fontWeight:'700'}}>
                Welcome to 
            </Typography>
            <Typography variant='h1' style={{fontWeight:'700'}}>
                Create Studio
            </Typography>
            <Typography width={'30%'} padding={'2%'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Typography>
            <Button variant='contained' padding={'2%'}>
                Skip Tour
            </Button>
          </Grid>
          <Grid xs={6} padding={'3%'}>
                <div>
                <img src={bg} alt="gh" />
                </div>
                <div>
                <img src={Grid1} alt='hu' style={{ }}/>
                </div>
          </Grid>
      </Grid>
  </>;
};

export default Fstcntnr;
