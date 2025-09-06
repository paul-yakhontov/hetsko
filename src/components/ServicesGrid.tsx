import { Card, CardContent, Container, Grid, Typography } from '@mui/material';

const items = [
  { title: 'Геодезичний супровід', desc: 'Повний супровід будівництва: зйомка, винесення в натуру, виконавча документація.' },
  { title: 'Інженерно-геодезичні', desc: 'Топозйомка, побудова планів та профілів, геодезичні мережі.' },
  { title: 'Інженерно-геологічні', desc: 'Дослідження ґрунтів, лабораторні аналізи, звіти.' },
  { title: 'Землевпорядні', desc: 'Кадастр, оформлення документації, поділ/обʼєднання ділянок.' },
  { title: 'Маркшейдерські', desc: 'Геоконтроль гірничих робіт, підземні зйомки.' },
  { title: '3D-сканування', desc: 'Лазерне сканування обʼєктів, хмари точок, BIM.' },
];

export function ServicesGrid() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>Послуги</Typography>
      <Grid container spacing={2}>
        {items.map((it) => (
          <Grid item xs={12} sm={6} md={4} key={it.title}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>{it.title}</Typography>
                <Typography variant="body2" color="text.secondary">{it.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
