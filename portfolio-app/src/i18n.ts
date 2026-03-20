import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        education: 'Education',
        resume: 'Resume',
        contact: 'Contact'
      },
      hero: {
        greeting: "Hi, I'm",
        title: 'Software Engineer',
        subtitle: 'Building intelligent solutions with AI, automation, and cloud',
        cta: 'View Projects',
        contact: 'Get in Touch'
      },
      about: {
        title: 'About Me',
        description:
          'Developer based in Parnaíba, Piauí, Brazil, with 3 years of experience building scalable systems, focused on applied artificial intelligence and process automation. I work across the full product lifecycle, integrating LLMs, APIs, and modern architectures designed for performance and reliability. My approach is centered on operational efficiency, reducing friction, increasing productivity, and delivering measurable business value through resilient cloud-ready systems.',
        yearsExperience: 'Years Experience',
        appliedAi: 'Applied AI',
        cloudOps: 'Cloud & DevOps'
      },
      skills: {
        title: 'Skills & Technologies',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools & Others'
      },
      projects: {
        title: 'Featured Projects',
        viewAll: 'View All Repositories',
        viewCode: 'View Code',
        liveDemo: 'Live Demo',
        comingSoon: 'Coming soon'
      },
      experience: {
        title: 'Professional Experience',
        experiences: [
          {
            company: 'Centro Educacional Contexto',
            role: 'Software Engineer',
            period: 'Jan 2026 - Present',
            description:
              'Worked on the development and evolution of technology solutions focused on process automation, systems integration, and operational efficiency. Contributed to application development, API integrations, and implementation of solutions designed for performance, scalability, and measurable business value.',
            technologies: ['React', 'Node.js', 'TypeScript', 'Python', 'APIs', 'Automation', 'Cloud']
          },
          {
            company: 'Centro Educacional Contexto',
            role: 'Intern',
            period: 'Mar 2024 - Dec 2025',
            description:
              'Provided support and help desk assistance, helping users in their day-to-day routines, resolving demands, and improving the experience with internal tools and services. Also contributed to UI/UX design activities, with attention to usability, clarity, and more intuitive interactions.',
            technologies: ['Help Desk', 'User Support', 'UI/UX Design', 'Customer Service', 'Problem Solving']
          }
        ]
      },
      education: {
        title: 'Education & Certifications',
        degrees: {
          computerScience: {
            title: 'Bachelor of Computer Science',
            description: 'UESPI - Parnaíba (2022 - 2026, in progress).'
          },
          techDegree: {
            title: 'Computer Technician',
            description: 'IFMA - Bacabal (2019 - 2021, completed).'
          },
          complementaryCourses: {
            title: 'Complementary Courses',
            description: 'Node.js (Back-end), React with TypeScript, and AWS training through Alura.'
          }
        }
      },
      resume: {
        title: 'Resume',
        subtitle: 'Portuguese version available for download.',
        download: 'Download PDF',
        portuguese: 'Portuguese Version'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "Let's build reliable products with AI, automation, and cloud.",
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
      },
      footer: {
        rights: 'All rights reserved',
        madeWith: 'Built',
        by: 'by'
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        experience: 'Experiência',
        education: 'Educação',
        resume: 'Currículo',
        contact: 'Contato'
      },
      hero: {
        greeting: 'Olá, eu sou',
        title: 'Engenheiro de Software',
        subtitle: 'Construindo soluções inteligentes com IA, automação e infraestrutura em nuvem',
        cta: 'Ver Projetos',
        contact: 'Entre em Contato'
      },
      about: {
        title: 'Sobre Mim',
        description:
          'Desenvolvedor baseado em Parnaíba, Piauí, Brasil, com 3 anos de experiência na construção de sistemas escaláveis, com foco em inteligência artificial aplicada e automação de processos. Atuação no desenvolvimento completo de aplicações, integrando LLMs, APIs e arquiteturas modernas orientadas a performance e confiabilidade. Forte direcionamento à eficiência operacional, com soluções que reduzem fricção, aumentam produtividade e geram valor mensurável para o negócio em ambientes cloud prontos para produção.',
        yearsExperience: 'Anos de Experiência',
        appliedAi: 'IA Aplicada',
        cloudOps: 'Nuvem e DevOps'
      },
      skills: {
        title: 'Habilidades & Tecnologias',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Ferramentas & Outros'
      },
      projects: {
        title: 'Projetos em Destaque',
        viewAll: 'Ver Todos os Repositórios',
        viewCode: 'Ver Código',
        liveDemo: 'Demonstração ao Vivo',
        comingSoon: 'Em breve'
      },
      experience: {
        title: 'Experiência Profissional',
        experiences: [
          {
            company: 'Centro Educacional Contexto',
            role: 'Engenheiro de Software',
            period: '01/2026 - Atual',
            description:
              'Atuação no desenvolvimento e evolução de soluções tecnológicas, com foco em automação de processos, integração de sistemas e melhoria da eficiência operacional. Participação na construção de aplicações, integração com APIs e implementação de soluções orientadas a desempenho, escalabilidade e geração de valor para o negócio.',
            technologies: ['React', 'Node.js', 'TypeScript', 'Python', 'APIs', 'Automação', 'Cloud']
          },
          {
            company: 'Centro Educacional Contexto',
            role: 'Estagiário',
            period: '03/2024 - 12/2025',
            description:
              'Atuação com suporte e help desk, auxiliando usuários nas rotinas do dia a dia, resolvendo demandas e melhorando a experiência com ferramentas e serviços internos. Também houve participação em atividades de UI/UX design, com foco em usabilidade, clareza e interações mais intuitivas.',
            technologies: ['Help Desk', 'Suporte ao Usuário', 'UI/UX Design', 'Atendimento', 'Resolução de Problemas']
          }
        ]
      },
      education: {
        title: 'Educação & Certificações',
        degrees: {
          computerScience: {
            title: 'Bacharelado em Ciência da Computação',
            description: 'UESPI - Parnaíba (2022 - 2026, cursando).'
          },
          techDegree: {
            title: 'Técnico em Informática',
            description: 'IFMA - Bacabal (2019 - 2021, concluído).'
          },
          complementaryCourses: {
            title: 'Cursos Complementares',
            description: 'Node.js (Back-end), React com TypeScript e AWS pela Alura.'
          }
        }
      },
      resume: {
        title: 'Currículo',
        subtitle: 'Versão em português disponível para download.',
        download: 'Baixar PDF',
        portuguese: 'Versão em Português'
      },
      contact: {
        title: 'Entre em Contato',
        subtitle: 'Vamos construir produtos confiáveis com IA, automação e infraestrutura em nuvem.',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso!',
        error: 'Erro ao enviar mensagem. Por favor, tente novamente.'
      },
      footer: {
        rights: 'Todos os direitos reservados',
        madeWith: 'Construído',
        by: 'por'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
