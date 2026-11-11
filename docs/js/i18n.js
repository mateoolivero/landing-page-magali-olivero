// Traducciones del sitio. El español vive en index.html; acá van inglés y portugués.
// Cada clave coincide con un data-i18n del HTML. Se admite HTML simple (ej. <span class="muted">).
const TRANSLATIONS = {
  en: {
    "meta.title": "Psychologist in Bariloche, Argentina · Magali Olivero | In-person and online therapy",
    "meta.desc": "Licensed psychologist in San Carlos de Bariloche, Argentina (Reg. No. 2670). Therapy for teens and adults, in person in downtown Bariloche and online. Book via WhatsApp.",
    "whatsapp.msg": "Hi Magali, I'd like to ask about booking a session.",

    "nav.menu": "Open menu",
    "nav.about": "About me",
    "nav.services": "Services",
    "nav.faq": "FAQ",
    "nav.location": "Location",
    "nav.book": "Book a session",

    "hero.eyebrow": "Psychologist in Bariloche · In person and online",
    "hero.title": "A space to <span class=\"muted\">make sense of what you're going through.</span>",
    "hero.lead": "Psychological care for teens and adults from a psychoanalytic approach. In person in downtown Bariloche and online.",
    "hero.cta": "Book via WhatsApp",
    "hero.more": "About me",
    "hero.tag": "Lic. Magali Olivero · Reg. No. 2670",
    "hero.patients": "active patients",

    "chip.adults": "Adults",
    "chip.teens": "Teens",
    "chip.inperson": "In person",
    "chip.online": "Online",

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
    "about.p1": "Hi, I'm Magalí Olivero, and I hold a degree in Psychology.",
    "about.p2": "I'm a psychologist with a psychoanalytic orientation, and I accompany teens and adults through their therapeutic processes.",
    "about.p3": "I see therapy as a space for listening, connection and reflection, where each person can put into words what is happening to them, explore their emotions and understand aspects of their history and their relationships.",
    "about.p4": "My work starts from what makes each patient unique. That's why I aim to build a therapeutic relationship grounded in trust, attentive listening and respect for the pace of each process.",
    "about.p5": "I believe there is no single way to go through what we're living, and that having a space of your own to talk about what worries you can open up new possibilities.",
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
    "services.1.t": "Adults",
    "services.1.d": "A space for listening, connection and reflection, to put into words what is happening to you.",
    "services.2.t": "Teens",
    "services.2.d": "Support through their therapeutic process, respecting each person's pace.",
    "services.4.t": "In person",
    "services.4.d": "At my office in downtown Bariloche.",
    "services.5.t": "Online",
    "services.5.d": "Video sessions, wherever you are.",

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
    "meta.title": "Psicóloga em Bariloche, Argentina · Magali Olivero | Atendimento presencial e online",
    "meta.desc": "Psicóloga em San Carlos de Bariloche, Argentina (registro nº 2670). Terapia para adolescentes e adultos, presencial no centro de Bariloche e online. Agende pelo WhatsApp.",
    "whatsapp.msg": "Olá, Magali! Gostaria de saber sobre um horário para consulta.",

    "nav.menu": "Abrir menu",
    "nav.about": "Sobre mim",
    "nav.services": "Serviços",
    "nav.faq": "Perguntas",
    "nav.location": "Localização",
    "nav.book": "Agendar",

    "hero.eyebrow": "Psicóloga em Bariloche · Presencial e online",
    "hero.title": "Um espaço para <span class=\"muted\">pensar no que você está vivendo.</span>",
    "hero.lead": "Atendimento psicológico para adolescentes e adultos com orientação psicanalítica. Presencial no centro de Bariloche e online.",
    "hero.cta": "Agendar pelo WhatsApp",
    "hero.more": "Conheça-me",
    "hero.tag": "Lic. Magali Olivero · Registro nº 2670",
    "hero.patients": "pacientes ativos",

    "chip.adults": "Adultos",
    "chip.teens": "Adolescentes",
    "chip.inperson": "Presencial",
    "chip.online": "Online",

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
    "about.p1": "Olá, sou Magalí Olivero, graduada em Psicologia.",
    "about.p2": "Sou psicóloga e trabalho a partir de uma orientação psicanalítica, acompanhando adolescentes e adultos em seus processos terapêuticos.",
    "about.p3": "Entendo a terapia como um espaço de escuta, encontro e reflexão, onde cada pessoa possa colocar em palavras aquilo que lhe acontece, explorar suas emoções e compreender aspectos da sua história e dos seus vínculos.",
    "about.p4": "Meu trabalho parte da singularidade de cada paciente. Por isso, busco construir um vínculo terapêutico baseado na confiança, na escuta atenta e no respeito pelo tempo de cada processo.",
    "about.p5": "Acredito que não existe uma única maneira de atravessar o que nos acontece, e que contar com um espaço próprio para falar daquilo que nos preocupa pode abrir novas possibilidades.",
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
    "services.1.t": "Adultos",
    "services.1.d": "Um espaço de escuta, encontro e reflexão para colocar em palavras aquilo que te acontece.",
    "services.2.t": "Adolescentes",
    "services.2.d": "Acompanhamento em seus processos terapêuticos, respeitando o tempo de cada um.",
    "services.4.t": "Presencial",
    "services.4.d": "No meu consultório, no centro de Bariloche.",
    "services.5.t": "Online",
    "services.5.d": "Sessões por videochamada, de onde você estiver.",

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
