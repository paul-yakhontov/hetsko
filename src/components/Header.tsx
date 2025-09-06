import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/constants';

export function Header() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent:'space-between', py:1 }}>
          <Typography variant="h6" component={Link} to={ROUTES.root} style={{ textDecoration:'none', color:'inherit' }}>
            HETSKO
          </Typography>
          <Box sx={{ display:'flex', gap: 2 }}>
            <Button component={Link} to={ROUTES.services}>Послуги</Button>
            <Button component={Link} to={ROUTES.about}>Про нас</Button>
            <Button component={Link} to={ROUTES.contacts} variant="contained">Звʼязатись</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
