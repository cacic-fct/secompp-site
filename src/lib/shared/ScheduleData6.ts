import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Desenvolvimento de Jogos Multiplayer Web - parte 2',
    'Laboratório 6',
    0,
    new Date('2023-09-26T08:00'),
    240,
    'Criação da Interface de um Jogo de Forca com HTML, CSS e JS e Implementação do Modo Multiplayer.\nRequisitos: VSCode e NodeJS instalados',
    'Criação de um jogo com HTML, CSS, JS.',
    [
      { name: 'Laís Isabella Santos Sousa', email: 'lais.isabella@unesp.br' },
      { name: 'Sabrina Paião Oliveira', email: 'sabrina.paiao@unesp.br' },
      { name: 'Gabriel Ribeiro Ferreira', email: 'gabriel.r.ferreira@unesp.br' },
    ]
  ),

  createEvent(
    'Desenvolvimento de Jogos Multiplayer Web - parte 1',
    'Laboratório 6',
    0,
    new Date('2023-09-25T08:00'),
    240,
    'Criação da Interface de um Jogo de Forca com HTML, CSS e JS e Implementação do Modo Multiplayer.\nRequisitos: VSCode e NodeJS instalados',
    'Criação de um jogo com HTML, CSS, JS.',
    [
      { name: 'Laís Isabella Santos Sousa', email: 'lais.isabella@unesp.br' },
      { name: 'Sabrina Paião Oliveira', email: 'sabrina.paiao@unesp.br' },
      { name: 'Gabriel Ribeiro Ferreira', email: 'gabriel.r.ferreira@unesp.br' },
    ]
  ),

  createEvent(
    'Introdução a linguagem Rust - parte 1',
    'Laboratório 6',
    0,
    new Date('2023-09-27T08:00'),
    240,
    'Requisitos: Linguagem Rust instalada nas máquinas (provavelmente não será usada, mas é bom ter)',
    'Linguagem de programação',
    [
      { name: 'Daniel Henrique Serezane Pereira', email: 'daniel.serezane@unesp.br' },
      { name: 'Gustavo Becelli do Nacimento	', email: 'gustavo.becelli@unesp.br' },
    ]
  ),

  createEvent(
    'Introdução a linguagem Rust - parte 2',
    'Laboratório 6',
    0,
    new Date('2023-09-28T08:00'),
    240,
    'Requisitos: Linguagem Rust instalada nas máquinas (provavelmente não será usada, mas é bom ter)',
    'Linguagem de programação',
    [
      { name: 'Daniel Henrique Serezane Pereira', email: 'daniel.serezane@unesp.br' },
      { name: 'Gustavo Becelli do Nacimento	', email: 'gustavo.becelli@unesp.br' },
    ]
  ),

  createEvent(
    'Flappy Bird com IA - parte 1',
    'Laboratório 6',
    0,
    new Date('2023-09-25T14:00'),
    240,
    'Requisitos: VSCode e Python instalados',
    'Inteligência artificial',
    [
      { name: 'Lucas Gaspar Stumpf', email: 'lg.stumpf@unesp.br' },
      { name: 'Felipe de Freitas Clabone', email: 'felipe.clabone@unesp.br' },
    ]
  ),

  createEvent(
    'Flappy Bird com IA - parte 2',
    'Laboratório 6',
    0,
    new Date('2023-09-26T14:00'),
    240,
    'Requisitos: VSCode e Python instalados',
    'Inteligência artificial',
    [
      { name: 'Lucas Gaspar Stumpf', email: 'lg.stumpf@unesp.br' },
      { name: 'Felipe de Freitas Clabone', email: 'felipe.clabone@unesp.br' },
    ]
  ),

  createEvent(
    'Web simplificada com PHP Laravel - parte 1',
    'Laboratório 6',
    0,
    new Date('2023-09-27T14:00'),
    240,
    'Requisitos: computador, conexão à internet e docker instalado',
    'Desenvolvimento backend',
    [
      { name: 'Rafael Nogueira Correia', email: 'rafael.n.correia@unesp.br' },
      { name: 'João Vitor Couto Oliveira', email: 'joao.couto@unesp.br' },
    ]
  ),

  createEvent(
    'Web simplificada com PHP Laravel - parte 2',
    'Laboratório 6',
    0,
    new Date('2023-09-28T14:00'),
    240,
    'Requisitos: computador, conexão à internet e docker instalado',
    'Desenvolvimento backend',
    [
      { name: 'Rafael Nogueira Correia', email: 'rafael.n.correia@unesp.br' },
      { name: 'João Vitor Couto Oliveira', email: 'joao.couto@unesp.br' },
    ]
  ),

  createEvent(
    'Docker - parte 2',
    'Laboratório 6',
    0,
    new Date('2023-09-29T14:00'),
    240,
    'Requisitos: um computador ou notebook com Docker instalado (Docker em qualquer plataforma).',
    'Ambiente para desenvolvimento - Teoria e Prática',
    [
      { name: 'Guilherme Eduardo Silva Batalhoti', email: 'guilherme.batalhoti@unesp.br' },
      { name: 'Gabriel Cecon Carlsen', email: 'cecon.carlsen@unesp.br' },
    ]
  ),
];

export default ScheduleData;
