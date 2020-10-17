import { nanoid } from 'nanoid';
import React from 'react';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'portada-identidad.png',
    title: 'Navein - Marca de Calzado Deportivo',
    subtitle: '2017',
    info:
      'Este fue mi proyecto de segundo año de Diseño. Creé y diseñé el manual de identidad para la marca de calzados deportivos "Navein". Realicé aplicaciones en papelería, packaging y merchandising',
    info2: 'Identidad de Marca',
    url: '',
    manual: '', // if no repo, the button will not show up
    repo: '',
    category: 'branding',
  },
  {
    id: nanoid(),
    img: 'portada-identidad.png',
    title: 'Cardales Festivo',
    subtitle: '2019',
    info:
      'Con este proyecto me recibí de la carrera de Diseño Gráfico. Consistía en  la identidad de un logo para turismo de un pueblo, donde el principal atractivo son fiesta que se realizan cada año con una importante convocatiria de gente de todos lados. Realicé aplicaciones en papelería, señaletica y merchandising',
    info2: 'Identidad de Marca',
    url: '',
    manual: '', // if no repo, the button will not show up
    repo: '',
    category: 'branding',
  },
  {
    id: nanoid(),
    img: 'portada-identidad.png',
    title: 'Goyaná - Hotel',
    subtitle: '2015',
    info:
      'Este fue mi proyecto final de primer año de Diseño. Realicé el diseño de un logo para un hotel de la provincia de Corrientes, Argentina. Cree el nombre basado en una investigación sobre este lugar y sus principales atractivos turisticos.',
    info2: 'Identidad de Marca',
    url: '',
    manual: '', // if no repo, the button will not show up
    repo: '',
    category: 'branding',
  },
  {
    id: nanoid(),
    img: 'portada-web.png',
    title: 'Juego de piedra, papel o tijera',
    subtitle: '2020',
    info: 'Este fue un desafio de desarrollo para hacer un juego de piedra papel o tijera online',
    info2: 'Desarrollo Web',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    category: 'web',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Redibujado de icono "En casa"',
    subtitle: '2020',
    info:
      'Realicé un redibujado de este icono partiendo de una imagen en baja calidad, evíada por un cliente',
    info2: 'Vectorizado',
    url: '',
    repo: '', // if no repo, the button will not show up
    category: 'vectorizados',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Social Media',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Editorial',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Tarjetría social',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Artesanal',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Fotografía',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
