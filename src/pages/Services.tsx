import { Container, Typography } from '@mui/material';

export default function Services() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>Послуги</Typography>
      <Typography>Детальні описи послуг та етапів робіт (заповнити під ваші процеси).</Typography>
    </Container>
  );
}
