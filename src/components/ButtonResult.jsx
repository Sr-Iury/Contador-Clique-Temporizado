import React from 'react';
import { Typography } from '@mui/material';

const BotaoResult = ({ contador, tempo }) => {
  return (
    <div>
      <Typography variant="body1">
        Você clicou nesse botão: {contador} vezes
      </Typography>
      <Typography variant="body1">
        Tempo decorrido: {tempo} segundos
      </Typography>
    </div>
  );
};

export default BotaoResult;

//aprendi a usar o MUI nas oficinas de SNTC, aprendi a usar hooks, como o useState, Props, UseEfects e ainda o MUI, para personalizar
