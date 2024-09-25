import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent('Palestra Empresarial', 'Auditório', 1, new Date('2024-09-30T19:00'), 90, '', '', [
    {
      name: 'Murillo Wolf Cavalheiro',
    },
  ]),
  createEvent(
    'Arquitetura de Sistemas',
    'Auditório',
    1,
    new Date('2024-10-01T19:00'),
    90,
    'O Arquiteto de Sistemas\nArquitetura: Introdução e Definições\nArquitetura: High-level & Low-level\nAplicação monolítica vs Microserviços\nArquitetura Limpa, Hexagonal, Em camadas ou MVC.\nProjeto Orientado a Domínio (DDD)',
    'Conceitos de Arquitetura de Sistemas',
    [
      {
        name: 'Bruno Tacca',
      },
    ],
  ),
  createEvent(
    'Confiabilidade de sistemas no mercado de capitais: uma abordagem quantitativa com aprendizado de máquina (IA)',
    'Auditório',
    1,
    new Date('2024-10-01T20:45'),
    90,
    'Nesta palestra, a Vericode, empresa líder em engenharia de software com mais de 15 anos de experiência e cliente de grandes nomes do setor financeiro, como a B3, vai explorar como o aprendizado de máquina (IA) está transformando a confiabilidade dos sistemas. Com foco em abordagens quantitativas e técnicas avançadas de IA, discutiremos como prever falhas e melhorar a performance, oferecendo insights valiosos para estudantes de TI e computação que buscam entender as mudanças digitais no mercado financeiro.',
    'Mercado de Capitais, Confiabilidade de Sistemas e Inteligência Artificial',
    [
      {
        name: 'Marcelo Marchi',
      },
    ],
  ),
  createEvent(
    'DevOps: de Observabilidade à Confiabilidade',
    'Auditório',
    1,
    new Date('2024-10-02T19:00'),
    90,
    'Introdução sobre DevOps;\nApresentar o status do DevOps dentro da Unesp;\nIntrodução à observabilidade;\nCiclo DevOps: pipelines de CI/CD e melhorias contínuas;\nAutomatização: desde Infraestrutura legada até novos componentes;\nInfraestrutura em Kubernetes;\nApresentar resiliência, antifragilidade;\nIntrodução sobre SRE (Engenharia de Confiabilidade): práticas de alta disponibilidade,\nInfra/aplicações escaláveis; ',
    'DevOps e infraestrutura de sistemas',
    [
      {
        name: 'Aurélio Prado',
      },
    ],
  ),
  createEvent(
    'Mesa redonda',
    'Auditório',
    1,
    new Date('2024-10-03T19:00'),
    90,
    'Um bate-papo sobre carreira e tecnologia',
    'Mesa redonda: bate-papo sobre carreira e tecnologia',
    [
      {
        name: 'Aurélio Prado',
      },
      {
        name: 'Leandro Meira',
      },
      {
        name: 'Rafael Lima',
      },
      {
        name: 'Bruno Tacca',
      },
      {
        name: 'Danillo Roberto Pereira',
      },
    ],
  ),
];

export default ScheduleData;
