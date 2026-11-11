// Traducciones del sitio. El español vive en index.html; acá van inglés y portugués.
// Cada clave coincide con un data-i18n del HTML. Se admite HTML simple (ej. <span class="muted">).
const TRANSLATIONS = {
  en: {
    "meta.title": "Psychologist in Bariloche, Argentina · Magali Olivero | In-person therapy",
    "meta.desc": "Licensed psychologist in San Carlos de Bariloche, Argentina (Reg. No. 2670). Therapy for adults and teens, in person in downtown Bariloche. Book via WhatsApp.",
    "whatsapp.msg": "Hi Magali, I'd like to ask about booking a session.",

    "nav.menu": "Open menu",
    "nav.about": "About me",
    "nav.services": "Services",
    "nav.faq": "FAQ",
    "nav.location": "Location",
    "nav.book": "Book a session",

    "hero.eyebrow": "Psychologist in Bariloche · In-person sessions",
    "hero.title": "A space to <span class=\"muted\">make sense of what you're going through.</span>",
    "hero.lead": "Clinical psychology for adults from a psychoanalytic approach. Office in downtown Bariloche.",
    "hero.cta": "Book via WhatsApp",
    "hero.more": "About me",
    "hero.tag": "Lic. Magali Olivero · Reg. No. 2670",
    "hero.patients": "active patients",

    "chip.adults": "Adults",
    "chip.teens": "Teens",
    "chip.inperson": "In person",

    "reasons.title": "Does any of this <span class=\"muted\">sound familiar?</span>",
    "reasons.1.t": "[Reason 1]",
    "reasons.1.d": "[E.g. anxiety or stress that keeps you from resting]",
    "reasons.2.t": "[Reason 2]",
    "reasons.2.d": "[E.g. feeling sad or low]",
    "reasons.3.t": "[Reason 3]",
    "reasons.3.d": "[E.g. conflicts in relationships or with your partner]",
    "reasons.4.t": "[Reason 4]",
    "reasons.4.d": "[E.g. big changes or hard decisions]",

    "about.title": "About <span class=\"muted\">me.</span>",
    "about.text": "I'm Magali, a psychologist. I studied at the National University of Córdoba (UNC) and graduated in 2021, right in the middle of the pandemic. My work is grounded in psychoanalysis, with a clinical focus on adults.",
    "about.text2": "What I love most about my profession is how unique each person is, and the power of personal growth.",
    "about.edu": "Education",
    "about.edu.1.t": "Degree in Psychology",
    "about.edu.1.d": "National University of Córdoba (UNC), 2021",
    "about.edu.2.t": "Postgraduate in Psychoanalysis",
    "about.edu.2.d": "With a clinical focus on adults",
    "about.edu.3.t": "University Diploma",
    "about.edu.3.d": "In Psychoanalytic Clinical Practice",
    "about.edu.4.t": "Postgraduate in Work Psychology",
    "about.edu.4.d": "And Organizational Psychology",
    "about.license": "Psychologist in San Carlos de Bariloche · Professional registration No. 2670 (Río Negro, Argentina)",

    "services.title": "How I can <span class=\"muted\">help.</span>",
    "services.1.t": "[Individual therapy]",
    "services.2.t": "[Teens]",
    "services.4.t": "[In person]",
    "services.d": "[Short description]",

    "steps.title": "How to <span class=\"muted\">get started?</span>",
    "steps.1": "Send me a WhatsApp message",
    "steps.2": "We find a day and time",
    "steps.3": "We have our first session",

    "faq.title": "Frequently asked <span class=\"muted\">questions.</span>",
    "faq.2.q": "How long is each session?",
    "faq.3.q": "What is the first session like?",
    "faq.a": "[Answer]",

    "location.title": "My office in <span class=\"muted\">Bariloche.</span>",
    "location.cta": "Get directions",
    "location.map": "Map of the office on Google Maps",

    "contact.title": "Book a session, <span class=\"muted\">let's begin.</span>",
    "contact.wa": "Message me on WhatsApp",
    "contact.email": "Send an email",
    "contact.info": "[Email] · [Area / address] · [Hours]",

    "footer.name": "Lic. Magali Olivero · Psychologist in Bariloche, Río Negro · Reg. No. 2670",
    "footer.dev": "Website developed by Mateo Olivero · Full Stack Developer",
    "footer.crisis": "This site is not an emergency service. If you are in crisis, call 0800-345-1435 or 107 (medical emergencies in Argentina), or go to the nearest hospital emergency room."
  },

  pt: {
    "meta.title": "Psicóloga em Bariloche, Argentina · Magali Olivero | Atendimento presencial",
    "meta.desc": "Psicóloga em San Carlos de Bariloche, Argentina (registro nº 2670). Terapia para adultos e adolescentes, presencial no centro de Bariloche. Agende pelo WhatsApp.",
    "whatsapp.msg": "Olá, Magali! Gostaria de saber sobre um horário para consulta.",

    "nav.menu": "Abrir menu",
    "nav.about": "Sobre mim",
    "nav.services": "Serviços",
    "nav.faq": "Perguntas",
    "nav.location": "Localização",
    "nav.book": "Agendar",

    "hero.eyebrow": "Psicóloga em Bariloche · Atendimento presencial",
    "hero.title": "Um espaço para <span class=\"muted\">pensar no que você está vivendo.</span>",
    "hero.lead": "Atendimento psicológico clínico para adultos com abordagem psicanalítica. Consultório no centro de Bariloche.",
    "hero.cta": "Agendar pelo WhatsApp",
    "hero.more": "Conheça-me",
    "hero.tag": "Lic. Magali Olivero · Registro nº 2670",
    "hero.patients": "pacientes ativos",

    "chip.adults": "Adultos",
    "chip.teens": "Adolescentes",
    "chip.inperson": "Presencial",

    "reasons.title": "Você se identifica <span class=\"muted\">com algo disso?</span>",
    "reasons.1.t": "[Motivo 1]",
    "reasons.1.d": "[Ex.: ansiedade ou estresse que não te deixam descansar]",
    "reasons.2.t": "[Motivo 2]",
    "reasons.2.d": "[Ex.: momentos de tristeza ou desânimo]",
    "reasons.3.t": "[Motivo 3]",
    "reasons.3.d": "[Ex.: conflitos nos relacionamentos ou no casal]",
    "reasons.4.t": "[Motivo 4]",
    "reasons.4.d": "[Ex.: mudanças ou decisões difíceis]",

    "about.title": "Sobre <span class=\"muted\">mim.</span>",
    "about.text": "Sou a Magali, psicóloga. Estudei na Universidade Nacional de Córdoba (UNC) e me formei em 2021, em plena pandemia. Trabalho a partir da psicanálise, com atendimento clínico de adultos.",
    "about.text2": "O que mais gosto na minha profissão é a singularidade de cada pessoa e o poder do crescimento pessoal.",
    "about.edu": "Formação",
    "about.edu.1.t": "Graduação em Psicologia",
    "about.edu.1.d": "Universidade Nacional de Córdoba (UNC), 2021",
    "about.edu.2.t": "Pós-graduação em Psicanálise",
    "about.edu.2.d": "Com atendimento clínico de adultos",
    "about.edu.3.t": "Diplomatura Universitária",
    "about.edu.3.d": "Em Clínica Psicanalítica",
    "about.edu.4.t": "Pós-graduação em Psicologia do Trabalho",
    "about.edu.4.d": "E Organizacional",
    "about.license": "Psicóloga em San Carlos de Bariloche · Registro profissional nº 2670 (Río Negro, Argentina)",

    "services.title": "Como posso <span class=\"muted\">te ajudar.</span>",
    "services.1.t": "[Terapia individual]",
    "services.2.t": "[Adolescentes]",
    "services.4.t": "[Presencial]",
    "services.d": "[Descrição breve]",

    "steps.title": "Como <span class=\"muted\">começar?</span>",
    "steps.1": "Você me manda uma mensagem no WhatsApp",
    "steps.2": "Combinamos dia e horário",
    "steps.3": "Fazemos a primeira sessão",

    "faq.title": "Perguntas <span class=\"muted\">frequentes.</span>",
    "faq.2.q": "Quanto tempo dura cada sessão?",
    "faq.3.q": "Como é a primeira sessão?",
    "faq.a": "[Resposta]",

    "location.title": "Consultório em <span class=\"muted\">Bariloche.</span>",
    "location.cta": "Como chegar",
    "location.map": "Mapa do consultório no Google Maps",

    "contact.title": "Agende sua sessão, <span class=\"muted\">vamos começar.</span>",
    "contact.wa": "Fale comigo no WhatsApp",
    "contact.email": "Enviar um e-mail",
    "contact.info": "[E-mail] · [Região / endereço] · [Horários]",

    "footer.name": "Lic. Magali Olivero · Psicóloga em Bariloche, Río Negro · Registro nº 2670",
    "footer.dev": "Site desenvolvido por Mateo Olivero · Full Stack Developer",
    "footer.crisis": "Este site não é um serviço de emergência. Se você estiver em crise, ligue para 0800-345-1435 ou 107 (emergências médicas na Argentina), ou vá ao pronto-socorro mais próximo."
  }
};

// Mensaje de WhatsApp en español (el resto del español está en el HTML)
TRANSLATIONS.es = { "whatsapp.msg": "Hola Magali, quisiera consultar por un turno." };
