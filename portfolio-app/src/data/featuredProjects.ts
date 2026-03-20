export interface LocalizedProjectText {
  pt: string;
  en: string;
}

export interface FeaturedProject {
  id: string;
  name: LocalizedProjectText;
  description: LocalizedProjectText;
  repositoryUrl?: string;
  liveUrl?: string;
  stack: string[];
  status?: LocalizedProjectText;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'project-01',
    name: {
      pt: 'Concierge',
      en: 'Concierge'
    },
    description: {
      pt: 'Plataforma SaaS para turismo com agente de inteligência artificial orientado ao atendimento, recomendações contextualizadas e orquestração de experiências assistidas.',
      en: 'Tourism SaaS platform with an artificial intelligence agent focused on support, contextual recommendations, and orchestration of assisted experiences.'
    },
    repositoryUrl: 'https://github.com/Kiwada/Concierge',
    stack: ['React', 'TypeScript', 'Supabase', 'OpenAI', 'Docker'],
    status: {
      pt: 'Destaque',
      en: 'Featured'
    }
  },
  {
    id: 'project-02',
    name: {
      pt: 'API Express Mongo',
      en: 'Express Mongo API'
    },
    description: {
      pt: 'API REST desenvolvida com Express e MongoDB, com foco em organização de rotas, modelagem de dados, persistência e estruturação de serviços de backend.',
      en: 'REST API built with Express and MongoDB, focused on route organization, data modeling, persistence, and backend service structuring.'
    },
    repositoryUrl: 'https://github.com/Kiwada/learning-path-js-ts/tree/main/Api-Express-Mongo',
    stack: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    status: {
      pt: 'Destaque',
      en: 'Featured'
    }
  },
  {
    id: 'project-03',
    name: {
      pt: 'Socket.IO Docs',
      en: 'Socket.IO Docs'
    },
    description: {
      pt: 'Implementação de comunicação em tempo real com Socket.IO, estruturando eventos, sincronização bidirecional e gerenciamento de conexões entre cliente e servidor.',
      en: 'Real-time communication implementation with Socket.IO, structuring events, bidirectional synchronization, and connection management between client and server.'
    },
    repositoryUrl: 'https://github.com/Kiwada/learning-path-js-ts/tree/main/socket.io-docs',
    stack: ['Node.js', 'Socket.IO', 'JavaScript'],
    status: {
      pt: 'Destaque',
      en: 'Featured'
    }
  },
  {
    id: 'project-04',
    name: {
      pt: 'Deep Learning PyTorch SQL',
      en: 'Deep Learning PyTorch SQL'
    },
    description: {
      pt: 'Implementação orientada a deep learning com PyTorch e integração com SQL, estruturando fluxo de dados, experimentação de modelos e persistência para análise orientada por dados.',
      en: 'Deep learning implementation with PyTorch and SQL integration, structuring data flow, model experimentation, and persistence for data-driven analysis.'
    },
    repositoryUrl: 'https://github.com/Kiwada/Deep_Learning_Pytorch_SQL',
    stack: ['Python', 'PyTorch', 'SQL', 'Deep Learning'],
    status: {
      pt: 'Destaque',
      en: 'Featured'
    }
  },
  {
    id: 'project-05',
    name: {
      pt: 'Luz e Cena',
      en: 'Luz e Cena'
    },
    description: {
      pt: 'Aplicação web com foco em interface, navegação e apresentação de conteúdo, estruturando componentes, experiência do usuário e organização visual para contextos de catálogo ou vitrine digital.',
      en: 'Web application focused on interface, navigation, and content presentation, structuring components, user experience, and visual organization for catalog or digital showcase contexts.'
    },
    repositoryUrl: 'https://github.com/Kiwada/learning-path-js-ts/tree/main/luz-e-cena',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    status: {
      pt: 'Destaque',
      en: 'Featured'
    }
  },
  {
    id: 'project-06',
    name: {
      pt: 'REPLACEDOCX',
      en: 'REPLACEDOCX'
    },
    description: {
      pt: 'Serviço orientado ao processamento e substituição dinâmica de conteúdo em arquivos DOCX, com foco em automação documental, padronização de dados e geração de documentos parametrizados.',
      en: 'Service focused on dynamic content replacement in DOCX files, targeting document automation, data standardization, and parameterized document generation.'
    },
    repositoryUrl: 'https://github.com/Kiwada/REPLACEDOCX',
    stack: ['Node.js', 'DOCX', 'Automation'],
    status: {
      pt: 'Destaque',
      en: 'Featured'
    }
  }
];
