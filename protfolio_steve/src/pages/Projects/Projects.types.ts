export interface SystemSpec {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  archiveRef: string;
  title: string;
  subtitle: string;
  category: string[];
  images: string[];
  tags: string[];
  coreTech: string[];
  summary: string;
  description: string[];
  keyOutcomes: string[];
  systemSpecs: SystemSpec[];
  systemStatus: string;
  viewPort: string;
}