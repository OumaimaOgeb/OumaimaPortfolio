// Base64 image data is loaded from the external script at runtime.
// This module re-exports the global IMG object with proper TypeScript types.

declare global {
  const IMG: Record<string, string>;
}

export type ImageKey =
  | 'img1' | 'img2' | 'img3' | 'img4' | 'img5' | 'img6' | 'img7' | 'img8'
  | 'img9' | 'img10' | 'img11' | 'img12' | 'img13' | 'img14' | 'img15' | 'img16'
  | 'work1' | 'work2' | 'work3' | 'work4' | 'work5' | 'work6' | 'work7' | 'work8'
  | 'work9' | 'work10' | 'work11' | 'work12';

export const getImage = (key: ImageKey): string => IMG[key] ?? '';
