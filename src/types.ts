export type PageAccent = 'gold' | 'cyan' | 'blue' | 'magenta' | 'amber' | 'emerald';

export type VisualizationType =
  | 'cover_bubble_tesseract'
  | 'one_bit_void'
  | 'node_7_layers'
  | 'node_fractal_recursive'
  | 'mesh_tesseract_4d'
  | 'mesh_ocean_waves'
  | 'black_hole_7_zones'
  | 'big_bang_spiral_jet'
  | 'nested_fractal_bubbles'
  | 'dark_veil_95_percent'
  | 'spaghettification_smoke'
  | 'spiritual_4_symbols'
  | 'gravitational_waves_dual'
  | 'helical_solar_system'
  | 'master_formula_blueprint'
  | 'cosmic_mandala_infinite';

export interface MagazinePageData {
  pageNumber: number;
  title: string;
  moduleCode: string;
  subtitle?: string;
  authorInfo?: string;
  text: string[];
  equations?: string[];
  scientificNotes?: { label: string; value: string; detail?: string }[];
  frequencies?: { hz: number | string; label: string; color: string; description?: string }[];
  promptEN: string;
  promptPT: string;
  accent: PageAccent;
  visualizationType: VisualizationType;
}

export type ViewMode = 'single' | 'spread' | 'grid' | 'presentation';

export interface PageCustomImage {
  [pageNumber: number]: string; // base64 or url
}

