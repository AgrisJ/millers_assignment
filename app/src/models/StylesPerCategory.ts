export interface ColorSize {
  id: number;
  color_id: number;
  size_id: number;
  created_at: string;
  updated_at: string;
}

export interface Availability {
  id: number;
  volume: number;
  ColorSize: ColorSize;
}

export interface Size {
  id: number;
  size_name: string;
  Availabilities: Availability[];
  Children: Size[];
  color_sizes: ColorSize;
}

export interface ColorSizes {
  id: number;
}

export interface Color {
  color_name: string;
  Sizes: Size[];
  Image: null;
  ColorSizes: ColorSizes[];
}

export interface StylePerCategory {
  id: number;
  category_id: number;
  style_name: string;
  created_at: string;
  updated_at: string;
  Colors: Color[];
}
