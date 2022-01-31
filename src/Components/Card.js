import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

function Card1 (props) {
    let {img,title}=props
  return <>
    <Grid>
      <Card sx={{ maxWidth: 345 }} boxShadow={'5px 5px 0px 0px grey'}>
       <CardActionArea>
         <CardMedia
           component="img"
           height="240"
           image={img}
           alt="green iguana"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             {title}
           </Typography>
         </CardContent>
       </CardActionArea>
      </Card>
    </Grid>
  </>;
};

export default Card1;
