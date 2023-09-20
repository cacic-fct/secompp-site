import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [


createEvent('Docker',
  'Laboratório de Ensino de Matemática (sala 24)',
  0,
  new Date('2023-09-28T14:00'),
  240,
  'Requisitos: um computador ou notebook com Docker instalado (Docker em qualquer plataforma).',
  'Ambiente para desenvolvimento - Teoria e Prática',
  [{name:'Guilherme Eduardo Silva Batalhoti',email:'guilherme.batalhoti@unesp.br'},
  {name:'Gabriel Cecon Carlsen',email:'cecon.carlsen@unesp.br'}]),
];
	





export default ScheduleData;
