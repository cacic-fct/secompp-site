import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent('Computação em nuvem', 'Auditório', 1, new Date('2023-09-25T19:00'), 150, 'Computação em nuvem', '', [
    { name: 'Fábio João da Silva' },
  ]),

  createEvent(
    'Introdução à containers',
    'Auditório',
    1,
    new Date('2023-09-26T19:00'),
    150,
    'Introdução à containers',
    '',
    [{ name: 'João Paulo da Cunha Freire' }]
  ),

  createEvent(
    'Carreira em Ciência de dados',
    'Auditório',
    1,
    new Date('2023-09-27T19:00'),
    150,
    'Carreira em Ciência de dados',
    '',
    [{ name: 'Mariane Barros Neiva' }]
  ),

  createEvent(
    'Mesa-redonda: carreiras em computação',
    'Auditório',
    1,
    new Date('2023-09-28T19:00'),
    150,
    'Mesa-redonda',
    'Carreiras e trajetórias',
    [{ name: 'Caio Takeshi Onishi' }, { name: 'Giulia Campos de Oliveira' }, { name: 'Leandro Ungari Cayres' }]
  ),
];

export default ScheduleData;
