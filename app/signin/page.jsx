"use client";
import { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  Stack,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Stack
        ml={4}
        mt={3}
        mb={10}
        alignSelf={"flex-start"}
        direction="row"
        spacing={2}
      >
        <Link href={"/"}>
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={30}
            alt="Promptopia Logo"
          />
        </Link>
        <Typography variant="h5" align="center" fontWeight="bold">
          Corporate
        </Typography>
      </Stack>
      <Paper elevation={3}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            marginTop: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            paddingBottom: 32,
          }}
        >
          <Avatar style={{ margin: "8px", backgroundColor: "#3f51b5" }}>
            <LockIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginBottom: "8px" }}
          >
            Sign in
          </Typography>
          <form
            style={{ width: "100%", marginTop: "8px" }}
            onSubmit={handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: "24px 0 16px" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </Stack>
  );
}
