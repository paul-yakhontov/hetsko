import { Container, Stack, Typography, Link as MLink } from '@mui/material';
import { CONTACTS } from '../shared/constants';

export default function Contacts() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>Контакти</Typography>
      <Stack spacing={1}>
        <MLink href={CONTACTS.phoneHref}>Телефон</MLink>
        <MLink href={CONTACTS.emailHref}>Email</MLink>
        <MLink href={CONTACTS.telegramHref} target="_blank" rel="noreferrer">Telegram</MLink>
      </Stack>
    </Container>
  );
}
