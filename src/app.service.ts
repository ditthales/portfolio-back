import { Injectable } from '@nestjs/common';
import { LanguageJSON } from './interfaces';

interface ProjectUrl {
  name: string;
  url: string;
}

export interface ProjectInfo {
  name: string;
  description: string;
  relevance: number;
  imageUrl: string;
  urls: ProjectUrl[];
  tags: string[];
}

export interface TestimonialInfo {
  name: string;
  text: string;
  imageUrl: string;
}

@Injectable()
export class AppService {

  getProjectsInfo(): ProjectInfo[] {
    return [
      //witchie
      {
        name: "Witchie",
        description: "witchie_description",
        relevance: 1,
        imageUrl: "https://i.imgur.com/TbpJ0ue.png",
        urls: [
          {
            name: "App Store",
            url: "https://nestjs.com/"
          },
          {
            name: "GitHub",
            url: ""
          },
          {
            name: "Medium",
            url: ""
          },
          {
            name: "Instagram",
            url: ""
          },
          {
            name: "Twitter",
            url: ""
          },
          {
            name: "TikTok",
            url: ""
          }
        ],
        tags: ["Swift", "SwiftUI", "AVFoundations", "UserDefaults", "CI/CD", "Firebase Analytics"]
      },
      //in a sheet of paper
      {
        name: "In A Sheet of Paper",
        description: "paper_description",
        relevance: 1,
        imageUrl: "https://i.imgur.com/bCnkpGl.png",
        urls: [
          {
            name: "GitHub",
            url: "#"
          },
          {
            name: "Medium",
            url: "#"
          },
          {
            name: "Website",
            url: "#"
          },
          {
            name: "Live Demo",
            url: "#"
          },
        ],
        tags: ["Swift", "SwiftUI", "AVFoundations", "WWDC Winner", "PencilKit", "Solo Project"]
      },
      //receitinha
      {
        name: "Receitinha",
        description: "receitinha_description",
        relevance: 1,
        imageUrl: "https://i.imgur.com/9qGOUMI.png",
        urls: [
          {
            name: "App Store",
            url: "https://nestjs.com/"
          },
          {
            name: "GitHub",
            url: "#"
          },
          {
            name: "Live Demo",
            url: "#"
          },
        ],
        tags: ["Swift", "UIKit", "ViewCode/Programmatic UI", "AVFoundations", "UserDefaults", "FaceID", "App Store"]
      },
      //naturia
      {
        name: "Naturia",
        description: "naturia_description",
        relevance: 2,
        imageUrl: "https://i.imgur.com/jEaUGCw.png",
        urls: [
          {
            name: "GitHub",
            url: "#"
          },
          {
            name: "Live Demo",
            url: "#"
          },
        ],
        tags: ["Swift", "SwiftUI", "PencilKit", "iPad"]
      },
      //bom pra cachorro
      {
        name: "Bom pra Cachorro",
        description: "bompracachorro_description",
        relevance: 1,
        imageUrl: "https://i.imgur.com/OwlcDEd.png",
        urls: [
          {
            name: "App Store",
            url: "https://nestjs.com/"
          },
          {
            name: "GitHub",
            url: "#"
          },
          {
            name: "Live Demo",
            url: "#"
          },
        ],
        tags: ["Swift", "UIKit", "ViewCode/Programmatic UI", "UserDefaults", "App Store", "Unit Tests, Solo Project"]
      },
      //gera
      {
        name: "Gera",
        description: "gera_description",
        relevance: 2,
        imageUrl: "https://i.imgur.com/6cHqyED.png",
        urls: [
          {
            name: "GitHub",
            url: "#"
          },
          {
            name: "Live Demo",
            url: "#"
          },
        ],
        tags: ["Swift", "SwiftUI", "AVFoundations", "Multiplayer", "Device Communication"]
      },
    ]
  }

