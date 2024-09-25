import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Microfrontends - Aplicações com React',
    'Laboratório 10B',
    0,
    new Date('2024-09-30T08:00'),
    240,
    'O que é uma arquitetura de microfrontend; casos de uso; aplicações e exemplificação com o uso de uma ferramenta de auxilio em criação e migração de projetos para a arquitetura.\n\nPré-requisitos: Conceitos básicos de HTML, CSS e Javascript.\n\nMateriais necessários: Node.js, NPM, e qualquer editor de texto.',
    'Arquitetura de Microfrontend e Apliações com React',
    [
      {
        name: 'João Pedro Silva Baptista',
        email: 'joao.baptista@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução ao desenvolvimento mobile com Flutter',
    'Laboratório 10B',
    0,
    new Date('2024-09-30T14:00'),
    240,
    'Flutter é um framework desenvolvido pelo Google com o objetivo de facilitar a construção de aplicativos multiplataformas. O objetivo do curso é ensinar os conceitos básicos do Flutter bem como as bases do dart, linguagem utilizada pelo Flutter.\n\nPré-requisitos: conceitos de lógica de programação\n\nMateriais necessários:\nSDK do flutter;\nLinguagem Dart;\nAndroid Studio;\nSDK do Android;\nVSCode.',
    'Desenvolvimento Mobile com Flutter',
    [
      {
        name: 'Karolyne Domiciano Marques',
        email: 'karolyne.d.marques@unesp.br',
      },
      {
        name: 'Gabriela Maria Sinastre',
        email: 'gabriela.sinastre@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução ao Git: Dominando o Controle de Versão',
    'Laboratório 10B',
    0,
    new Date('2024-10-01T08:00'),
    240,
    'Aprenda os conceitos essenciais do Git, incluindo instalação, configuração, comandos básicos, gerenciamento de branches, e colaboração em projetos. Ideal para iniciantes e profissionais que desejam melhorar suas habilidades em controle de versão.\n\nPré-requisitos: Nenhum.\n\nMateriais necessários: Nenhum.',
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
    'Desenvolvimento de uma aplicação web com Django - Parte 1',
    'Laboratório 10B',
    0,
    new Date('2024-10-01T14:00'),
    240,
    'Nesse minicurso desenvolveremos uma aplicação web em Python utilizando do framework Django focada no organização para estudantes, utilizando de elementos de automação.\n\nPré-requisitos: Conhecimentos de Python em nível iniciante\n\nMateriais necessários: Python 3.11 e Docker.',
    'Desenvolvimento Web com Django',
    [
      {
        name: 'Leonardo dos Santos Coradeli',
        email: 'leonardo.coradeli@unesp.br',
      },
      {
        name: 'Leonardo Cenedes Pereira',
        email: 'leonardo.cenedes@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução a Impressão Tridimensional - Parte 1',
    'Laboratório 10B',
    0,
    new Date('2024-10-02T08:00'),
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
    'Desenvolvimento de uma aplicação web com Django - Parte 2',
    'Laboratório 10B',
    0,
    new Date('2024-10-02T14:00'),
    240,
    'Nesse minicurso desenvolveremos uma aplicação web em Python utilizando do framework Django focada no organização para estudantes, utilizando de elementos de automação.\n\nPré-requisitos: Conhecimentos de Python em nível iniciante\n\nMateriais necessários: Python 3.11 e Docker.',
    'Desenvolvimento Web com Django',
    [
      {
        name: 'Leonardo dos Santos Coradeli',
        email: 'leonardo.coradeli@unesp.br',
      },
      {
        name: 'Leonardo Cenedes Pereira',
        email: 'leonardo.cenedes@unesp.br',
      },
    ],
  ),
  createEvent(
    'Hardware contemporâneo para leigos',
    'Laboratório 10B',
    0,
    new Date('2024-10-03T08:00'),
    240,
    'Através de uma abordagem parte teórica, parte demonstrativa, o minicurso pretende ensinar sobre os principais componentes e tecnologias de hardware contemporâneos, indo desde o funcionamento básico de alguns componentes e padrões até a escolha de componentes/máquinas. Também pretendo ensinar o básico sobre periféricos, como teclados, mouses, mousepads, fones de ouvido e monitores.\n\nPré-requisitos: Nenhum.\n\nMateriais necessários: Nenhum.',
    'Hardware e Periféricos',
    [
      {
        name: 'Rodrigo Isao Goto',
        email: 'r.goto@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução ao Docker',
    'Laboratório 10B',
    0,
    new Date('2024-10-03T14:00'),
    240,
    'O minicurso se propõe a contextualizar e introduzir os participantes na tecnologia Docker através de uma introdução teórica e atividades práticas realizadas afim de torná-los capazes de executar uma aplicação em um contâiner Docker, nativamente no Linux ou utilizando WSL no Windows ou Docker Desktop.\n\nPré-Requisitos: Nenhum.\n\nMateriais necessários: Docker Engine (WSL e Linux) ou Docker Desktop (Windows).',
    'Docker e Contêineres',
    [
      {
        name: 'Ígor José Rodrigues',
        email: 'igor.jose@unesp.br',
      },
      {
        name: 'Igor Mendes Domingues Miras',
        email: 'im.miras@unesp.br',
      },
      {
        name: 'Gabriel Menezes Tiburcio',
        email: 'gabriel.m.tiburcio@unesp.br',
      },
    ],
  ),
  createEvent(
    'Versionamento de código com Git e GitHub',
    'Laboratório 10B',
    0,
    new Date('2024-10-04T08:00'),
    240,
    'Ensinar os alunos a versionarem seus códigos utilizando o Git junto com o uso boas práticas para um bom controle de versão. Também será feita uma introdução a plataforma do GitHub: como criar um perfil bom, fazer alterações, convidar colaboradores para participar do projeto, recomendações de outros repositórios e afins.\n\nPré-Requisitos: Nenhum.\n\nMateriais necessários: Git Bash. Recomenda-se também que tenha uma conta no GitHub.',
    'Git e GitHub',
    [
      {
        name: 'Matheus de Almeida Virissimo',
        email: 'matheus.virissimo@unesp.br',
      },
    ],
  ),
  createEvent(
    'Introdução ao Linux',
    'Laboratório 10B',
    0,
    new Date('2024-10-04T14:00'),
    240,
    'Faremos uma introdução ao OS Linux, com sua história, e principais distribuições. Mostraremos como é a organização das pastas no sistema, e ensinaremos sobre os processos no Linux, explicando como ele gerencia e executa os processos. E por fim explicaremos alguns comandos básicos do terminal, e alguns aplicativos como editores de texto, gerenciadores de pacote e ferramentas de rede.\n\nPré-Requisitos: Nenhum.\n\nMateriais necessários: Máquina operando com uma distribuição Linux baseada no Debian (Pode ser uma máquina virtual ou WSL).',
    'Sistema Operacionais Linux',
    [
      {
        name: 'Vítor Moreira Rodrigues',
        email: 'vitor.m.rodrigues@unesp.br',
      },
      {
        name: 'Kauan dos Santos Loche',
        email: 'kauan.loche@unesp.br',
      },
      {
        name: 'José Henrique Ioki Yamaoki',
        email: 'jose.yamaoki@unesp.br',
      },
      {
        name: 'João Gabriel de Morais Bezerra',
        email: 'j.bezerra@unesp.br',
      },
    ],
  ),
];

export default ScheduleData;
