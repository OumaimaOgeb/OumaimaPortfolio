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
    bio: 'Oumaima Ogeb is a Germany-based Art Director with over 4 years of experience. With experience across a wide range of design disciplines, she specializes in thoughtful, typography-driven branding, Social Media Content Creation, editorial design, and art direction. She has worked on brand identities, campaigns, films, websites and packaging.',
    servicesHeading: 'Helping brands and businesses create meaningful connections with their audiences through:',
    services: [
      { title: 'Brand Identity Development:', desc: "Developing comprehensive visual identities that reflect a brand's core values and resonate with its target audience." },
      { title: 'Social Media Content Creation:', desc: 'Designing impactful and engaging digital campaigns that drive audience interaction and elevate brand presence.' },
      { title: 'Art Direction & Filmmaking:', desc: 'Leading creative processes for photoshoots, video production, and campaigns.' },
      { title: 'Photography:', desc: 'Capturing compelling, on-brand imagery that reflects identity, emotion, and intent.' },
      { title: 'Packaging Design:', desc: 'Creating visually striking and functional packaging that captures attention and enhances the user experience.' },
      { title: 'Storytelling:', desc: 'Developing narratives that resonate with audiences and amplify brand presence.' },
      { title: 'Editorial Design:', desc: 'Bringing brand narratives to life through layout, copy, and visual flow.' },
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
    footer: '© 2026 Ogeb Oumaima — Graphik Designerin & Kuratorin & Fotografin',
    backTop: 'Back to top',
    img: { concert: 'Arab Summit — Oriental Concert', dance: 'Dance Performance', ensemble: 'Ensemble Blue Light', collection: 'Clamant Body Collection', brand: 'Clamant Body Brand Identity', pyramid: 'Pyramid Formation', peach: 'Peach Blossom Scrub', guitarist: 'Guitarist Stage', peppermint: 'Peppermint Scrub', duet: 'Intimate Duet', solo: 'Solo Chair Choreography', pasDeDeuxe: 'Pas de Deux' },
    heroLabel: 'Graphic Designer, Curator & Photographer',
    heroQuote: 'Turning raw moments into visual narratives.',
    categories: ['Performance', 'Brand & Identity'],
    filterAll: 'All',
    roleTitle: 'Art Director',
    workIntro: 'Explore a selection of the projects',
    workIntroPara: 'Oumaima Ogeb is a Germany-based Art Director with over 4 years of experience. With experience across a wide range of design disciplines, she specializes in thoughtful, typography-driven branding, Social Media Content Creation, editorial design, and art direction. She has worked on brand identities, campaigns, films, websites and packaging.',
    brandsHeading: "Some brands & orgs I've worked with",
    brandsSub: 'Over the years, collaborations with a wide range of brands and organizations have demonstrated adaptability to diverse industries while maintaining a commitment to tailored creative narratives',
  },
  de: {
    nav: { home: 'Startseite', work: 'Werke', contact: 'Kontakt' },
    bio: 'Oumaima Ogeb ist eine in Deutschland ansässige Art Directorin mit über 4 Jahren Erfahrung. Mit Expertise in einem breiten Spektrum an Designdisziplinen spezialisiert sie sich auf durchdachtes, typografiegetriebenes Branding, Social-Media-Content-Creation, Editorial Design und Art Direction. Sie hat an Markenidentitäten, Kampagnen, Filmen, Websites und Verpackungen gearbeitet.',
    servicesHeading: 'Marken und Unternehmen dabei helfen, bedeutungsvolle Verbindungen mit ihren Zielgruppen zu schaffen durch:',
    services: [
      { title: 'Markenidentitätsentwicklung:', desc: 'Entwicklung umfassender visueller Identitäten, die die Kernwerte einer Marke widerspiegeln und bei der Zielgruppe Anklang finden.' },
      { title: 'Social-Media-Content-Creation:', desc: 'Gestaltung wirkungsvoller und ansprechender digitaler Kampagnen, die die Interaktion des Publikums fördern und die Markenpräsenz steigern.' },
      { title: 'Art Direction & Filmmaking:', desc: 'Leitung kreativer Prozesse für Fotoshootings, Videoproduktionen und Kampagnen.' },
      { title: 'Fotografie:', desc: 'Aufnahme überzeugender, markenkonformer Bilder, die Identität, Emotion und Absicht widerspiegeln.' },
      { title: 'Verpackungsdesign:', desc: 'Erstellung visuell ansprechender und funktionaler Verpackungen, die Aufmerksamkeit erregen und das Nutzererlebnis verbessern.' },
      { title: 'Storytelling:', desc: 'Entwicklung von Erzählungen, die beim Publikum Anklang finden und die Markenpräsenz stärken.' },
      { title: 'Editorial Design:', desc: 'Umsetzung von Markenerzählungen durch Layout, Text und visuellen Fluss.' },
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
    footer: '© 2026 Ogeb Oumaima — Graphik Designerin & Kuratorin & Fotografin',
    backTop: 'Nach oben',
    img: { concert: 'Arabischer Gipfel — Orientalisches Konzert', dance: 'Tanzaufführung', ensemble: 'Ensemble — Blaues Licht', collection: 'Clamant Body Kollektion', brand: 'Clamant Body — Markenidentität', pyramid: 'Pyramidenformation', peach: 'Pfirsichblüten-Scrub', guitarist: 'Gitarrist auf der Bühne', peppermint: 'Pfefferminz-Scrub', duet: 'Intimes Duett', solo: 'Solo — Stuhlchoreographie', pasDeDeuxe: 'Pas de Deux' },
    heroLabel: 'Graphik Designerin, Kuratorin & Fotografin',
    heroQuote: 'Rohe Momente in visuelle Erzählungen verwandeln.',
    categories: ['Aufführung', 'Marke & Identität'],
    filterAll: 'Alle',
    roleTitle: 'Art Directorin',
    workIntro: 'Entdecken Sie eine Auswahl der Projekte',
    workIntroPara: 'Oumaima Ogeb ist eine in Deutschland ansässige Art Directorin mit über 4 Jahren Erfahrung. Mit Expertise in einem breiten Spektrum an Designdisziplinen spezialisiert sie sich auf durchdachtes, typografiegetriebenes Branding, Social-Media-Content-Creation, Editorial Design und Art Direction. Sie hat an Markenidentitäten, Kampagnen, Filmen, Websites und Verpackungen gearbeitet.',
    brandsHeading: 'Einige Marken & Organisationen, mit denen ich gearbeitet habe',
    brandsSub: 'Im Laufe der Jahre haben Zusammenarbeiten mit einer Vielzahl von Marken und Organisationen die Anpassungsfähigkeit an verschiedene Branchen unter Beweis gestellt – stets mit dem Ziel, maßgeschneiderte kreative Erzählungen zu schaffen.',
  },
};

export default translations;
