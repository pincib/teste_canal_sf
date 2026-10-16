import type { Metadata } from 'next';
import './lo0222.css';
import HeaderNav from '@/components/lo0222/HeaderNav';
import HeroSection from '@/components/lo0222/HeroSection';
import PillarsSection from '@/components/lo0222/PillarsSection';
import ShowroomConceptSection from '@/components/lo0222/ShowroomConceptSection';
import BlueprintViewer from '@/components/lo0222/BlueprintViewer';
import MaterialsGallery from '@/components/lo0222/MaterialsGallery';
import LocationSection from '@/components/lo0222/LocationSection';
import LeadContactForm from '@/components/lo0222/LeadContactForm';

export const metadata: Metadata = {
  title: 'Projeto São Francisco | Pinciara Imóveis Exclusivos',
  description: 'O endereço definitivo para sua flagship store em Niterói.',
};

export default function Lo0222Page() {
  return (
    <div className="lo0222-page">
      <HeaderNav />
      <HeroSection />
      <PillarsSection />
      <ShowroomConceptSection />
      <BlueprintViewer />
      <MaterialsGallery />
      <LocationSection />
      <LeadContactForm />
    </div>
  );
}
