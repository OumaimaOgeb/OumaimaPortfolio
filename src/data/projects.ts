import { type ImageKey } from './images';

export interface Project {
  imageKey: ImageKey;
  caption: string;
  captionDe: string;
  category: string;
  categoryDe: string;
}

const projects: Project[] = [
  { imageKey: 'img1',  caption: 'Dance Performance — Didon et Enée',     captionDe: 'Tanzaufführung — Didon et Enée',             category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'img2',  caption: 'Guitarist — Live Concert',               captionDe: 'Gitarrist — Live-Konzert',                   category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'img3',  caption: 'Guitarist — Stage Performance',          captionDe: 'Gitarrist — Bühnenauftritt',                 category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'img4',  caption: 'Intimate Duet — Contemporary Dance',     captionDe: 'Intimes Duett — Zeitgenössischer Tanz',      category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'img5',  caption: 'Solo — Chair Choreography',              captionDe: 'Solo — Stuhlchoreographie',                  category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'img6',  caption: 'Ensemble — Blue Light',                  captionDe: 'Ensemble — Blaues Licht',                    category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'img7',  caption: 'Pyramid Formation — Contemporary Dance', captionDe: 'Pyramidenformation — Zeitgenössischer Tanz', category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'img8',  caption: 'Pas de Deux — Contemporary',             captionDe: 'Pas de Deux — Zeitgenössisch',               category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'img9',  caption: 'Oriental Concert — Arab Summit',         captionDe: 'Orientalisches Konzert — Arabischer Gipfel', category: 'Performance',      categoryDe: 'Aufführung' },
  { imageKey: 'img10', caption: 'Logo Design',                            captionDe: 'Logo-Design',                                category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
  { imageKey: 'img11', caption: 'Clamant Body — Full Collection',         captionDe: 'Clamant Body — Gesamtkollektion',            category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
  { imageKey: 'img12', caption: 'Clamant Body — Peach Blossom Scrub',    captionDe: 'Clamant Body — Pfirsichblüten-Scrub',        category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
  { imageKey: 'img13', caption: 'Clamant Body — Healthy Glow Scrub',     captionDe: 'Clamant Body — Healthy Glow Scrub',          category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
  { imageKey: 'img14', caption: 'Clamant Body — Full Collection',         captionDe: 'Clamant Body — Gesamtkollektion',            category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
  { imageKey: 'img15', caption: 'Clamant Body — Peppermint Scrub',       captionDe: 'Clamant Body — Pfefferminz-Scrub',           category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
  { imageKey: 'img16', caption: 'Clamant Body — Brand Identity',          captionDe: 'Clamant Body — Markenidentität',             category: 'Brand & Identity', categoryDe: 'Marke & Identität' },
];

export default projects;
