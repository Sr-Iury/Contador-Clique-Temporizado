import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Card, CardContent, LinearProgress, Grid } from '@mui/material';
import { blue, green } from '@mui/material/colors';

const Contador = () => {
  const [getContadorDeClique, setContadorDeClique] = useState(0);
  const [getTempoCorrido, setTempoCorrido] = useState(0);
  const [getContador, setContador] = useState(false);

  const ContadorDeClique = () => {
    setContadorDeClique(getContadorDeClique + 1);
    setContador((prev) => !prev);
  };

  useEffect(() => {
    if (getContador) {
      const intervaloTempo = setInterval(() => {
        setTempoCorrido((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(intervaloTempo);
    }
  }, [getContador]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
      minHeight="100vh"
      bgcolor="#f4f6f8"
    >
      <Card sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" color={blue[700]}>
            Contador de Clique
          </Typography>
          <Typography variant="h6" color="textSecondary" align="center">
            Clique no botão abaixo para começar a contar!
          </Typography>


          <Typography variant="h5" align="center" color={green[500]} sx={{ mt: 2 }}>
            Você clicou: {getContadorDeClique} vezes
          </Typography>

          <LinearProgress
            variant="determinate"
            value={(getTempoCorrido % 100)}
            sx={{
              mt: 3,
              height: 10,
              borderRadius: 5,
              bgcolor: green[100],
            }}
          />
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            Tempo decorrido: {getTempoCorrido} segundos
          </Typography>

          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={ContadorDeClique}
              sx={{
                borderRadius: 3,
                boxShadow: 2,
                paddingX: 4,
                paddingY: 2,
                '&:hover': {
                  bgcolor: blue[700],
                  boxShadow: 6,
                },
              }}
            >
              {getContador ? 'Pausar' : 'Iniciar'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contador;

//aprendi a usar o MUI nas oficinas de SNTC, aprendi a usar hooks, como o useState, Props, UseEfects e ainda o MUI, para personalizar

//Iury Fim da Silva