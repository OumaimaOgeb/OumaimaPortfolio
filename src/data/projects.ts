import { type ImageKey } from './images';

export interface Project {
  imageKey: ImageKey;
  title: string;
  titleDe: string;
  desc: string;
  descDe: string;
}

const projects: Project[] = [
  { imageKey: 'chancy',    title: 'Chancy Beauty', titleDe: 'Chancy Beauty', desc: 'Brand Identity Development, Packaging Design, Photography.',       descDe: 'Markenidentität, Verpackungsdesign, Fotografie.' },
  { imageKey: 'chouchou',  title: 'Chouchou',      titleDe: 'Chouchou',      desc: 'Brand Identity Development, Creative & Art Direction.',             descDe: 'Markenidentität, Kreative & Art Direction.' },
  { imageKey: 'clamant',   title: 'Clamant Body',  titleDe: 'Clamant Body',  desc: 'Brand Identity Development, Packaging Design, Photography.',       descDe: 'Markenidentität, Verpackungsdesign, Fotografie.' },
  { imageKey: 'ozy',       title: 'Ozy',           titleDe: 'Ozy',           desc: 'Brand Identity Development, Packaging Design, Digital Campaigns.', descDe: 'Markenidentität, Verpackungsdesign, Digitale Kampagnen.' },
  { imageKey: 'ozy_linen', title: 'Ozy Linen',     titleDe: 'Ozy Linen',     desc: 'Brand Identity Development, Packaging Design.',                    descDe: 'Markenidentität, Verpackungsdesign.' },
  { imageKey: 'concert',   title: 'Concert',        titleDe: 'Konzert',        desc: 'Art Direction & Filmmaking.',                                       descDe: 'Art Direction & Filmmaking.' },
];

export default projects;
