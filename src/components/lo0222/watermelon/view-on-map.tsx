import { MapPin } from 'lucide-react';

export function ViewOnMap({ coordinates, className = '' }: { coordinates: string; className?: string }) {
  const destination = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordinates)}`;
  const preview = `https://maps.google.com/maps?q=${encodeURIComponent(coordinates)}&z=16&output=embed`;
  return <a className={`view-map map-preview ${className}`} href={destination} target="_blank" rel="noreferrer" aria-label="Abrir localização do Projeto São Francisco no Google Maps"><iframe title="Prévia da localização do Projeto São Francisco" src={preview} loading="lazy" tabIndex={-1}/><span><MapPin size={17}/><b>Ver no Google Maps</b><small>{coordinates}</small></span></a>;
}
