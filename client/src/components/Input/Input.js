import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import classes from "./Input.module.css";

const Input = ({ label, name, error, formik, value, helperText, ...rest }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <TextField
        margin="normal"
        required
        id={name}
        type={name}
        label={label}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={value}
        error={error}
        helperText={helperText}
        // sx={{ ...muiClass }}
        {...rest}
      />
    </FormControl>
  );
};

export default Input;
