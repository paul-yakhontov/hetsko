import { Hero } from '../components/Hero';
import { ServicesGrid } from '../components/ServicesGrid';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';

export default function Landing() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FAQ />
      <ContactForm />
    </>
  );
}
