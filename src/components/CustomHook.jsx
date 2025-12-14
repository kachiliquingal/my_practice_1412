import React from 'react';
import { Button, Typography, Paper, Stack } from '@mui/material';
import { useCounter } from '../hooks/useCounter';

export const CustomHook = () => {
  const { count, incrementar, decrementar, resetear } = useCounter(10);

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Tema: Custom Hooks</Typography>
      <Typography variant="body1">Lógica reutilizable importada desde <code>useCounter.js</code></Typography>
      
      <Typography variant="h3" align="center" sx={{ my: 2 }}>{count}</Typography>
      
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="success" onClick={incrementar}>+1</Button>
        <Button variant="contained" color="warning" onClick={decrementar}>-1</Button>
        <Button variant="outlined" color="error" onClick={resetear}>Reset</Button>
      </Stack>
    </Paper>
  );
};