  getPortugueseJSON(): LanguageJSON {
    return {
      "dev": "./foto e nome.png",
      "sobre": "Sobre mim",
      "about": "Sobre",
      "me": "mim",
      "projetos": "Projetos",
      "cv": "Currículo",
      "feedbacks": "Feedbacks",
      "fale": "Fale comigo",
      "mail": "contato@thalesfraga.dev",
      "buscar": "./buscar.png",
      "text_about_me1": "Olá! Meu nome é Thales Fraga, e sou um desenvolvedor iOS apaixonado por desafios tecnológicos. Atualmente, estou cursando Engenharia da Computação na Universidade Federal de Pernambuco (UFPE). Além disso, sou formado em Análise e desenvolvimento de sistemas e tenho a oportunidade de fazer parte da Apple Developer Academy (@appledeveloperacademy.ufpe).",
      "text_about_me2": "Tenho interesse em aprender constantemente e explorar novas experiências. Tenho afinidade com geografia e idiomas, sendo capaz de me comunicar em inglês, francês e espanhol, além do português, minha língua materna. Uma experiência marcante em minha vida foi meu intercâmbio para Corrientes, na Argentina, onde passei 45 dias dedicados a dar aulas para crianças e jovens em situação de vulnerabilidade socioeconômica. Foi uma experiência transformadora, e sinto que contribuí para fazer a diferença na vida desses jovens. Além disso, tenho uma inclinação para a organização e coordenação de eventos. Participei ativamente da organização do Open Day da UFPE, um evento que reuniu mais de 500 pessoas no Centro de Informática da universidade. Foi uma oportunidade incrível de unir pessoas e compartilhar conhecimento.",
      "text_about_me3": "No meu tempo livre, gosto de desafios de outro tipo, como jogar League of Legends e Minecraft. Inclusive, tenho um projeto de  decodificador de binário para display de 7 segmentos feito inteiramente com redstone que você pode conferir aqui.",
      "skills": "Habilidades",
      "viewcode": "ViewCode",
      "language": "pt",
      "nome": "Nome",
      "email": "Endereço de e-mail",
      "mensagem": "Sua mensagem",
      "enviar": "Enviar",
      "enviado": "Mensagem enviada!",
      "nao_enviado": "Não foi possível enviar, tente novamente!",
      "placeholder_nome": "Meu Nome",
      "placeholder_email": "meuemail@exemplo.com",
      "placeholder_mensagem": "Sua mensagem aqui...",
      "feedback_gui": "”Tive a oportunidade de trabalhar com Thales em um projeto sobre testes automatizados em swift, onde fizemos um aplicativo do zero praticando a metodologia TDD em todos os passos. Nele, Thales se mostrou um companheiro de equipe dedicado, curioso e proativo, colaborando com todas as etapas do projeto e permanecendo interessado durante todo o processo. Além disso, Thales contribuiu de forma exemplar no desenvolvimento do nosso produto final, mostrando que detém o conhecimento prático de código, e produziu em conjunto conosco um pitch educativo de excelente qualidade. Para além das barreiras desse projeto, consigo ver no nosso ambiente de estágio que Thales é apreciado e muito bem quisto, e é reconhecido pelo seu trabalho árduo, pelas suas habilidades técnicas em desenvolvimento e design, pela sua criatividade e contribuição em processos de inovação de produto, e pela sua disposição em ajudar os outros. Por fim, deixo aqui minha admiração por Thales, como pessoa e como profissional, e acredito que ele terá muito sucesso na vida profissional.”",
      "feedback_migge": "”Tive a oportunidade de trabalhar em diversos projetos com Thales e em todos eles sempre foram de muito aprendizado. Acredito que a melhor forma de descrever a sua atuação seria com a palavra ”Dedicado”. Thales sempre se mostrava proativo, interessado, observativo e prestativo no desenvolvimentos dos projetos, sabendo se comunicar e expressar a sua opinião de forma assertiva. Além de ser muito esforçado, Thales possui uma excelente competência para compreender sistemas e propor soluções criativas para problemas complexos, além de muito persistente e resiliente, o tornando um desenvolvedor de código diferenciado.”",
      "que_pensam": "O que pensam meus colegas?",
      "aqui": "aqui",
      "lista1": "Desenvolvimento de aplicações iOS usando a linguagem Swift e seus frameworks.",
      "lista2": "Trabalho com equipes multidisciplinares.",
      "lista3": "Experiência em design e inovação.",
      "lista4": "Trabalho com metodologias ágeis.",
      "lista5": "Versionamento e organização (Git e GitHub).",
      "lista6": "Publicação de aplicativos na App Store.",
      "lista7": "Monetização de aplicações.",
      "lista8": "Internacionalização de aplicações.",
      "lista9": "Marketing de aplicações na App Store.",
      "experiencias": "Experiências",
      "atividades_realizadas": "Atividades realizadas",
      "projetos_relacionados": "Projetos relacionados",
      "exp1": "Bolsista de inovação em desenvolvimento iOS",
      "curso1": "Bacharelado em engenharia da computação",
      "curso2": "Bacharelado em ciências da computação",
      "curso3": "Tecnólogo em análise e desenvolvimento de sistemas",
      "data1": "out/2023 - previsão: jul/2028",
      "data2": "jan/2023 - previsão: dez/2024",
      "data3": "ago/2021 - dez/2022",
      "educacao": "Educação",
      "premiacoes": "Premiações",
      "conquista": "Vencedor do WWDC 2023 Swift Student Challenge com o app playground In a Sheet of Paper",
      "opcao1": "Mais sobre o processo",
      "opcao2": "Conheça mais de mim",
      "opcao3": "Conheça o app",
      "opcao4": "Baixar CV completo",
      "witchie_description": "Witchie é um jogo puzzle em que você precisa ajudar uma bruxinha ranzinza a se livras das marcas mágicas que misteriosamente apareceram em seu castelo. Será que você é capaz?",
      "paper_description": "Premiado na WWDC 2023 Swift Student Challenge, In a Sheet of Paper é uma experiência onde você se encontra em um lugar completamente escuro e é convidado por Vin, uma voz misteriosa, a imaginar e desenhar o cenário. Com uma narrativa cheia de emoção e uma trilha sonora envolvente, você é levado a uma jornada de autoconhecimento e reflexão.",
      "receitinha_description": "c",
      "naturia_description": "d",
      "bompracachorro_description": "e",
      "gera_description": "f"
  }
  }

