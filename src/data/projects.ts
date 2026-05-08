import { type ImageKey } from './images';

export interface Project {
  imageKey: ImageKey;
  title: string;
  titleDe: string;
  desc: string;
  descDe: string;
}

const projects: Project[] = [
  { imageKey: 'work1',  title: 'Clamant Body',       titleDe: 'Clamant Body',       desc: 'Brand Identity Development, Packaging Design, Photography.',          descDe: 'Markenidentität, Verpackungsdesign, Fotografie.' },
  { imageKey: 'work2',  title: 'Clamant Body',       titleDe: 'Clamant Body',       desc: 'Brand Identity Development, Packaging Design, Photography.',          descDe: 'Markenidentität, Verpackungsdesign, Fotografie.' },
  { imageKey: 'work3',  title: 'Chancy Beauty',      titleDe: 'Chancy Beauty',      desc: 'Brand Identity Development, Packaging Design, Photography.',          descDe: 'Markenidentität, Verpackungsdesign, Fotografie.' },
  { imageKey: 'work4',  title: 'Chancy Beauty',      titleDe: 'Chancy Beauty',      desc: 'Creative & Art Direction, Digital Campaigns.',                        descDe: 'Kreative & Art Direction, Digitale Kampagnen.' },
  { imageKey: 'work5',  title: 'Ozy',                titleDe: 'Ozy',                desc: 'Brand Identity Development, Packaging Design.',                       descDe: 'Markenidentität, Verpackungsdesign.' },
  { imageKey: 'work6',  title: 'Ozy',                titleDe: 'Ozy',                desc: 'Brand Identity Development, Packaging Design.',                       descDe: 'Markenidentität, Verpackungsdesign.' },
  { imageKey: 'work7',  title: 'Saraya',             titleDe: 'Saraya',             desc: 'Brand Identity Development, Social Media Content.',                   descDe: 'Markenidentität, Social-Media-Inhalte.' },
  { imageKey: 'work8',  title: 'Saraya',             titleDe: 'Saraya',             desc: 'Brand Identity Development, Social Media Content.',                   descDe: 'Markenidentität, Social-Media-Inhalte.' },
  { imageKey: 'work9',  title: 'Watanya',            titleDe: 'Watanya',            desc: 'Brand Identity Development, Digital Campaigns.',                      descDe: 'Markenidentität, Digitale Kampagnen.' },
  { imageKey: 'work10', title: 'Watanya',            titleDe: 'Watanya',            desc: 'Brand Identity Development, Digital Campaigns.',                      descDe: 'Markenidentität, Digitale Kampagnen.' },
  { imageKey: 'work11', title: 'Cité de la Culture', titleDe: 'Cité de la Culture', desc: 'Art Direction, Photography, Event Documentation.',                    descDe: 'Art Direction, Fotografie, Veranstaltungsdokumentation.' },
  { imageKey: 'work12', title: 'Cité de la Culture', titleDe: 'Cité de la Culture', desc: 'Art Direction, Photography, Event Documentation.',                    descDe: 'Art Direction, Fotografie, Veranstaltungsdokumentation.' },
];

export default projects;
