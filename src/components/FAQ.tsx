import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { q: 'Скільки триває межування ділянки?', a: 'Зазвичай 3–7 робочих днів залежно від регіону та складності.' },
  { q: 'Які документи потрібні?', a: 'Паспорт, ІПН, правовстановлюючі документи на ділянку. Детально уточнюємо при зверненні.' },
  { q: 'Чи працюєте по всій Україні?', a: 'Так, маємо партнерів у більшості областей.' },
];

export function FAQ() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>Питання та відповіді</Typography>
      {faqs.map((f) => (
        <Accordion key={f.q}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">{f.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">{f.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
