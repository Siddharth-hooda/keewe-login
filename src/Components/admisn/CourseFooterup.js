import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './coursefooter.css'
import Ellipse_42 from '../Images/CourseLanding/Ellipse_42.png'
import Ellipse_43 from '../Images/CourseLanding/Ellipse_43.png'
import Ellipse_44 from '../Images/CourseLanding/Ellipse_44.png'
import Fill_7 from '../Images/CourseLanding/Fill_7.png'
import keewe_logo from '../Images/CourseLanding/keewe_logo.png'
import mrslogo from '../Images/CourseLanding/mrslogo.png'

const CourseFooter = () => {
  return <>
    <Grid className='singlecurv'>
    <Container>
    <Container>
    <Container style={{paddingLeft:'90.5%'}}>
    <img src={Ellipse_42} alt=""></img>
    </Container>
    <Container style={{marginTop:'-8%', paddingLeft:'90%'}}>
    <img src={Ellipse_43} alt=""></img>
    </Container>
    <Container style={{margin:'-15% 0% 0% -58%'}}>
         <img src={Ellipse_44} alt=''></img>
    </Container>
    </Container>
    <Container style={{marginTop:'-15.75%'}}>
    <img src={Fill_7} alt=''></img>
        <Typography variant='h5'>
            Get Started With Us
        </Typography>
        <Container>
            <img src={mrslogo} alt=''></img>
            <img src={keewe_logo} alt=''></img>
        </Container>
    </Container>
    </Container>
    </Grid>
  </>;
};

export default CourseFooter;
