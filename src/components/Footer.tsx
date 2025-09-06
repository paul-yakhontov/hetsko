import { Container, Stack, Typography } from '@mui/material';

export function Footer() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={1} alignItems="center">
        <Typography variant="body2">© {new Date().getFullYear()} HETSKO</Typography>
        <Typography variant="caption" color="text.secondary">Всі права захищено</Typography>
      </Stack>
    </Container>
  );
}
