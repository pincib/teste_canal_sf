import type { Metadata } from 'next';
import './predio.css';
import LandingPage from '@/components/predio/LandingPage';

export const metadata: Metadata = {
  title: 'Largo São Francisco de Paula, 34 | Pinciara Imóveis',
  description: 'Edifício de uso misto com mall, espaços para eventos, rooftop e 129 studios no Centro Histórico do Rio de Janeiro.',
};

export default function Page() {
  return <LandingPage locale="pt" />;
}
