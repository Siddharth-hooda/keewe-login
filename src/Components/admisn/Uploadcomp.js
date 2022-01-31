import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
    display: 'none',
  });


const Uploadcomp = () => {
  return <div>
      <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCameraIcon />
        </IconButton>
      </label>
    </Stack>
  </div>;
};

export default Uploadcomp;
