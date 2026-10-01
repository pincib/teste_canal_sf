export interface PropertyImage {
  src: string;
  alt: string;
  label?: string;
}

export interface PropertyFeature {
  label: string;
  value: string;
  icon?: string;
}

export interface CommercialProperty {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string[];
  address: string;
  specs: {
    totalArea: number; // m²
    builtArea?: number; // m²
    frontage?: string; // testada/frente
    parkingSpaces: number;
    floors?: number;
    bathrooms?: number;
    electrical?: string; // ex: Trifásica
  };
  pricing: {
    rent: string;
    condo?: string;
    iptu?: string;
    note?: string;
  };
  highlights: string[];
  idealFor: string[];
  externalUrl: string;
  images: PropertyImage[];
  isAvailable: boolean;
}
