import { type ImageKey } from './images';

export interface Project {
  imageKey: ImageKey;
  caption: string;
  captionDe: string;
  category: string;
  categoryDe: string;
}

const projects: Project[] = [
  { imageKey: 'work1', caption: 'Work 1', captionDe: 'Werk 1', category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'work2', caption: 'Work 2', captionDe: 'Werk 2', category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'work3', caption: 'Work 3', captionDe: 'Werk 3', category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'work4', caption: 'Work 4', captionDe: 'Werk 4', category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'work5', caption: 'Work 5', captionDe: 'Werk 5', category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
  { imageKey: 'work6', caption: 'Work 6', captionDe: 'Werk 6', category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
  { imageKey: 'work7', caption: 'Work 7', captionDe: 'Werk 7', category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
  { imageKey: 'work8', caption: 'Work 8', captionDe: 'Werk 8', category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
];

export default projects;
