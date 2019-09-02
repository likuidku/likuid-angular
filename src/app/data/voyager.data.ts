import { BlockTrimg, Catcheye, BlockCard } from '../models/lkd-interfaces';

// ----------------------------------------------
// --- HEADER
// ----------------------------------------------

export const catcheyeHeader: Catcheye = {
    title: 'outdoors',
    subtitle: 'is where life happens',
    c2a: 'let\'s tour',
    logo: '/templates/voyager/icons/logo-header.svg',
    back: 'url(assets/templates/voyager/images/hero.jpg)'
};

// ----------------------------------------------
// --- BLOCK TRIMAGE
// ----------------------------------------------

export const blockTri: BlockTrimg = {
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

// ----------------------------------------------
// --- BLOCK CARDS
// ----------------------------------------------

export const blockCards: BlockCard = {

    back: 'url(assets/templates/voyager/images/nat-4.jpg)',
    cards: [
        {
            title: 'explore the world',
            icon: '/templates/voyager/icons/block-card-1.svg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo dolores quibusdam expedita itaque fuga id.'
        },
        {
            title: 'meet nature',
            icon: '/templates/voyager/icons/block-card-2.svg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo dolores quibusdam expedita itaque fuga id.'
        },
        {
            title: 'find your way',
            icon: '/templates/voyager/icons/block-card-3.svg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo dolores quibusdam expedita itaque fuga id.'
        },
        {
            title: 'live a healthier life',
            icon: '/templates/voyager/icons/block-card-4.svg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo dolores quibusdam expedita itaque fuga id.'
        },
    ]
};
