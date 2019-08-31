import { BlockTri } from '../models/lkd-interfaces';


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
        'nat-1.jpg',
        'nat-2.jpg',
        'nat-3.jpg'
    ]
};
