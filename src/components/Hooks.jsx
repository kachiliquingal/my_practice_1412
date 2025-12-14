import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Paper } from '@mui/material';

export const Hooks = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`Efecto ejecutado. Nuevo valor: ${contador}`);
  }, [contador]);

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Tema: Hooks (useState & useEffect)</Typography>
      <Typography variant="h2" align="center">{contador}</Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" onClick={() => setContador(contador + 1)}>Aumentar</Button>
        <Button variant="outlined" color="error" onClick={() => setContador(0)}>Reset</Button>
      </Box>
    </Paper>
  );
};