import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Microfrontends - Aplicações com React - Parte 1',
    'Laboratório Didático de Computação 2',
    0,
    new Date('2024-09-30T08:00'),
    120,
    'O que é uma arquitetura de microfrontend; casos de uso; aplicações e exemplificação com o uso de uma ferramenta de auxilio em criação e migração de projetos para a arquitetura. \n\nPré-requisitos: Conceitos básicos de HTML, CSS e Javascript. \n\nMateriais necessários: Node.js, NPM, e qualquer editor de texto.',
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
    'Laboratório Didático de Computação 2',
    0,
    new Date('2024-09-30T14:00'),
    120,
    'Flutter é um framework desenvolvido pelo Google com o objetivo de facilitar a construção de aplicativos multiplataformas. O objetivo do curso é ensinar os conceitos básicos do Flutter bem como as bases do dart, linguagem utilizada pelo Flutter. \n\nPré-requisitos: conceitos de lógica de programação \n\nMateriais necessários: \nSDK do flutter; \nLinguagem Dart; \nAndroid Studio; \nSDK do Android; \nVsCode.',
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
    'Desenvolvimento de uma aplicação web com Django - Parte 1',
    'Laboratório Didático de Computação 2',
    0,
    new Date('2024-10-01T14:00'),
    120,
    'Nesse minicurso desenvolveremos uma aplicação web em Python utilizando do framework Django focada no organização para estudantes, utilizando de elementos de automação. \n\nPré-requisitos: Conhecimentos de Python em nível iniciante \n\nMateriais necessários: Python 3.11 e Docker.',
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
    'Laboratório 6',
    0,
    new Date('2024-10-02T08:00'),
    120,
    'Introdução a modelagem e impressão tridimensional em impressoras 3D. \n\n Pré-requisitos: Nenhum. \n\nMateriais necessários: Ultimaker Cura.',
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
    'Laboratório Didático de Computação 2',
    0,
    new Date('2024-10-02T14:00'),
    120,
    'Nesse minicurso desenvolveremos uma aplicação web em Python utilizando do framework Django focada no organização para estudantes, utilizando de elementos de automação. \n\nPré-requisitos: Conhecimentos de Python em nível iniciante \n\nMateriais necessários: Python 3.11 e Docker.',
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
    'Introdução ao Docker',
    'Laboratório Didático de Computação 2',
    0,
    new Date('2024-10-03T14:00'),
    120,
    'O minicurso se propõe a contextualizar e introduzir os participantes na tecnologia Docker através de uma introdução teórica e atividades práticas realizadas afim de torná-los capazes de executar uma aplicação em um contâiner Docker, nativamente no Linux ou utilizando WSL no Windows ou Docker Desktop. \n\n Pré-Requisitos: Nenhum. \n\n Materiais necessários: Docker Engine (WSL e Linux) ou Docker Desktop (Windows).',
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
    'Laboratório Didático de Computação 2',
    0,
    new Date('2024-10-04T08:00'),
    120,
    'Ensinar os alunos a versionarem seus códigos utilizando o Git junto com o uso boas práticas para um bom controle de versão. Também será feita uma introdução a plataforma do GitHub: como criar um perfil bom, fazer alterações, convidar colaboradores para participar do projeto, recomendações de outros repositórios e afins. \n\n Pré-Requisitos: Nenhum. \n\n Materiais necessários: Git Bash. Recomenda-se também que tenha uma conta no GitHub.',
    'Git e GitHub',
    [
      {
        name: 'Matheus de Almeida Virissimo',
        email: 'matheus.virissimo@unesp.br',
      },
    ],
  ),
  createEvent(
    'Versionamento de código com Git e GitHub',
    'Laboratório Didático de Computação 2',
    0,
    new Date('2024-10-04T08:00'),
    120,
    'Faremos uma introdução ao OS Linux, com sua história, e principais distribuições. Mostraremos como é a organização das pastas no sistema, e ensinaremos sobre os processos no Linux, explicando como ele gerencia e executa os processos. E por fim explicaremos alguns comandos básicos do terminal, e alguns aplicativos como editores de texto, gerenciadores de pacote e ferramentas de rede. \n\n Pré-Requisitos: Nenhum. \n\n Materiais necessários: Máquina operando com uma distribuição Linux baseada no Debian (Pode ser uma máquina virtual ou WSL).',
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
];

export default ScheduleData;
