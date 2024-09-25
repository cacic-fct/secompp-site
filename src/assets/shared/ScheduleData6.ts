import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Introdução ao LaTex - Parte 1',
    'Laboratório 6',
    0,
    new Date('2024-09-30T08:00'),
    240,
    'Introdução à ferramenta LaTeX para produção de trabalhos e artigos científicos para discentes da ciência da computação.\n\nPré-requisitos: Recomenda-se ter concluído a disciplina Metodologia cientifica.\n\nMateriais necessários: Navegador de internet (Firefox, Chrome ou qualquer outro).',
    'LaTex para produção de trabalhos científicos',
    [
      {
        name: 'Willian Yoshio Murayama',
        email: 'willian.murayama@unesp.br',
      },
    ],
  ),
  createEvent(
    'Prototipação de Interfaces com Figma - Parte 1',
    'Laboratório 6',
    0,
    new Date('2024-09-30T14:00'),
    240,
    'Explorar o processo de prototipação de Interfaces usando a ferramenta de design Figma. O objetivo é capacitar os participantes a transformar conceitos e ideias em protótipos interativos e funcionais, usando os conceitos de Design UX e UI. Mostrar como utilizar o Figma de forma profissional e com melhor aproveitamento.\n\nPré-requisitos: Nenhum.\n\nMateriais necessários: Nenhum.',
    'Design UX/UI, Prototipação e Figma',
    [
      {
        name: 'Sabrina Paião Oliveira',
        email: 'sabrina.paiao@unesp.br',
      },
      {
        name: 'Laís Isabella Santos Sousa',
        email: 'lais.isabella@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução ao LaTex - Parte 2',
    'Laboratório 6',
    0,
    new Date('2024-10-01T08:00'),
    240,
    'Introdução à ferramenta LaTeX para produção de trabalhos e artigos científicos para discentes da ciência da computação.\n\nPré-requisitos: Recomenda-se ter concluído a disciplina Metodologia cientifica.\n\nMateriais necessários: Navegador de internet (Firefox, Chrome ou qualquer outro).',
    'LaTex para produção de trabalhos científicos',
    [
      {
        name: 'Willian Yoshio Murayama',
        email: 'willian.murayama@unesp.br',
      },
    ],
  ),
  createEvent(
    'Prototipação de Interfaces com Figma - Parte 2',
    'Laboratório 6',
    0,
    new Date('2024-10-01T14:00'),
    240,
    'Explorar o processo de prototipação de Interfaces usando a ferramenta de design Figma. O objetivo é capacitar os participantes a transformar conceitos e ideias em protótipos interativos e funcionais, usando os conceitos de Design UX e UI. Mostrar como utilizar o Figma de forma profissional e com melhor aproveitamento.\n\nPré-requisitos: Nenhum.\n\nMateriais necessários: Nenhum.',
    'Design UX/UI, Prototipação e Figma',
    [
      {
        name: 'Sabrina Paião Oliveira',
        email: 'sabrina.paiao@unesp.br',
      },
      {
        name: 'Laís Isabella Santos Sousa',
        email: 'lais.isabella@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução ao Google Cloud e Google Cloud Skills - Parte 1',
    'Laboratório 6',
    0,
    new Date('2024-10-02T14:00'),
    240,
    'Explicar conceitos básicos de cloud, apresentar a plataforma da google gcp, criar e conectar em uma maquina virtual basica e apresentar a plataforma de estudos google cloud skills boost.\n\nPré-requisitos: Conceitos básicos de requisições HTTP e camadas de rede e firewall.\n\nMateriais necessários: Conta Google (Gmail).',
    'Google Cloud e Google Cloud Skills',
    [
      {
        name: 'Gustavo Quilante Azevedo',
        email: 'gustavo.azevedo@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução a Impressão Tridimensional - Parte 2',
    'Laboratório 6',
    0,
    new Date('2024-10-03T14:00'),
    240,
    'Introdução a modelagem e impressão tridimensional em impressoras 3D.\n\nPré-requisitos: Nenhum.\n\nMateriais necessários: Ultimaker Cura.',
    'Modelagem e Impressão 3D',
    [
      {
        name: 'Willian Yoshio Murayama',
        email: 'willian.murayama@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução ao Google Cloud e Google Cloud Skills - Parte 2',
    'Laboratório 6',
    0,
    new Date('2024-10-04T14:00'),
    240,
    'Explicar conceitos básicos de cloud, apresentar a plataforma da google gcp, criar e conectar em uma maquina virtual basica e apresentar a plataforma de estudos google cloud skills boost.\n\nPré-requisitos: Conceitos básicos de requisições HTTP e camadas de rede e firewall.\n\nMateriais necessários: Conta Google (Gmail).',
    'Google Cloud e Google Cloud Skills',
    [
      {
        name: 'Gustavo Quilante Azevedo',
        email: 'gustavo.azevedo@unesp.br',
      },
    ],
  ),
];

export default ScheduleData;
