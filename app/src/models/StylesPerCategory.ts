export interface ColorSize {
  id: number;
  color_id: number;
  size_id: number;
  parent_color_size_id?: number | null;
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
  Subsizes: Size[];
  ColorSize: ColorSize;
}

export interface Image {
  id: number;
  image_url: string;
}

export interface Color {
  id: number;
  color_name: string;
  Images: Image[] | null;
  Sizes: Size[];
}

export interface Style {
  id: number;
  category_id: number;
  style_name: string;
  images: string[];
  created_at: string;
  updated_at: string;
  Colors: Color[];
}
