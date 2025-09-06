import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/constants';

export function Hero() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="flex-start">
          <Typography variant="h1">Геодезичні та землевпорядні послуги в Україні</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            Межування, техдокументація, кадастрові послуги. Швидко, офіційно, з гарантією точності.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" component={Link} to={ROUTES.contacts}>Отримати консультацію</Button>
            <Button variant="outlined" component={Link} to={ROUTES.services}>Дізнатись більше</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
