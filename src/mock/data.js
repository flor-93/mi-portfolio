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
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Social Media',
  //   subtitle: '2020',
  //   info: 'Diseñé post para redes sociales, algunos independientes otros que se intedran al diseño de feed',
  //   info2: 'Social Media',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'socialMedia',
  //   hideButton: true,
  // },
  {
    id: nanoid(),
    img: 'galery-mom.png',
    title: 'Galería con animación',
    subtitle: '2020',
    info: 'Desarrollé una galería con fotos familiares en un sitio web como regalo de cumpleaños',
    info2: 'Desarrollo Web',
    url: 'https://regalo-mama-2020.vercel.app/',
    repo: 'https://github.com/flor-93/regalo-mama-2020', // if no repo, the button will not show up
    category: 'web',
    hideButton: false,
  },
  {
    id: nanoid(),
    img: 'rock-paper-and-scissors.png',
    title: 'Juego de piedra, papel o tijera',
    subtitle: '2020',
    info: 'Este fue un desafio de desarrollo para hacer un juego de piedra papel o tijera online',
    info2: 'Desarrollo Web',
    url: 'https://rock-paper-and-scissors.now.sh/',
    repo: 'https://github.com/flor-93/rock-paper-and-scissors', // if no repo, the button will not show up
    category: 'web',
    hideButton: false,
  },
  {
    id: nanoid(),
    img: 'tabla-medicion-1.png',
    title: 'Redibujado de Tabla de medición',
    subtitle: '2020',
    info:
      'A pedido de un cliente redibujé una tabla de medición para niños a escala real, con el fin de cortar el vínilo',
    info2: 'vectorizado',
    // url: '',
    // repo: '', // if no repo, the button will not show up
    category: 'vectorizado',
    hideButton: true,
  },
  {
    id: nanoid(),
    img: 'icono-en-casa-1.png',
    title: 'Redibujado de icono "En casa"',
    subtitle: '2020',
    info:
      'Realicé un redibujado de este icono partiendo de una imagen en baja calidad, evíada por un cliente',
    info2: 'Vectorizado',
    // url: '',
    // repo: '', // if no repo, the button will not show up
    category: 'vectorizado',
    hideButton: true,
  },
  {
    id: nanoid(),
    img: 'portada-cardales-festivo-white.png',
    title: 'Cardales Festivo',
    subtitle: '2019',
    info:
      'Con este proyecto me recibí de la carrera de Diseño Gráfico. Consistía en  la identidad de un logo para turismo de un pueblo, donde el principal atractivo son fiesta que se realizan cada año con una importante convocatiria de gente de todos lados. Realicé aplicaciones en papelería, señaletica y merchandising',
    info2: 'Identidad de Marca',
    url: '',
    manual: '', // if no repo, the button will not show up
    repo: '',
    category: 'branding',
    hideButton: true,
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Revista Cardales Festivo',
  //   subtitle: '2019',
  //   info: 'Esto es parte del trabajo final de tercer año de identidad de marca. Es una revista de noticias locales del pueblo de Los Cardales.',
  //   info2: 'Editorial',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'editorial',
  //   hideButton: true,
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Bolsa de Tela estampada',
  //   subtitle: '2019',
  //   info: 'Apliqué diseño a una bolsa de tela arsanal y luego realicé el estampado en serigrafía',
  //   info2: 'Serigrafía',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'imprenta',
  //   hideButton: true,
  // },
  {
    id: nanoid(),
    img: 'portada-navein-white.png',
    title: 'Navein - Calzado Deportivo',
    subtitle: '2017',
    info:
      'Este fue mi proyecto de segundo año de Diseño. Creé y diseñé el manual de identidad para la marca de calzados deportivos "Navein". Realicé aplicaciones en papelería, packaging y merchandising',
    info2: 'Identidad de Marca',
    url: '',
    manual: '', // if no repo, the button will not show up
    repo: '',
    category: 'branding',
    hideButton: true,
  },
  {
    id: nanoid(),
    img: 'foto-vino.png',
    title: 'Etiqueta de vino',
    subtitle: '2016',
    info:
      'Trabajo de fotografía en tercer año de Diseño. Realizamos diseño de una etiqueta de vino y lugo hicimos fotografía de producto.',
    info2: 'Identidad de Marca',
    url: '',
    manual: '', // if no repo, the button will not show up
    repo: '',
    category: 'branding',
    hideButton: true,
  },
  {
    id: nanoid(),
    img: 'goyana.png',
    title: 'Goyaná - Hotel',
    subtitle: '2015',
    info:
      'Este fue mi proyecto final de primer año de Diseño. Realicé el diseño de un logo para un hotel de la provincia de Corrientes, Argentina. Cree el nombre basado en una investigación sobre este lugar y sus principales atractivos turisticos.',
    info2: 'Identidad de Marca',
    url: '',
    manual: '', // if no repo, the button will not show up
    repo: '',
    category: 'branding',
    hideButton: true,
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Revista Fox',
  //   subtitle: '2015',
  //   info: 'Diseño para revista de canal Fox que realicé en un trabajo de la materia Gráfica Asistida en segundo año de Diseño',
  //   info2: 'Editorial',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'editorial',
  //   hideButton: true,
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Casamiento',
  //   subtitle: '2015-2019',
  //   info: 'Diseños de tarjetas de casamiento',
  //   info2: 'Tarjetría social',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'imprenta',
  //   hideButton: true,
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Bautismo, Comunión, Confirmación',
  //   subtitle: '2015-2019',
  //   info: '',
  //   info2: 'Tarjetría social',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'imprenta',
  //   hideButton: true,
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Cumpleaños y otros',
  //   subtitle: '2015-2019',
  //   info: '',
  //   info2: 'Tarjetría social',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'imprenta',
  //   hideButton: true,
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Anillado',
  //   subtitle: '2015-2019',
  //   info: '',
  //   info2: 'Encuadernación Artesanal',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'imprenta',
  //   hideButton: true,
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Cosido Copta',
  //   subtitle: '2015-2019',
  //   info: '',
  //   info2: 'Encuadernación Artesanal',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'imprenta',
  //   hideButton: true,
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Cosido Estructura Cruzada',
  //   subtitle: '2015-2019',
  //   info: '',
  //   info2: 'Encuadernación Artesanal',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'imprenta',
  //   hideButton: true,
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Cosido Belga',
  //   subtitle: '2015-2019',
  //   info: '',
  //   info2: 'Encuadernación Artesanal',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'imprenta',
  //   hideButton: true,
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Cosido Japonés',
  //   subtitle: '2015-2019',
  //   info: '',
  //   info2: 'Encuadernación Artesanal',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  //   category: 'imprenta',
  //   hideButton: true,
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'flor.ferreyragre@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/florencia-ferreyra-gr%C3%A9-8a7a3a176/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/flor-93',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/flor.gre/',
    },
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
