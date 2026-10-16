import type { Metadata } from 'next';
import '../predio.css';
import LandingPage from '@/components/predio/LandingPage';

export const metadata: Metadata = {
  title: 'Largo São Francisco de Paula, 34 | Pinciara Real Estate',
  description: "A mixed-use development with mall, event spaces, rooftop and 129 studios in Rio de Janeiro's Historic Center.",
};

export default function Page() {
  return <LandingPage locale="en" />;
}
