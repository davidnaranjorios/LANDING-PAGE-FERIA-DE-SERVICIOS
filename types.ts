export interface NavItem {
  id: string;
  label: string;
}

export interface FloorItem {
  title: string;
  floor: string;
}

export interface LinkItem {
  title: string;
  url: string;
  type: 'external' | 'download';
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  links?: LinkItem[];
  email?: string;
  notes?: string[];
}