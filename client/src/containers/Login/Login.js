import * as React from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Input from "../../components/Input/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";

const theme = createTheme();

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Enter your pass").required("Password is required"),
});

export default function Login() {
  let navigate = useNavigate();

  const axiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_ABC || "http://localhost:4000",
    baseURL: "http://localhost:5000",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const obj = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(obj);

    axiosInstance.post("/Login", obj).then(async (res) => {
      console.log(res.data);
      if (res.data.user) {
        console.log(res.data.message, res.data.user);
        navigate("/details");
      } else console.log(res.data.message);
    });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: (values) => {
      console.log(values);
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Input
              label="Email Address"
              name="email"
              formik={formik}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Input
              label="Password"
              name="password"
              formik={formik}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
