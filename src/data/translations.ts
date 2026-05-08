export type Lang = 'en' | 'de';

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface StatItem {
  num: string;
  label: string;
}

export interface Translations {
  nav: { home: string; work: string; contact: string };
  bio: string;
  servicesHeading: string;
  services: ServiceItem[];
  stats: StatItem[];
  workHeading: string;
  workSub: string;
  exploreBtn: string;
  contactSub: string;
  contactTitle: string;
  form: {
    name: string;
    namePh: string;
    email: string;
    message: string;
    messagePh: string;
    submit: string;
    thanks: string;
  };
  footer: string;
  backTop: string;
  img: Record<string, string>;
  heroLabel: string;
  heroQuote: string;
  categories: string[];
  filterAll: string;
  roleTitle: string;
  workIntro: string;
  workIntroPara: string;
  brandsHeading: string;
  brandsSub: string;
}

const translations: Record<Lang, Translations> = {
  en: {
    nav: { home: 'HOME', work: 'WORK', contact: 'CONTACT' },
    bio: 'Ogeb Oumaima is a Tunis-based Curator & Photographer with experience spanning performance documentation, brand photography, and graphic design. She specializes in turning raw moments into visual narratives — capturing emotion, culture, and identity through the lens.',
    servicesHeading: 'Helping artists, brands & organizations create meaningful visual connections through:',
    services: [
      { title: 'Art Curation & Direction:', desc: 'Conceptualizing and organizing artistic events and exhibitions that communicate a vision and connect audiences to art.' },
      { title: 'Performance Photography:', desc: 'Capturing the energy and emotion of live performances, concerts, and cultural events.' },
      { title: 'Brand Photography:', desc: "Creating compelling product and lifestyle imagery that reflects a brand's identity and resonates with its audience." },
      { title: 'Graphic Design & Identity:', desc: 'Building cohesive visual identities through logo design, typography, and brand systems.' },
      { title: 'Photo Retouching:', desc: 'Transforming raw images into polished, emotionally resonant visuals through expert editing.' },
      { title: 'Storytelling:', desc: 'Developing narratives that connect people to art, culture, and creative experiences.' },
    ],
    stats: [
      { num: '165+', label: 'Events Documented' },
      { num: '52', label: 'Brands' },
      { num: '10+', label: 'Industries' },
      { num: '4+', label: 'Years of Experience' },
    ],
    workHeading: "Some work I've done",
    workSub: 'From live performance documentation to brand visual identities — a selection of projects across photography, curation, and design.',
    exploreBtn: 'EXPLORE PROJECTS',
    contactSub: 'Have a project in mind?',
    contactTitle: "Let's work<br>together",
    form: { name: 'Name', namePh: 'Your name', email: 'Email Address', message: 'Message', messagePh: 'Tell me about your project...', submit: 'SUBMIT', thanks: "Thank you! I'll be in touch soon." },
    footer: '© 2025 Ogeb Oumaima — Curator & Photographer',
    backTop: 'Back to top',
    img: { concert: 'Arab Summit — Oriental Concert', dance: 'Dance Performance', ensemble: 'Ensemble Blue Light', collection: 'Clamant Body Collection', brand: 'Clamant Body Brand Identity', pyramid: 'Pyramid Formation', peach: 'Peach Blossom Scrub', guitarist: 'Guitarist Stage', peppermint: 'Peppermint Scrub', duet: 'Intimate Duet', solo: 'Solo Chair Choreography', pasDeDeuxe: 'Pas de Deux' },
    heroLabel: 'Curator & Photographer',
    heroQuote: 'Turning raw moments into visual narratives.',
    categories: ['Performance', 'Brand & Identity'],
    filterAll: 'All',
    roleTitle: 'Art Director',
    workIntro: 'Explore a selection of the projects',
    workIntroPara: 'Each design tells a story, with every detail thoughtfully crafted to inspire. Discover how bold visuals and strategic thinking have transformed ideas into impactful creations.',
    brandsHeading: "Some brands & orgs I've worked with",
    brandsSub: 'Over the years, collaborations with a wide range of brands and organizations have demonstrated adaptability to diverse industries while maintaining a commitment to tailored creative narratives',
  },
  de: {
    nav: { home: 'Startseite', work: 'Werke', contact: 'Kontakt' },
    bio: 'Ogeb Oumaima ist eine in Tunis ansässige Kuratorin und Fotografin mit Erfahrung in der Dokumentation von Aufführungen, der Markenfotografie und im Grafikdesign. Sie ist darauf spezialisiert, rohe Momente in visuelle Erzählungen zu verwandeln — und erfasst dabei Emotionen, Kultur und Identität durch die Linse.',
    servicesHeading: 'Künstlern, Marken und Organisationen dabei helfen, bedeutungsvolle visuelle Verbindungen zu schaffen durch:',
    services: [
      { title: 'Kunstkuration & -direktion:', desc: 'Konzeption und Organisation künstlerischer Veranstaltungen und Ausstellungen, die eine Vision vermitteln und das Publikum mit der Kunst verbinden.' },
      { title: 'Aufführungsfotografie:', desc: 'Einfangen der Energie und Emotionen von Live-Aufführungen, Konzerten und kulturellen Veranstaltungen.' },
      { title: 'Markenfotografie:', desc: 'Erstellung überzeugender Produkt- und Lifestyle-Bilder, die die Identität einer Marke widerspiegeln und das Publikum ansprechen.' },
      { title: 'Grafikdesign & Markenidentität:', desc: 'Aufbau kohärenter visueller Identitäten durch Logo-Design, Typografie und Markensysteme.' },
      { title: 'Fotobearbeitung:', desc: 'Transformation von Rohbildern in ausdrucksstarke, emotional resonante Visuals durch professionelle Bearbeitung.' },
      { title: 'Storytelling:', desc: 'Entwicklung von Erzählungen, die Menschen mit Kunst, Kultur und kreativen Erlebnissen verbinden.' },
    ],
    stats: [
      { num: '165+', label: 'Dokumentierte Veranstaltungen' },
      { num: '52', label: 'Marken' },
      { num: '10+', label: 'Branchen' },
      { num: '4+', label: 'Jahre Erfahrung' },
    ],
    workHeading: 'Einige meiner Arbeiten',
    workSub: 'Von der Dokumentation von Live-Aufführungen bis hin zu visuellen Markenidentitäten — eine Auswahl von Projekten aus Fotografie, Kuration und Design.',
    exploreBtn: 'PROJEKTE ENTDECKEN',
    contactSub: 'Haben Sie ein Projekt im Sinn?',
    contactTitle: 'Lass uns zusammen<br>arbeiten',
    form: { name: 'Name', namePh: 'Ihr Name', email: 'E-Mail-Adresse', message: 'Nachricht', messagePh: 'Erzählen Sie mir von Ihrem Projekt...', submit: 'ABSENDEN', thanks: 'Vielen Dank! Ich melde mich bald.' },
    footer: '© 2025 Ogeb Oumaima — Kuratorin & Fotografin',
    backTop: 'Nach oben',
    img: { concert: 'Arabischer Gipfel — Orientalisches Konzert', dance: 'Tanzaufführung', ensemble: 'Ensemble — Blaues Licht', collection: 'Clamant Body Kollektion', brand: 'Clamant Body — Markenidentität', pyramid: 'Pyramidenformation', peach: 'Pfirsichblüten-Scrub', guitarist: 'Gitarrist auf der Bühne', peppermint: 'Pfefferminz-Scrub', duet: 'Intimes Duett', solo: 'Solo — Stuhlchoreographie', pasDeDeuxe: 'Pas de Deux' },
    heroLabel: 'Kuratorin & Fotografin',
    heroQuote: 'Rohe Momente in visuelle Erzählungen verwandeln.',
    categories: ['Aufführung', 'Marke & Identität'],
    filterAll: 'Alle',
    roleTitle: 'Art Directorin',
    workIntro: 'Entdecken Sie eine Auswahl der Projekte',
    workIntroPara: 'Jedes Design erzählt eine Geschichte, mit jedem Detail sorgfältig gestaltet, um zu inspirieren. Entdecken Sie, wie mutige Visuals und strategisches Denken Ideen in wirkungsvolle Kreationen verwandelt haben.',
    brandsHeading: 'Einige Marken & Organisationen, mit denen ich gearbeitet habe',
    brandsSub: 'Im Laufe der Jahre haben Zusammenarbeiten mit einer Vielzahl von Marken und Organisationen die Anpassungsfähigkeit an verschiedene Branchen unter Beweis gestellt – stets mit dem Ziel, maßgeschneiderte kreative Erzählungen zu schaffen.',
  },
};

export default translations;
