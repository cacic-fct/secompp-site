import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [createEvent('minicurso teste',
'Laboratório 6',
1,
new Date('2023-08-22T08:00'),
60,
'Descrição completa',
'Descrição curta',
[{name:'nome teste',email:'email@email.com.br'}])];

export default ScheduleData;
