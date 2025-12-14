import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";

import { Hooks } from "./components/Hooks";
import { CustomHook } from "./components/CustomHook";
import { Formulario } from "./components/Formulario";
import { Query } from "./components/Query";

const Home = () => (
  <Box sx={{ textAlign: "center", mt: 5 }}>
    <Typography variant="h3">Examen Programación Web</Typography>
    <Typography variant="h6" color="text.secondary">
      Selecciona un tema en el menú de arriba
    </Typography>
  </Box>
);

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi Examen
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/hooks">
            Hooks
          </Button>
          <Button color="inherit" component={Link} to="/custom">
            Custom
          </Button>
          <Button color="inherit" component={Link} to="/form">
            Formulario
          </Button>
          <Button color="inherit" component={Link} to="/query">
            Query API
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/custom" element={<CustomHook />} />
          <Route path="/form" element={<Formulario />} />
          <Route path="/query" element={<Query />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
