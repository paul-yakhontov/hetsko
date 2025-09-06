import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1463FF' },
    secondary: { main: '#00A36C' },
    text: { primary: '#111827', secondary: '#4B5563' },
    background: { default: '#FFFFFF' }
  },
  typography: {
    fontFamily: ['Inter','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','sans-serif'].join(','),
    h1: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: '1.875rem', fontWeight: 700 },
    body1:{ fontSize: '1rem', lineHeight: 1.65 }
  },
  shape: { borderRadius: 12 }
});
