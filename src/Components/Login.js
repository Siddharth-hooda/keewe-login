import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Grid, Stack, Typography } from "@mui/material";
import './Login.css'

const top100Films = [
  { label: "Student" },
  { label: "Teacher" },
  { label: "University" },
  { label: "Partnered Organization"},
  { label: "Colleges"},
];

const Login = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container>
        <Grid item md={1} sm={0}/>
        <Grid xs={12} md={5}>
          <Stack spacing={4} padding={"5%"} marginLeft={"10%"} sx={{alignItems:'center'}}>
            {/* <Grid paddingLeft={"25%"}> */}
              <Typography variant="h4" fontWeight={500}>
                Login
              </Typography>
            {/* </Grid> */}
            <FormControl variant="standard" sx={{ width: "60%" }}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Email Address
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "60%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: "60%" }}
              renderInput={(params) => (
                <TextField {...params} label="Choose Your Role" />
              )}
            />
            <Button variant="contained" style={{ width: "60%" }}>
              Login
            </Button>
          </Stack>
        </Grid>
        <Grid item md={1} sm={0}/>
        <Grid item xs={0} md={4} className="back" marginTop={'5%'}></Grid>
        <Grid item md={1} sm={0}/>
      </Grid>
    </>
  );
};

export default Login;
