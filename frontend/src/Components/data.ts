import { TProduct } from './type';

const pd1: string = './Assets/pd-assort-1.jpg';
const pd2: string = './Assets/pd-cake-2.jpg';
const pd3: string = './Assets/pd-choco-6.jpg';
const pd4: string = './Assets/pd-assort-7.jpg';

const data_product: TProduct[] = [
    {
        id: 1, 
        name: 'Milk Chocolates Assorted Selection', 
        price: 5.99, 
        imageUrl: pd1, 
        description: 'Delicious milk chocolates in assorted flavors.'
    },
    {
        id: 14, 
        name: 'Double Layer Cake Chocolates', 
        price: 11.99, 
        imageUrl: pd2, 
        description: 'Experience the double-layered goodness with these cake-flavored chocolates.'
    },
    {
        id: 30, 
        name: 'Cashew Bliss Chocolates', 
        price: 12.99, 
        imageUrl: pd3, 
        description: 'Experience bliss with the creamy texture of cashews and chocolate.'
    },
    {
        id: 7, 
        name: '24 Delight Assorted Selection', 
        price: 6.49, 
        imageUrl: pd4, 
        description: 'A smaller assortment of 24 delightful chocolates.'
    },
]

export default data_product;