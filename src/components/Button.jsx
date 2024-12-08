import React from 'react';
import { Button } from '@mui/material';
import '../index.css';

const Botao = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      sx={{ mt: 2 }}
    >
      Clique Aqui
    </Button>
  );
};

export default Botao;

//aprendi a usar o MUI nas oficinas de SNTC, aprendi a usar hooks, como o useState, Props, UseEfects e ainda o MUI, para personalizar
