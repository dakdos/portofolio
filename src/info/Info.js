import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

export const info = {
    firstName: "Fahmi",
    lastName: "",
    initials: "Dk", 
    position: "Saya adalah seorang Fullstack Web Developer dan Mobile App Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'Saya tinggal dibanda aceh'
        },
        {
            emoji: "💼",
            text: "Fullstack Web Developer dan Mobile App Developer"
        },
        {
            emoji: "📧",
            text: "zulfahmii2005@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/dakdos20",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/dakdos_",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/dakdos",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/zul-fahmi-253b90175/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: `
        Saya adalah seorang Fullstack Web Developer dan Mobile App Developer yang antusias untuk terus belajar dan mengembangkan keterampilan baru. 
        Dengan pengalaman yang luas dalam berbagai teknologi dan bahasa pemrograman, 
        saya mampu mengelola proyek dari tahap perencanaan hingga implementasi dan release.
    `,

    skills: [
        {
            'proficientWith' : 'Html'
        }, {
            'proficientWith' : 'Css'
        }, {
            'proficientWith' : 'Bootstrap'
        }, {
            'proficientWith' : 'JavaScript'
        }, {
            'proficientWith' : '- Ajax'
        }, {
            'proficientWith' : '- Library (Jquery)'
        } , {
            'proficientWith' : '- Frontend (React.js)'
        }, {
            'proficientWith' : '- Backend (Node.js, Express.js)'
        }, {
            'proficientWith' : '- Full-Stack (Next.js)'
        }, {
            'proficientWith' : 'Php'
        }, {
            'proficientWith' : '- Codeigniter'
        }, {
            'proficientWith' : '- Laravel'
        }, {
            'proficientWith' : '- Lumen'
        }, {
            'proficientWith' : 'Mysql/Mariadb'
        }, {
            'proficientWith' : 'Dart'
        }, {
            'proficientWith' : 'Flutter'
        }, {
            'proficientWith' : '- Flutter widgets'
        }, {
            'proficientWith' : '- Provider, Riverpod'
        }, {
            'proficientWith' : '- Animations, transitions'
        }, {
            'proficientWith' : '- SQLite, Hive, Shared Preferences'
        }, {
            'proficientWith' : '- Firebase'
        }, {
            'proficientWith' : '- RESTful APIs'
        }, {
            'proficientWith' : '- Custom UI designs'
        }, {
            'proficientWith' : '- Navigation and routing'
        }, {
            'proficientWith' : '- Responsive UI'
        }, {
            'proficientWith' : 'GitHub, GitLab'
        },
    ],

    hobbies: [
        {
            label: 'Coffee',
            emoji: '☕'
        }, {
            label: 'Coding',
            emoji: '🧑‍💻' 
        }

    ],
    portfolio: [
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", 
            source: "https://github.com/paytonjewell",
            image: ''
            // image: mock1
        }
    ]
}