  getEnglishJSON(): LanguageJSON {
    return {
      "dev": "./pic&name.png",
      "sobre": "About me",
      "about": "About",
      "me": "me",
      "projetos": "Projects",
      "cv": "CV",
      "feedbacks": "Feedbacks",
      "fale": "Contact me",
      "mail": "contact@thalesfraga.dev",
      "buscar": "./search.png",
      "text_about_me1": "Hello! My name is Thales Fraga, and I am an iOS developer passionate about technological challenges. Currently, I am pursuing a degree in Computer Engineering at the Federal University of Pernambuco (UFPE). Additionally, I hold a degree in Systems Analysis and Development and have the opportunity to be a part of the Apple Developer Academy (@appledeveloperacademy.ufpe).",
      "text_about_me2": "I have a keen interest in constant learning and exploring new experiences. I have an affinity for geography and languages, being able to communicate in English, French, and Spanish, in addition to Portuguese, my native language. A significant experience in my life was my exchange program to Corrientes, Argentina, where I spent 45 days dedicated to teaching children and young people in socio-economic vulnerability. It was a transformative experience, and I feel that I made a difference in the lives of these young individuals. Furthermore, I have a knack for organizing and coordinating events. I actively participated in the organization of UFPE's Open Day, an event that brought together more than 500 people at the university's Center for Informatics. It was an incredible opportunity to connect people and share knowledge.",
      "text_about_me3": "In my free time, I enjoy different kinds of challenges, such as playing League of Legends and Minecraft. In fact, I have a project for a binary decoder for a 7-segment display entirely made with redstone that you can check out here.",
      "skills": "Skills",
      "viewcode": "Programmatic UI",
      "language": "en",
      "nome": "Name",
      "email": "E-mail address",
      "mensagem": "Your Message",
      "enviar": "Send",
      "enviado": "Message sent!",
      "nao_enviado": "Sorry! Message not sent. Try Again!",
      "placeholder_nome": "My Name",
      "placeholder_email": "myemail@example.com",
      "placeholder_mensagem": "Your message here...",
      "feedback_gui": "”I had the opportunity to work with Thales on a project involving automated testing in Swift, where we built an application from scratch, practicing the TDD methodology at every step. Throughout, Thales proved to be a dedicated, curious, and proactive team member, collaborating in all project phases and remaining engaged throughout the process. Additionally, Thales made exemplary contributions to the development of our final product, demonstrating practical coding knowledge, and together, we produced an excellent quality educational pitch. Beyond the confines of this project, I can see in our internship environment that Thales is well-respected and highly regarded, recognized for his hard work, technical skills in development and design, creativity, and contribution to product innovation processes, as well as his willingness to assist others. Finally, I express my admiration for Thales, both as a person and a professional, and I believe he will have great success in his professional life.”",
      "feedback_migge": "”I had the opportunity to work on several projects with Thales, and in all of them, there was always a great deal of learning involved. I believe the best way to describe his performance would be with the word 'Dedicated.' Thales always displayed a proactive, interested, observant, and helpful attitude in project development, knowing how to communicate and express his opinion assertively. In addition to being very hardworking, Thales possesses excellent competence in understanding systems and proposing creative solutions to complex problems. He is also highly persistent and resilient, making him a standout code developer.”",
      "que_pensam": "What do my colleagues think?",
      "aqui": "here",
      "lista1": "iOS application development using Swift and its frameworks.",
      "lista2": "Working with multidisciplinary teams.",
      "lista3": "Experience in design and innovation.",
      "lista4": "Working with agile methodologies.",
      "lista5": "Version control and organization (Git and GitHub).",
      "lista6": "Publishing applications on the App Store.",
      "lista7": "Monetization of applications.",
      "lista8": "Internationalization of applications.",
      "lista9": "App Store application marketing.",
      "experiencias": "Experiences",
      "atividades_realizadas": "Activities Undertaken",
      "projetos_relacionados": "Related Projects",
      "exp1": "Scholarship recipient for iOS development innovation",
      "curso1": "Bachelor's in Computer Engineering",
      "curso2": "Bachelor's in Computer Science",
      "curso3": "Technologist in Systems Analysis and Development",
      "data1": "Oct/2023 - Forecast: Jul/2028",
      "data2": "Jan/2023 - Forecast: Dec/2024",
      "data3": "Aug/2021 - Dec/2022",
      "educacao": "Education",
      "premiacoes": "Awards",
      "conquista": "Winner of the WWDC 2023 Swift Student Challenge with the In a Sheet of Paper playground app",
      "opcao1": "More About the Process",
      "opcao2": "Learn More About Me",
      "opcao3": "Explore the App",
      "opcao4": "Download Full CV",
      "witchie_description": "a",
      "paper_description": "b",
      "receitinha_description": "c",
      "naturia_description": "d",
      "bompracachorro_description": "e",
      "gera_description": "f"
  }
  }

