import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(42,22,99)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Arijeet",
    lastName: "Mukherjee",
    initials: "Js Java", // the example uses first and last, but feel free to use three or more if you like.
    position: "Research & Development Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Coffee Lover'
        },
        {
            emoji: '🌎',
            text: 'Based in the India'
        },
        {
            emoji: "💼",
            text: "R&D Engineer at Dassault Systemes"
        },
        {
            emoji: "📧",
            text: "ari123acess@gmail.com"
        }
    ],
    socials: [{
            link: "https://www.facebook.com/emmyaari/",
            icon: 'fa fa-facebook'
        },
        {
            link: "https://www.instagram.com/arijeet.the.coder/",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://github.com/emmyari",
            icon: "fa fa-github"
        },
        {
            link: "https://bit.ly/3nc945P",
            icon: "fa fa-linkedin"
        },

        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "An experienced software developer with well developed skills and experience in software development and competitive coding.I have complete 20+ freelancingprojects and worked with many open-source frameworks.I am skilled In dealing with problems in a resourceful manner and negotiating to achieve beneficial agreement. I am always enthusiastic to learn and undertake new challenges.",
    skills: {
        proficientWith: ['Javascript', 'ReactJS', 'Core Java', 'Git', 'Github', 'Bootstrap', 'Html5', 'Css3', 'Mysql'],
        exposedTo: ['nodeJs', 'Python', 'Springboot', 'Adobe xd']
    },
    hobbies: [{
            label: 'Writing technical blogs',
            emoji: '📖'
        },
        {
            label: 'Chess',
            emoji: '♟️'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "NellZCart",
            live: "http://www.nellzcart.online",
            source: "https://github.com/emmyari/nellzcart",
            image: mock1
        },
        {
            title: "Online Disruptor",
            live: "https://onlinedisruptor.com",
            source: "https://github.com/emmyari/onlinedisrupto-admin",
            image: mock2
        },
        {
            title: "LikeMind App",
            live: "https://apps.apple.com/in/app/likeminds-community-chat/id1526635028",
            source: "https://github.com/emmyari/likemind",
            image: mock3
        },
        {
            title: "React Apps",
            live: "https://arijeetdev.herokuapp.com/",
            source: "https://github.com/emmyari/",
            image: mock4
        },
        {
            title: "Tacaclout",
            live: "https://www.tacoclout.com/",
            source: "https://github.com/emmyari/tacoclout",
            image: mock5
        }
    ]
}