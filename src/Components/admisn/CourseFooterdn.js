import { Grid, Typography } from '@mui/material';
import React from 'react';
import keewe_logo from '../Images/CourseLanding/keewe_logo.png'
import mrslogo from '../Images/CourseLanding/mrslogo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const CourseFooterdn = () => {
  return <>
      <Grid container spacing={2} style={{textAlign:'center', paddingTop:'5%'}}>
          <Grid xs={3}>
          <Grid>
          <img src={keewe_logo} alt=''></img>
          </Grid>
            <Grid>
            <img src={mrslogo} alt=''></img>
            </Grid>
          </Grid>
          <Grid xs={3}>
            <Typography>
                <Typography variant='h6'>
                    JOIN MORE SIMILAR COURSES
                </Typography>
                    <Typography>
                    Citrus pruning <br /> management
                    </Typography>
                    <Typography>
                    Citrus plant structure <br /> and functions management
                    </Typography>
            </Typography>
          </Grid>
          <Grid xs={3}>
          <Typography>
                <Typography variant='h6'>
                    COMPANY
                </Typography>
                    <Typography>
                    About Us
                    </Typography>
                    <Typography>
                    Contact Us
                    </Typography>
                    <Typography>
                        Help
                    </Typography>
                    <Typography>
                        Support
                    </Typography>
                    <Typography>
                        Share Your Story
                    </Typography>

            </Typography>
          </Grid>
          <Grid xs={3}>
            <Typography variant='h6'>
                FOLLOW US
            </Typography>
            <Grid>
                <YouTubeIcon />
            </Grid>
            <Grid>
                <FacebookIcon />
            </Grid>
            <Grid>
                <InstagramIcon />
            </Grid>
          </Grid>
      </Grid>
  </>;
};

export default CourseFooterdn;