  getSpanishJSON(): LanguageJSON {
    return {
      "dev": "./foto&nombre.png",
      "sobre": "Sobre mi",
      "about": "Sobre",
      "me": "mi",
      "projetos": "Proyectos",
      "cv": "CV",
      "feedbacks": "Feedbacks",
      "fale": "Contáctame",
      "mail": "contact@thalesfraga.dev",
      "buscar": "./buscar.png",
      "text_about_me1": "¡Hola! Mi nombre es Thales Fraga, y soy un desarrollador de iOS apasionado por los desafíos tecnológicos. Actualmente, estoy cursando la carrera de Ingeniería en Computación en la Universidad Federal de Pernambuco (UFPE). Además, tengo un título en Análisis y Desarrollo de Sistemas y tengo la oportunidad de ser parte de la Apple Developer Academy (@appledeveloperacademy.ufpe).",
      "text_about_me2": "Tengo un gran interés en aprender constantemente y explorar nuevas experiencias. Tengo afinidad por la geografía e idiomas, siendo capaz de comunicarme en inglés, francés y español, además de mi lengua materna, el portugués. Una experiencia significativa en mi vida fue mi intercambio a Corrientes, Argentina, donde pasé 45 días dedicado a enseñar a niños y jóvenes en situación de vulnerabilidad socioeconómica. Fue una experiencia transformadora, y siento que marqué la diferencia en la vida de estos jóvenes. Además, tengo habilidades para la organización y coordinación de eventos. Participé activamente en la organización del Open Day de la UFPE, un evento que reunió a más de 500 personas en el Centro de Informática de la universidad. Fue una oportunidad increíble para conectar a las personas y compartir conocimiento.",
      "text_about_me3": "En mi tiempo libre, disfruto de diferentes tipos de desafíos, como jugar League of Legends y Minecraft. De hecho, tengo un proyecto de un decodificador binario para una pantalla de 7 segmentos hecho completamente con redstone que puedes ver aquí.",
      "skills": "Habilidades",
      "viewcode": "Programmatic UI",
      "language": "es",
      "nome": "Nombre",
      "email": "Correo electrónico",
      "mensagem": "Mensaje",
      "enviar": "Enviar",
      "enviado": "¡Mensaje enviado con éxito!",
      "nao_enviado": "¡No se pudo enviar el mensaje! Inténtalo de nuevo.",
      "placeholder_nome": "Mi Nombre",
      "placeholder_email": "miemail@ejemplo.com",
      "placeholder_mensagem": "Tu mensaje aquí",
      "feedback_gui": "”Tuve la oportunidad de trabajar con Thales en un proyecto relacionado con pruebas automatizadas en Swift, donde construimos una aplicación desde cero, practicando la metodología TDD en cada paso. A lo largo de todo el proyecto, Thales demostró ser un miembro del equipo dedicado, curioso y proactivo, colaborando en todas las fases del proyecto y manteniéndose comprometido durante todo el proceso. Además, Thales realizó contribuciones ejemplares en el desarrollo de nuestro producto final, demostrando un conocimiento práctico de la programación, y juntos produjimos un excelente pitch educativo de alta calidad. Más allá de los límites de este proyecto, puedo ver en nuestro entorno de pasantía que Thales es altamente respetado y apreciado, reconocido por su arduo trabajo, habilidades técnicas en desarrollo y diseño, creatividad, contribución a los procesos de innovación del producto y su disposición para ayudar a los demás. Finalmente, expreso mi admiración por Thales, tanto como persona como profesional, y creo que tendrá un gran éxito en su carrera profesional.”",
      "feedback_migge": "”Tuve la oportunidad de trabajar en varios proyectos con Thales, y en todos ellos siempre hubo mucho aprendizaje. Creo que la mejor forma de describir su desempeño sería con la palabra 'Dedicado'. Thales siempre mostraba una actitud proactiva, interesada, observadora y servicial en el desarrollo de proyectos, sabiendo cómo comunicarse y expresar su opinión de manera asertiva. Además de ser muy trabajador, Thales posee una excelente competencia para comprender sistemas y proponer soluciones creativas a problemas complejos. También es altamente persistente y resiliente, lo que lo convierte en un desarrollador de código destacado.”",
      "que_pensam": "¿Qué piensan mis colegas?",
      "aqui": "aquí",
      "lista1": "Desarrollo de aplicaciones iOS utilizando Swift y sus frameworks.",
      "lista2": "Trabajo con equipos multidisciplinarios.",
      "lista3": "Experiencia en diseño e innovación.",
      "lista4": "Trabajo con metodologías ágiles.",
      "lista5": "Control y organización de versiones (Git y GitHub).",
      "lista6": "Publicación de aplicaciones en la App Store.",
      "lista7": "Monetización de aplicaciones.",
      "lista8": "Internacionalización de aplicaciones.",
      "lista9": "Marketing de aplicaciones en la App Store.",
      "experiencias": "Experiencias",
      "atividades_realizadas": "Actividades realizadas",
      "projetos_relacionados": "Proyectos relacionados",
      "exp1": "Becario de innovación en desarrollo iOS",
      "curso1": "Licenciatura en Ingeniería Informática",
      "curso2": "Licenciatura en Ciencias de la Computación",
      "curso3": "Tecnólogo en Análisis y Desarrollo de Sistemas",
      "data1": "Oct/2023 - Pronóstico: Jul/2028",
      "data2": "Ene/2023 - Pronóstico: Dic/2024",
      "data3": "Ago/2021 - Dic/2022",
      "educacao": "Educación",
      "premiacoes": "Premios",
      "conquista": "Ganador del WWDC 2023 Swift Student Challenge con la aplicación playground In a Sheet of Paper",
      "opcao1": "Más sobre el proceso",
      "opcao2": "Conozca más sobre mí",
      "opcao3": "Conozca la aplicación",
      "opcao4": "Descargar CV completo",
      "witchie_description": "a",
      "paper_description": "b",
      "receitinha_description": "c",
      "naturia_description": "d",
      "bompracachorro_description": "e",
      "gera_description": "f"
  }
  }

