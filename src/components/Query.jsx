import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  CircularProgress,
  Alert,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
} from "@mui/material";

const fetchUsers = async () => {
  const res = await axios.get("https://rickandmortyapi.com/api/character");
  return res.data;
};

export const Query = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["usuarios"],
    queryFn: fetchUsers,
  });

  if (isLoading)
    return <CircularProgress sx={{ display: "block", mx: "auto", mt: 4 }} />;
  if (isError)
    return (
      <Alert severity="error" sx={{ mt: 4 }}>
        Error cargando datos
      </Alert>
    );

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Tema: TanStack Query (API)
      </Typography>
      <List>
        {data.results.map((personaje) => (
          <ListItem key={personaje.id} divider>
            <Box
              component="img"
              src={personaje.image}
              alt={personaje.name}
              sx={{
                width: 50,
                height: 50,
                mr: 2,
                borderRadius: "50%",
              }}
            />
            <ListItemText
              primary={`${personaje.name} - ${personaje.species}`}
              secondary={personaje.status}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
