import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Python para Análise de Dados - Parte 1',
    'Laboratório 10',
    0,
    new Date('2024-09-30T08:00'),
    120,
    'Curso introdutório utilizando a linguagem Python para análise de dados, apresentando conceitos relacionados a linguagem Python e as bibliotecas Pandas, NumPy e Matplotlib, além de alguns exercícios de fixação. \n\nPré-requisitos: nenhum. \n\nMateriais necessários: Última versão do Python e a IDE VsCode.',
    'Introdução a linguagem Python para análise de dados',
    [
      {
        name: 'Julio Oliveira Santana',
        email: 'julio.o.santana@unesp.br',
      },
      {
        name: 'Bruno Augusto Furquim',
        email: 'bruno.furquim@unesp.br',
      },
    ],
  ),
  createEvent(
    'Uma introdução a Elixir',
    'Laboratório 10',
    0,
    new Date('2024-09-30T14:00'),
    120,
    'Apresentar conceitos relacionados a programação funcional, imutabilidade, currying, e a linguagem Elixir: sintaxe básica e boas práticas \n\nPré-requisitos: Noções básicas de programação e estruturas de dados. \n\nMaterial necessário: Nenhum, porém recomenda-se a instalação do Elixir para utilizar do IEx.',
    'Programação funcional e Elixir',
    [
      {
        name: 'Paulo Sergio Campos de Lima',
        email: 'paulo.sc.lima@unesp.br',
      },
    ],
  ),
  createEvent(
    'Python para Análise de Dados - Parte 2',
    'Laboratório 10',
    0,
    new Date('2024-10-01T08:00'),
    120,
    'Curso introdutório utilizando a linguagem Python para análise de dados, apresentando conceitos relacionados a linguagem Python e as bibliotecas Pandas, NumPy e Matplotlib, além de alguns exercícios de fixação. \n\nPré-requisitos: nenhum. \n\nMateriais necessários: Última versão do Python e a IDE VsCode.',
    'Introdução a linguagem Python para análise de dados',
    [
      {
        name: 'Julio Oliveira Santana',
        email: 'julio.o.santana@unesp.br',
      },
      {
        name: 'Bruno Augusto Furquim',
        email: 'bruno.furquim@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução à linguagem Lua',
    'Laboratório 10',
    0,
    new Date('2024-10-02T14:00'),
    120,
    'Apresentar superficialmente a linguagem, permitindo o participante desenvolver programas e protótipos simples em Lua: manipulação de arquivos e cadeia de caracteres, estrutura de dados, artimética e outras funções básicas. \n\nPré-requisitos: Noções básicas de uma linguagem de programação interpretada. \n\nMateriais necessários: Arquivos binários para executar código Lua (Lua Binaries) e o editor de código fonte Visual Studio Code',
    'Linguagem Lua - conceitos básicos',
    [
      {
        name: 'Vinícius Andrei Parra Castilho',
        email: 'vinicius.castilho@unesp.br',
      },
      {
        name: 'Gabriel Henrique Franco Vieira',
        email: 'gabriel.f.vieira@unesp.br',
      },
    ],
  ),
  createEvent('HTML', 'Laboratório 10', 0, new Date('2024-10-03T08:00'), 120, '', '', [
    {
      name: 'Luiz Henrique Serafim da Silva',
      email: 'henrique.serafim@unesp.br',
    },
  ]),
  createEvent(
    'Desbravando o Next.js: O Futuro do Desenvolvimento Web - Parte 1',
    'Laboratório 10',
    0,
    new Date('2024-10-03T14:00'),
    120,
    'Venha aprender Next.js, uma das tecnologias mais avançadas para desenvolvimento web! Neste curso de 8 horas (dividido em dois dias), você terá uma introdução completa ao Next.js, suas vantagens e como utilizá-lo para criar aplicações modernas, rápidas e otimizadas. \n\n Pré-requisitos: Conhecimentos básicos de HTML, CSS e JavaScript \n\n Materiais necessários: Node.js e VsCode.',
    'Desenvolvimento Web com Next.js',
    [
      {
        name: 'Luiz Henrique Serafim da Silva',
        email: 'henrique.serafim@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução ao Git: Dominando o Controle de Versão',
    'Laboratório 10',
    0,
    new Date('2024-10-04T08:00'),
    120,
    'Aprenda os conceitos essenciais do Git, incluindo instalação, configuração, comandos básicos, gerenciamento de branches, e colaboração em projetos. Ideal para iniciantes e profissionais que desejam melhorar suas habilidades em controle de versão. \n\nPré-requisitos: Nenhum. \n\nMateriais necessários: Nenhum.',
    'Git e Controle de Versão',
    [
      {
        name: 'Alexandre Folkl',
        email: 'a.folkl@unesp.br',
      },
      {
        name: 'Leticia Yuri Takaki Kavakita',
        email: 'leticia.takaki@unesp.br',
      },
    ],
  ),
  createEvent(
    'Desbravando o Next.js: O Futuro do Desenvolvimento Web - Parte 2',
    'Laboratório 10',
    0,
    new Date('2024-10-04T14:00'),
    120,
    'Venha aprender Next.js, uma das tecnologias mais avançadas para desenvolvimento web! Neste curso de 8 horas (dividido em dois dias), você terá uma introdução completa ao Next.js, suas vantagens e como utilizá-lo para criar aplicações modernas, rápidas e otimizadas. \n\n Pré-requisitos: Conhecimentos básicos de HTML, CSS e JavaScript \n\n Materiais necessários: Node.js e VsCode.',
    'Desenvolvimento Web com Next.js',
    [
      {
        name: 'Luiz Henrique Serafim',
        email: 'henrique.serafim@unesp.br',
      },
      {
        name: 'Rafael Correia',
        email: 'rafael.n.correia@unesp.br',
      },
      {
        name: 'Guilherme Goes',
        email: 'guilherme.goes@unesp.br',
      },
    ],
  ),
];

export default ScheduleData;
