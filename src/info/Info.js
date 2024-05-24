import self from "../img/paulg.png"
import mock1 from "../img/ArgentBank.png"
import mock2 from "../img/Kasa.png"
import mock3 from "../img/724events.png"
import mock4 from "../img/CSS3_and_HTML5_logos_and_wordmarks.png";
import mock5 from "../img/Javascript_Logo.png";
import mock6 from "../img/NodeJS.png";
import mock7 from "../img/React-icon.png";
import mock8 from "../img/Redux.png";
import mock9 from "../img/512px-Sass_Logo_Color.png";

export let colors = ["#aa4b6b", "#6b6b83", "#3b8d99"];

export const info = {
    firstName: "Paul",
    lastName: "Gerbaux",
    initials: "pgx", 
    position: "Talent Acqusition Specialist IT",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌍',
            text: 'Basé en France'
        },
        {
            emoji: "📧",
            text: "paul.gerbaux@gmail.com"
        }
    ],
    bio: "Passionné par le SaaS et en reconversion vers le développement informatique, j'ai forgé mon parcours dans le recrutement et la relation client. Ma transition vers le monde du développement s'articule autour d'une formation intense en intégration web chez OpenClassrooms. Fort d'une expérience polyvalente, je recherche à m'épanouir en tant que recruteur IT, alliant compétences acquises et passion pour l'innovation technologique",
    skills:
        {
            proficientWith: ['Javascript', 'NodeJS', 'React', 'Redux', 'git', 'github', 'html5', 'css3', 'figma', 'Redux', 'LinkedIn', 'HubSpot', 'lemlist', 'Notion', 'Tableaux', 'Intercom', 'Anglais'],
            exposedTo: ['SEO', 'Scrum', 'Russe', 'Espagnol']
        }
    ,
    hobbies: [
        {
            label: 'running',
            emoji: '👟'
        },
        {
            label: 'films',
            emoji: '🎥'
        },
        {
            label: 'musique et podcasts',
            emoji: '🎶'
        },
        {
            label: 'voyages',
            emoji: '🧳'
        }
    ],
    portfolio: [
        {
            title : "Implémentation du front-end d'une application bancaire avec React. Création d'une application web complète et responsive avec React. Utilisation de Redux pour gérer le state de l'ensemble de l'application. Préparation des routes API pour la partie transaction du site, rédaction du document YAML.",
            live: "https://argent-bank-pi.vercel.app/",
            source: "https://github.com/Sang-loi/ArgentBank",
            image: mock1,
            techno: [mock4, mock5, mock6, mock7, mock8, mock9]
        },
        {
            title : "Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Nous avons donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.",
            live: "https://kasa-mocha-delta.vercel.app/",
            source: "https://github.com/Sang-loi/Kasa",
            image: mock2,
            techno : [mock4, mock5, mock6, mock9]
        },
        {
            title : "L'agence 724 Events souhaitait publier la nouvelle version de son site vitrine. Il s'agit d'un site one-page. Le design avait été validé, et un premier développeur freelance avait commencé l'intégration. Ce freelance a dû abandonner le projet pour raisons personnelles. Le site était fonctionnel, mais quelques bugs entravaient le bon usage par les visiteurs. 724 events a donc fait appel à moi pour finaliser le travail.",
            live: "https://724events-rust.vercel.app/",
            source: "https://github.com/Sang-loi/724events",
            image: mock3,
            techno : [mock4, mock5, mock6, mock7, mock9]
        },
    ]
}
