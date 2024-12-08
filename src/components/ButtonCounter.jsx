import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Card, CardContent, LinearProgress } from '@mui/material';
import { blue, green } from '@mui/material/colors';

const Contador = () => {
  const [getContadorDeClique, setContadorDeClique] = useState(0);
  const [getTempoCorrido, setTempoCorrido] = useState(0);
  const [getContador, setContador] = useState(false);
  const [getContadorDeTempo, setContadorDeTempo] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [intervaloTempo, setIntervaloTempo] = useState(null);
  const [intervaloClique, setIntervaloClique] = useState(null);

  const ContadorDeClique = () => {
    setContadorDeClique(getContadorDeClique + 1);
    if (!getContador) {
      setContador(true);
    }
  };

  const PausarContador = () => {
    setContador(false);
    if (intervaloTempo) clearInterval(intervaloTempo);
    if (intervaloClique) clearInterval(intervaloClique);
  };

  useEffect(() => {
    if (getContador) {
      const tempoIntervalo = setInterval(() => {
        setTempoCorrido((prevTime) => prevTime + 1);
      }, 1000);

      const cliqueIntervalo = setInterval(() => {
        setContadorDeTempo((prevTempo) => prevTempo + 1);
        setProgressValue((prevProgress) => (prevProgress + 20) % 100);
      }, 5000);

      setIntervaloTempo(tempoIntervalo);
      setIntervaloClique(cliqueIntervalo);
    } else {
      if (intervaloTempo) clearInterval(intervaloTempo);
      if (intervaloClique) clearInterval(intervaloClique);
    }

    return () => {
      if (intervaloTempo) clearInterval(intervaloTempo);
      if (intervaloClique) clearInterval(intervaloClique);
    };
  }, [getContador]);

  const formatarTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  };

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

          <Typography variant="h5" align="center" color={green[500]} sx={{ mt: 2 }}>
            Tempo decorrido a cada 5 segundos: {getContadorDeTempo} vezes
          </Typography>

          <LinearProgress
            variant="determinate"
            value={progressValue}
            sx={{
              mt: 3,
              height: 10,
              borderRadius: 5,
              bgcolor: green[100],
            }}
          />
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            Tempo total decorrido: {formatarTempo(getTempoCorrido)} minutos
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
              Iniciar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={PausarContador}
              sx={{
                borderRadius: 3,
                boxShadow: 2,
                paddingX: 4,
                paddingY: 2,
                ml: 2,
                '&:hover': {
                  bgcolor: blue[700],
                  boxShadow: 6,
                },
              }}
            >
              Pausar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contador;

//aprendi a usar o MUI nas oficinas de SNTC, aprendi a usar hooks, como o useState, Props, UseEfects e ainda o MUI, para personalizar
