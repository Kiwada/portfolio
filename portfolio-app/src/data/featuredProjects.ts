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
      pt: 'Plataforma SaaS com IA para turismo, estruturada para atendimento assistido, recomendações contextualizadas e integração de serviços voltados a experiências personalizadas.',
      en: 'AI-powered SaaS platform for tourism, structured for assisted support, contextual recommendations, and service integration for personalized experiences.'
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
      en: 'API Express Mongo'
    },
    description: {
      pt: 'API REST com Node.js e MongoDB, organizada em rotas, persistência e camada de serviços para operações de CRUD e manutenção evolutiva.',
      en: 'REST API with Node.js and MongoDB, organized into routes, persistence, and a service layer for CRUD operations and long-term maintainability.'
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
      pt: 'Aplicação full stack de edição colaborativa de documentos em tempo real, com sincronização instantânea entre clientes e persistência em banco de dados.',
      en: 'Full stack real-time collaborative document editor with instant synchronization between clients and database persistence.'
    },
    repositoryUrl: 'https://github.com/Kiwada/learning-path-js-ts/tree/main/socket.io-docs',
    stack: ['Node.js', 'Express', 'Socket.IO', 'MongoDB'],
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
