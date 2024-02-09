import { TProduct } from '../Types/type';

const pd1: string = './Assets/pd-assort-2.jpg';
const pd2: string = './Assets/pd-cake-5.jpg';
const pd3: string = './Assets/pd-choco-3.jpg';
const pd4: string = './Assets/pd-assort-6.jpg';
const pd5: string = './Assets/pd-assort-7.jpg';
const pd6: string = './Assets/pd-assort-10.jpg';
const pd7: string = './Assets/pd-cake-6.jpg';
const pd8: string = './Assets/pd-choco-11.jpg';


const new_collections: TProduct[] = [
    {
        id: 2, 
        name: 'Milk Chocolates Assorted Selection', 
        price: 5.99, 
        imageUrl: pd1, 
        description: 'Delicious milk chocolates in assorted flavors.'
    },
    {
        id: 17, 
        name: 'Double Layer Cake', 
        price: 11.99, 
        imageUrl: pd2, 
        description: 'Experience the double-layered goodness with these cake-flavored chocolates.'
    },
    {
        id: 27, 
        name: 'Cashew Bliss Chocolates', 
        price: 12.99, 
        imageUrl: pd3, 
        description: 'Experience bliss with the creamy texture of cashews and chocolate.'
    },
    {
        id: 6, 
        name: '24 Delight Assorted Selection', 
        price: 6.49, 
        imageUrl: pd4, 
        description: 'A smaller assortment of 24 delightful chocolates.'
    },
    {
        id: 7, 
        name: 'Mixed Assorted Selection', 
        price: 8.49, 
        imageUrl: pd5, 
        description: 'A delightful mix of assorted chocolates to tantalize your taste buds.'
    },
    {
        id: 10, 
        name: 'Darkness Assorted Selection', 
        price: 24.99, 
        imageUrl: pd6, 
        description: 'For the dark chocolate enthusiasts, this assortment is pure indulgence.'
    },
    {
        id: 18, 
        name: 'Chocolate Mint Cake Chocolates', 
        price: 9.99, 
        imageUrl: pd7, 
        description: 'Minty freshness combined with the sweetness of chocolate cake.'
    },
    {
        id: 35, 
        name: 'Macadamia Dream Chocolates', 
        price: 16.99, 
        imageUrl: pd8, 
        description: 'Dreamy macadamia nuts combined with rich and smooth chocolate.'
    }
]

export default new_collections;