  getFrenchJSON(): LanguageJSON {
    return {
      "dev": "./photo&prenom.png",
      "sobre": "À propos de moi",
      "about": "À propos",
      "me": "de moi",
      "projetos": "Projets",
      "cv": "CV",
      "feedbacks": "Retours",
      "fale": "Contactez-moi",
      "mail": "contact@thalesfraga.dev",
      "buscar": "./rechercher.png",
      "text_about_me1": "Bonjour ! Je m'appelle Thales Fraga, et je suis un développeur iOS passionné par les défis technologiques. Actuellement, je poursuis des études en génie informatique à l'Université fédérale de Pernambouc (UFPE). De plus, j'ai obtenu un diplôme en Analyse et développement de systèmes et j'ai eu l'opportunité de faire partie de l'Apple Developer Academy (@appledeveloperacademy.ufpe).",
      "text_about_me2": "J'ai un vif intérêt pour l'apprentissage constant et l'exploration de nouvelles expériences. J'ai une affinité pour la géographie et les langues, étant capable de communiquer en anglais, en français et en espagnol, en plus du portugais, ma langue maternelle. Une expérience marquante de ma vie a été mon séjour en Argentine, à Corrientes, où j'ai passé 45 jours à enseigner à des enfants et à des jeunes en situation de vulnérabilité socio-économique. Cela a été une expérience transformative, et je pense avoir fait une différence dans la vie de ces jeunes. De plus, j'ai un talent pour l'organisation et la coordination d'événements. J'ai participé activement à l'organisation de l'Open Day de l'UFPE, un événement qui a rassemblé plus de 500 personnes au Centre d'informatique de l'université. C'était une opportunité incroyable de réunir des gens et de partager des connaissances.",
      "text_about_me3": "Dans mon temps libre, j'aime relever différents types de défis, comme jouer à League of Legends et Minecraft. En fait, j'ai un projet de décodeur binaire pour un affichage à 7 segments entièrement réalisé en redstone que vous pouvez découvrir ici.",
      "skills": "Competénces",
      "viewcode": "Programmatic UI",
      "language": "fr",
      "nome": "Nom complet",
      "email": "Couriel",
      "mensagem": "Message",
      "enviar": "Envoyer",
      "enviado": "Message envoyé avec succès!",
      "nao_enviado": "Échec de l'envoi du message! Veuillez réessayer.",
      "placeholder_nome": "Prénom et Nom",
      "placeholder_email": "monemail@exemple.com",
      "placeholder_mensagem": "Votre message ici...",
      "feedback_gui": "”J'ai eu l'opportunité de travailler avec Thales sur un projet impliquant des tests automatisés en Swift, où nous avons construit une application à partir de zéro, en pratiquant la méthodologie TDD à chaque étape. Tout au long du projet, Thales s'est révélé être un membre dévoué, curieux et proactif de l'équipe, collaborant à toutes les phases du projet et restant engagé tout au long du processus. De plus, Thales a apporté d'exemplaires contributions au développement de notre produit final, démontrant une connaissance pratique de la programmation, et ensemble, nous avons produit un pitch éducatif d'excellente qualité. Au-delà des limites de ce projet, je peux constater dans notre environnement de stage que Thales est très respecté et hautement estimé, reconnu pour son travail acharné, ses compétences techniques en développement et en conception, sa créativité, sa contribution aux processus d'innovation produit, ainsi que sa volonté d'aider les autres. Enfin, j'exprime mon admiration pour Thales, en tant que personne et en tant que professionnel, et je crois qu'il connaîtra un grand succès dans sa carrière professionnelle.”",
      "feedback_migge": "”J'ai eu l'opportunité de travailler sur plusieurs projets avec Thales, et dans tous ces projets, il y avait toujours beaucoup d'apprentissage. Je pense que la meilleure façon de décrire sa performance serait avec le mot 'Dévoué.' Thales a toujours fait preuve d'une attitude proactive, intéressée, observatrice et serviable dans le développement des projets, sachant comment communiquer et exprimer son opinion de manière assertive. En plus d'être très travailleur, Thales possède une excellente compétence pour comprendre les systèmes et proposer des solutions créatives à des problèmes complexes. Il est également très persévérant et résilient, ce qui en fait un développeur de code exceptionnel.”",
      "que_pensam": "Que pensent mes collègues?",
      "aqui": "ici",
      "lista1": "Développement d'applications iOS en utilisant Swift et ses frameworks.",
      "lista2": "Travailler avec des équipes multidisciplinaires.",
      "lista3": "Expérience en design et innovation.",
      "lista4": "Travailler avec des méthodologies agiles.",
      "lista5": "Gestion des versions et de l'organisation (Git et GitHub).",
      "lista6": "Publication d'applications sur l'App Store.",
      "lista7": "Monétisation d'applications.",
      "lista8": "Internationalisation d'applications.",
      "lista9": "Marketing d'applications sur l'App Store.",
      "experiencias": "Expériences",
      "atividades_realizadas": "Activités réalisées",
      "projetos_relacionados": "Projets liés",
      "exp1": "Boursier en innovation en développement iOS",
      "curso1": "Baccalauréat en génie informatique",
      "curso2": "Baccalauréat en sciences de l'informatique",
      "curso3": "Technologue en analyse et développement de systèmes",
      "data1": "Oct/2023 - Prévision : Jul/2028",
      "data2": "Jan/2023 - Prévision : Dec/2024",
      "data3": "Août/2021 - Dec/2022",
      "educacao": "Éducation",
      "premiacoes": "Prix",
      "conquista": "Gagnant du WWDC 2023 Swift Student Challenge avec l'application playground In a Sheet of Paper",
      "opcao1": "Plus d'informations sur le processus",
      "opcao2": "Apprenez-en davantage sur moi",
      "opcao3": "Découvrez l'application",
      "opcao4": "Télécharger le CV complet",
      "witchie_description": "a",
      "paper_description": "b",
      "receitinha_description": "c",
      "naturia_description": "d",
      "bompracachorro_description": "e",
      "gera_description": "f"
  }
  }

  getTestimonials(): TestimonialInfo[] {
    return [
      {
        name: "Guilherme Souza",
        text: "feedback_gui",
        imageUrl: "https://i.imgur.com/4P1X3x0.png"
      },
      {
        name: "Lucas Migge",
        text: "feedback_migge",
        imageUrl: "https://i.imgur.com/4P1X3x0.png"
      },
    ]
  }

}
