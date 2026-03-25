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
        title: 'Full Stack Developer',
        subtitle: 'React, Next.js, Node.js, and TypeScript for reliable web delivery',
        cta: 'View Projects',
        contact: 'Get in Touch'
      },
      about: {
        title: 'About Me',
        description:
          'Full Stack Developer with 3 years of experience building web applications, APIs, and integrations focused on automation and operational efficiency. I work with React and Next.js on the frontend, Node.js on the backend, and relational and NoSQL databases in the data layer, prioritizing organized code, user experience, and reliable delivery.',
        yearsExperience: 'Years Experience',
        appliedAi: 'APIs & Integrations',
        cloudOps: 'Reliable Delivery'
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
            role: 'IT Professional | Full Stack Development',
            period: 'Sep 2025 - Present',
            description:
              'Developed internal solutions focused on web applications, process automation, and system integration, connecting APIs, databases, and operational flows used by teachers, internal teams, and print operations. Built a CLI for DOCX processing and contributed to AI-driven workflows with OpenAI, WhatsApp, n8n, and cloud services, with emphasis on reliability and maintainability.',
            technologies: ['React', 'Node.js', 'TypeScript', 'OpenAI', 'n8n', 'Docker', 'DOCX']
          },
          {
            company: 'Centro Educacional Contexto',
            role: 'Web Development Intern',
            period: 'Mar 2024 - Aug 2025',
            description:
              'Developed and maintained the institutional portal with React, Next.js, TypeScript, HTML, CSS, and Tailwind CSS, focusing on responsiveness, usability, web performance, and technical SEO. Implemented forms integrated with REST APIs and internal flows, while collaborating on code maintenance, versioning, and technical review.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'SEO']
          }
        ]
      },
      education: {
        title: 'Education & Certifications',
        certificates: {
          title: 'Course Certificates',
          subtitle: 'Selected training records and complementary certifications.',
          view: 'View Certificate'
        },
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
        subtitle: 'Portuguese and English versions are available for download.',
        download: 'Download PDF',
        disabled: 'Download unavailable',
        portuguese: 'Portuguese Version',
        english: 'English Version'
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
        title: 'Desenvolvedor Full Stack',
        subtitle: 'React, Next.js, Node.js e TypeScript para entregas web confiáveis',
        cta: 'Ver Projetos',
        contact: 'Entre em Contato'
      },
      about: {
        title: 'Sobre Mim',
        description:
          'Desenvolvedor Full Stack com 3 anos de experiência na construção de aplicações web, APIs e integrações voltadas à automação e eficiência operacional. Atuo com React e Next.js no frontend, Node.js no backend e bancos relacionais e NoSQL na camada de dados, com foco em código organizado, experiência do usuário e entregas confiáveis.',
        yearsExperience: 'Anos de Experiência',
        appliedAi: 'APIs & Integrações',
        cloudOps: 'Entregas Confiáveis'
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
            role: 'Profissional de TI | Desenvolvimento Full Stack',
            period: 'Set 2025 - Atual',
            description:
              'Desenvolvo soluções internas com foco em aplicações web, automação de processos e integração entre sistemas, conectando APIs, banco de dados e fluxos operacionais utilizados por professores, equipe interna e gráfica. Também implementei uma CLI para processamento de arquivos DOCX e participei de soluções com IA integrando OpenAI, WhatsApp, n8n e serviços em nuvem.',
            technologies: ['React', 'Node.js', 'TypeScript', 'OpenAI', 'n8n', 'Docker', 'DOCX']
          },
          {
            company: 'Centro Educacional Contexto',
            role: 'Estagiário de Desenvolvimento Web',
            period: 'Mar 2024 - Ago 2025',
            description:
              'Desenvolvi e mantive o portal institucional com React, Next.js, TypeScript, HTML, CSS e Tailwind CSS, com foco em responsividade, usabilidade, performance web e SEO técnico. Também implementei formulários integrados a APIs REST e fluxos internos, colaborando com manutenção de código, versionamento e revisão técnica.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'APIs REST', 'SEO']
          }
        ]
      },
      education: {
        title: 'Educação & Certificações',
        certificates: {
          title: 'Certificados de Cursos',
          subtitle: 'Registros selecionados de formação e certificações complementares.',
          view: 'Ver Certificado'
        },
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
        subtitle: 'As versões em português e inglês estão disponíveis para download.',
        download: 'Baixar PDF',
        disabled: 'Download indisponível',
        portuguese: 'Versão em Português',
        english: 'Versão em Inglês'
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
