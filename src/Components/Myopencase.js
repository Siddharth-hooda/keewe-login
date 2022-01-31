import React from 'react';
import Card1 from './Card';
import Drone from '../Images/Myopencase/Drone.png'
import Hand from '../Images/Myopencase/Hand.png'
import Workshop from '../Images/Myopencase/Workshop.png'
import { Grid } from '@mui/material';

const Myopencase = () => {
  return <>
    <Grid container padding={'5%'} alignItems={'center'} marginLeft={'4%'}>
    <Grid xs={4}>
        <Card1 img={Drone} title="Quadcopter"/>
        </Grid>
        <Grid xs={4}>
        <Card1 img={Hand} title="Robo Hand" />
        </Grid>
        <Grid xs={4}>
        <Card1 img={Workshop} title="3D Printing" />
        </Grid>
    </Grid>
    <Grid container>
        <Grid>
            <Grid>

            </Grid>
            <Grid>
                
            </Grid>
        </Grid>
        <Grid>

        </Grid>
    </Grid>
  </>;
};

export default Myopencase;
