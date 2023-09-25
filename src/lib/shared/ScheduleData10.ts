import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Introdução à Linguagem Python para Análise de Dados - parte 1',
    'Laboratório 10',
    0,
    new Date('2023-09-27T08:00'),
    240,
    'Requisitos: conexão à internet, pois o material será disponibilizado e apresentado em formato de notebooks no Google Colab, sem a necessidade de instalação.',
    'Linguagem de programação',
    [
      { name: 'Lucas Vinícius Voltera', email: 'lucas.voltera@unesp.br' },
      { name: 'Julio Oliveira Santana', email: 'julio.o.santana@unesp.br' },
    ]
  ),

  createEvent(
    'Introdução à Linguagem Python para Análise de Dados - parte 2',
    'Laboratório 10',
    0,
    new Date('2023-09-28T08:00'),
    240,
    'Requisitos: conexão à internet, pois o material será disponibilizado e apresentado em formato de notebooks no Google Colab, sem a necessidade de instalação.',
    'Linguagem de programação',
    [
      { name: 'Lucas Vinícius Voltera', email: 'lucas.voltera@unesp.br' },
      { name: 'Julio Oliveira Santana', email: 'julio.o.santana@unesp.br' },
    ]
  ),

  createEvent(
    'Introdução à modelagem e impressão tridimensional',
    'Laboratório 10',
    0,
    new Date('2023-09-25T08:00'),
    240,
    'Requisitos: Computadores com o software Ultimaker Cura instalado e criação de uma conta no Tinkercad',
    'Modelagem 3D',
    [{ name: 'Willian Yoshio Murayama', email: 'willian.murayama@unesp.br' }]
  ),

  createEvent(
    'Sistema de Controle de Versão com uso de Git e GitHub',
    'Laboratório 10',
    0,
    new Date('2023-09-25T14:00'),
    240,
    'Requisitos: softwares (Visual Studio Code, CodeBlocks, Git); Indicar aos participantes criarem previamente uma conta no GitHub.',
    'Versionamento de projetos',
    [{ name: 'Bruno Santos de Lima', email: 'bruno.s.lima@unesp.br' }]
  ),

  createEvent(
    'Introdução ao Svelte',
    'Laboratório 10',
    0,
    new Date('2023-09-26T14:00'),
    240,
    'Requisitos: NodeJS, será utilizado o SvelteKit para a geração do projeto.',
    'Uma nova forma de escrever para web',
    [
      { name: 'Guilherme Cesar Tomiasi', email: 'gc.tomiasi@unesp.br' },
      { name: 'Carlos Eduardo Fernandes de Santana', email: 'carlos.ef.santana@unesp.br' },
    ]
  ),

  createEvent(
    'Introdução à React.js',
    'Laboratório 10',
    0,
    new Date('2023-09-27T14:00'),
    240,
    'Requisitos: computadores com vsCode e com npm e node.js funcionando.',
    'Framework front-end',
    [
      { name: 'Karolyne Domiciano Marques', email: 'karolyne.d.marques@unesp.br' },
      { name: 'Vinícius Polachini Mayer Freitas de Jesus', email: 'vinicius.polachini@unesp.br' },
    ]
  ),

  createEvent(
    'Do zero ao Backend, com Javascript - parte 1',
    'Laboratório 10',
    0,
    new Date('2023-09-28T14:00'),
    240,
    'Requisitos: computador, Node.js, Mysql e Insomnia ou Postman instalados.',
    'Desenvolvimento backend',
    [
      { name: 'Alexandre Folkl', email: 'a.folkl@unesp.br' },
      { name: 'Alvaro Massanori Sato', email: 'alvaro.sato@unesp.br' },
      { name: 'Guilherme de Aguiar Pacianotto', email: 'g.pacianotto@unesp.br' },
    ]
  ),

  createEvent(
    'Do zero ao Backend, com Javascript',
    'Laboratório 10',
    0,
    new Date('2023-09-29T14:00'),
    240,
    'Requisitos: computador, Node.js, Mysql e Insomnia ou Postman instalados.',
    'Desenvolvimento backend',
    [
      { name: 'Alexandre Folkl', email: 'a.folkl@unesp.br' },
      { name: 'Alvaro Massanori Sato', email: 'alvaro.sato@unesp.br' },
      { name: 'Guilherme de Aguiar Pacianotto', email: 'g.pacianotto@unesp.br' },
    ]
  ),

  createEvent(
    'Git Simplificado - parte 2',
    'Laboratório 6',
    0,
    new Date('2023-09-29T08:00'),
    240,
    'Requisitos: Git, editor de texto ou IDE',
    'Introdução ao Controle de Versão',
    [
      { name: 'Alexandre Folkl', email: 'a.folkl@unesp.br' },
      { name: 'Alvaro Masanori Sato', email: 'alvaro.sato@unesp.br' },
    ]
  ),
];

export default ScheduleData;
