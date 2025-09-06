import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>Про нас</Typography>
      <Typography>Команда інженерів-геодезистів і землевпорядників з досвідом по всій Україні.</Typography>
    </Container>
  );
}
