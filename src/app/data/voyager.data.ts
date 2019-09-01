import { BlockTri, Catcheye } from '../models/lkd-interfaces';

// ----------------------------------------------
// --- HEADER
// ----------------------------------------------

export const catcheyeHeader: Catcheye = {
    title: 'outdoors',
    subtitle: 'is where life happens',
    c2a: 'let\'s tour',
    logo: '/templates/voyager/images/logo-white.png',
    back: 'url(../../../assets/templates/voyager/images/hero.jpg)'
};

export const blockTri: BlockTri = {
    title: 'the ultimate adventures',
    button: {
        text: 'Learn More',
        link: '/templates',
        color: 'success',
    },
    blockTexts: [
        {
            title: 'The latest trends',
            // tslint:disable-next-line: max-line-length
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iste asperiores dolorum ex, similique aperiam corporis, unde adipisci cumque soluta nesciunt voluptates accusamus accusantium facilis fugiat.'
        },
        {
            title: 'in the 5 continents',
            // tslint:disable-next-line: max-line-length
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iste asperiores dolorum ex, similique aperiam corporis.'
        }
    ],
    tri: [
        '/templates/voyager/images/nat-1.jpg',
        '/templates/voyager/images/nat-2.jpg',
        '/templates/voyager/images/nat-3.jpg'
    ]
};
