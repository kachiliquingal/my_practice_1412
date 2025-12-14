import React from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button, Stack, Paper, Typography } from "@mui/material";

export const Formulario = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Tema: React Hook Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={3} >
          <TextField 
            label="Nombre Completo" 
            variant="outlined"
            {...register("nombre", { required: "El nombre es obligatorio" })}
            error={!!errors.nombre}
            helperText={errors.nombre?.message}
          />
          
          <TextField 
            label="Correo Electrónico" 
            type="email"
            {...register("email", { required: "El correo es obligatorio" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <Button type="submit" variant="contained" size="large">Enviar Datos</Button>
        </Stack>
      </form>
    </Paper>
  );
};