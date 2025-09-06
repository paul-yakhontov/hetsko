import { Alert, Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = 'REPLACE_WITH_WEB3FORMS_KEY'; // винести у .env якщо потрібно

export function ContactForm() {
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(null); setErr(null);
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', ACCESS_KEY);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) { setOk('Заявку надіслано, ми звʼяжемось найближчим часом.'); e.currentTarget.reset(); }
      else setErr('Сталася помилка. Спробуйте ще раз або зателефонуйте.');
    } catch {
      setErr('Сталася помилка мережі. Спробуйте ще раз.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 3 }}>Звʼязатися з нами</Typography>
      <Box component="form" onSubmit={submit}>
        <Stack spacing={2}>
          <TextField name="name" label="Імʼя" required/>
          <TextField name="phone" label="Телефон" required/>
          <TextField name="email" type="email" label="Email"/>
          <TextField name="service" label="Послуга" />
          <TextField name="message" label="Повідомлення" multiline minRows={3}/>
          <input type="text" name="honeypot" style={{ display:'none' }} tabIndex={-1} autoComplete="off" />
          <Button type="submit" variant="contained">Надіслати</Button>
          {ok && <Alert severity="success">{ok}</Alert>}
          {err && <Alert severity="error">{err}</Alert>}
        </Stack>
      </Box>
    </Container>
  );
}
