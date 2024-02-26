import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Link,
  Alert,
} from "@mui/material";
// import { Password } from "@mui/icons-material";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: "jav@jav",
  password: "123456",
  displayName: "Javier",
};

const formValidations = {
  email: [(value) => value.includes("@"), "@", "El correo debe de tener un @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener mas de 6 caracteres",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );
  const {
    displayName,
    email,
    password,
    onInputChange,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
    formState,
  } = useForm(formData, formValidations);

  const [formSubmitted, setformSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;
    // formSubmitted(true);
    dispatch(startCreatingUserWithEmailPassword(formState));
  };
  return (
    <>
      <AuthLayout title={"Register"}>
        {/* <h1>FormValid: {isFormValid ? "Valido" : "Invalido"}</h1> */}
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre Completo"
                type="text"
                placeholder="Nombre completo"
                fullWidth
                name="displayName"
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
                FormHelperTextProps={{ style: { color: "red" } }}
                value={displayName}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo Electrónico"
                type="email"
                placeholder="Correo Electrónico"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                FormHelperTextProps={{ style: { color: "red" } }}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Clave"
                type="password"
                placeholder="Clave"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                FormHelperTextProps={{ style: { color: "red" } }}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={isCheckingAuthentication}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};

export default RegisterPage;
